#!/usr/bin/env bash

# Requires the following environment variables:
# $ENVIRONMENT = The environment (production/release/staging).
# $AWS_ACCESS_KEY_ID = The AWS access key.
# $AWS_SECRET_ACCESS_KEY = The AWS secret access key.
# $AWS_DEFAULT_REGION = The AWS region.
# $S3_BUCKET_NAME = The S3 bucket to deploy to.
# $DISTRIBUTION_ID = The CloudFront distribution to invalidate.

# Bail out on first error.
set -e

# Declare the configuration variables for the deployment.
echo "Setting deployment configuration for ${ENVIRONMENT}..."
ENV_SECRET_ID=".env.frontend.${ENVIRONMENT}"

# Install AWS-CLI
if ! command -v aws &> /dev/null; then
    echo "Installing AWS CLI..."
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "$HOME/awscliv2.zip"
    rm -rf ${HOME}/aws-tmp
    unzip ${HOME}/awscliv2.zip -d ${HOME}/aws-tmp
    sudo ${HOME}/aws-tmp/aws/install
    echo `aws --version`

    rm -r ${HOME}/aws-tmp
    rm ${HOME}/awscliv2.zip
fi

if [ ! -z "${AWS_IAM_ROLE_ARN}" ]; then
        mkdir -p ${HOME}/.aws
        rm -f ${HOME}/.aws/config
        cat <<EOF > $HOME/.aws/config
[default]
    aws_access_key_id=$AWS_ACCESS_KEY_ID
    aws_secret_access_key=$AWS_SECRET_ACCESS_KEY
    region=$AWS_DEFAULT_REGION
[profile accessrole]
    role_arn=$AWS_IAM_ROLE_ARN
    source_profile=default
EOF
fi

# Get the .env file.
if [ ! -z "${AWS_IAM_ROLE_ARN}" ]; then
    echo "Creating .env file from secret: $ENV_SECRET_ID as IAM Role: $AWS_IAM_ROLE_ARN"
    SECRET=`aws secretsmanager get-secret-value \
        --profile accessrole \
        --secret-id ${ENV_SECRET_ID}`
else
    echo "Creating .env file from secret: $ENV_SECRET_ID"
    SECRET=`aws secretsmanager get-secret-value \
        --secret-id ${ENV_SECRET_ID}`
fi

rm -f .env

echo $SECRET | python -c "import json,sys;obj=json.load(sys.stdin);print obj['SecretString'];" > .env

source .env

# Build.
echo "Building..."
npm run build

# Deploy to S3.
echo "Deploying..."
if [ ! -z "${AWS_IAM_ROLE_ARN}" ]; then
    aws s3 sync build/ "s3://${S3_BUCKET_NAME}" --acl public-read --delete --profile accessrole
    aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" --paths "/*" --profile accessrole
else
    aws s3 sync build/ "s3://${S3_BUCKET_NAME}" --acl public-read --delete
    aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" --paths "/*"
fi
