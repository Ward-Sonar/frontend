import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepThree extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h1" align="center" gutterBottom>
                What direction is it going in?
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                You can only make 1 selection
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
                      color="primary"
                      disabled>
                        Finish <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
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

export default StepThree;