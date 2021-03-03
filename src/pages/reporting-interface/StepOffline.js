import React, { Component } from 'react';
import { Detector } from 'react-detect-offline';

// Import Material UI components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepOffline extends Component {
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
            <Grid item xs={10}>
              <Typography
                variant="h1"
                align="center"
                gutterBottom>
                You are offline
              </Typography>
              <Typography
                variant="h3"
                align="center"
                gutterBottom>
                You need to connect to the internet before you can submit.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                gutterBottom>
                Your submission will be stored on the device until you have internet.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                gutterBottom>
                Please try moving around the ward and try submitting again.
              </Typography>
            </Grid>
        </Grid>
        <div style={{ marginTop: 80 }}>
          <Grid
            container
            justify="center"
            alignItems="center">
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item>
                    <Detector
                      polling={{url: process.env.REACT_APP_API_URL}}
                      render={({ online }) => (online ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => this.handleStepChange(5)}>
                            Submit again <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          disabled>
                            Submit again <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
                        </Button>
                      ))}
                    />
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default StepOffline;