import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange(step) {
    this.props.onStepChange(step);
  }

  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center">
          <Grid item xs>
            <Typography variant="h1" gutterBottom>
              Reporting interface
            </Typography>
            <Typography variant="subtitle1">
              Please tell us how the ward feels today.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We know that sometimes patients on wards do not feel safe. We want to see if we can learn about how the ward atmosphere feels, how this links to patient safety, and if we can help staff to make patients feel safer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Over the next few weeks we will ask you a few questions, three times a day. Patients have helped us write these questions. They ask you how the ward feels to you right now.
            </Typography>
            <Typography variant="subtitle1">
              How long will it take?
            </Typography>
            <Typography variant="body1" gutterBottom>
              We very much hope that you will help us. Answering the questions will take no more than a few minutes of your time. The more times you do this, the more we will understand about how the ward feels. But if now is not a good time just click the [Not right now] button below.
            </Typography>
            <Typography variant="subtitle1">
              Is it anonymous?
            </Typography>
            <Typography variant="body1" gutterBottom>
              All answers are anonymous. The data is encrypted and stored safely. Staff, patients and researchers will be able to see and discuss the data.
            </Typography>
            <Typography variant="subtitle1">
              Where can I find more information?
            </Typography>
            <Typography variant="body1">
              The study has been favourably reviewed (or approved) by xx NHS ethics committee (insert reference). If you want to know more, please click here [insert hyperlink] or ask a member of staff for an information leaflet.
            </Typography>
          </Grid>
        </Grid>
        <div style={{ marginTop: 96 }}>
          <Grid
            container
            alignItems="center">
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleStepChange(2)}>Start now <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} /></Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => this.handleStepChange(0)}>Not right now <CloseIcon style={{ marginLeft: 8, fontSize: 40 }} /></Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default StepOne;