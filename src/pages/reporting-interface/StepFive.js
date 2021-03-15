import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class StepFour extends Component {
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
                Thank you for sharing your feelings with us.
              </Typography>
              <Typography
                variant="h3"
                align="center"
                gutterBottom>
                The data has been saved.
              </Typography>
            </Grid>
        </Grid>
        <div style={{ marginBottom: 80 }}>
          <Grid
            container
            justify="center"
            alignItems="center">
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => this.handleStepChange(1)}>
                        Press to close
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
        <Grid
          container
          justify="center"
          alignItems="center">
            <Grid item>
              <Box
                mt={12}
                px={3}
                py={2}
                bgcolor="#FFF4D7"
                border={1}
                borderColor="common.gray"
                borderRadius={4}>
                <Typography
                  variant="subtitle1"
                  align="center">
                  Please hand back to a staff member
                </Typography>
              </Box>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default StepFour;