import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepFour extends Component {
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
                Thank you for sharing your ward feelings with us
              </Typography>
              <Typography
                variant="h3"
                align="center"
                gutterBottom>
                Your submission has been saved
              </Typography>
            </Grid>
        </Grid>
        <div style={{ marginTop: 40 }}>
          <Grid
            container
            justify="center"
            alignItems="center">
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary">
                        Press to close
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default StepFour;