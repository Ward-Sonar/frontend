import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepZero extends Component {
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
        <Button
          style={{
            position: 'absolute',
            top: 70,
            left: 52,
          }}
          variant="contained"
          color="secondary"
          onClick={() => this.handleStepChange(1)}>
          <ArrowBack style={{ marginRight: 8, fontSize: 40 }} /> Go back
        </Button>
        <Grid
          container
          justify="center"
          alignItems="center">
          <Grid container xs={6} justify="center">
            <Typography variant="h1" align="center" gutterBottom>
              Not right now
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis odio purus, sed consectetur mi tempus auctor. Vivamus vel sem ac orci tempor elementum 
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleStepChange(1)}>
                Finish <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default StepZero;