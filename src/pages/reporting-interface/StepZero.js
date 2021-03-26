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
      <div style={{width: '100%'}}>
        <Button
          style={{
            position: 'absolute',
            top: 32,
            left: 32,
          }}
          variant="contained"
          color="secondary"
          onClick={() => this.handleStepChange(1)}>
          <ArrowBack style={{ marginRight: 8, fontSize: 40 }} /> Go back
        </Button>
        <Grid
          container
          justify="center"
          alignItems="center" style={{paddingTop: 80}}>
          <Typography variant="h1" align="center" gutterBottom style={{width: '100%'}}>
            Not right now
          </Typography>
          <Typography variant="body1" align="center" gutterBottom style={{width: '100%'}}>
            We hope that you will do this next time.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleStepChange(1)}>
              Finish <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
          </Button>
        </Grid>
      </div>
    )
  }
}

export default StepZero;