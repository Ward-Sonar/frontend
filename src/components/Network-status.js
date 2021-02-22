import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { ReactComponent as OnlineIndicator } from './../assets/online-indicator.svg';

class NetworkStatus extends Component {
  render() {
    return (
      <Box
        px={3}
        py={3}
        border={1}
        borderColor="common.gray"
        borderRadius={14}
        boxShadow={3}
        elevation={3}
        variant="outlined">
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="center">
          <Grid item>
            <OnlineIndicator />
          </Grid>

          <Grid item>
            <Typography variant="h4">
              Wifi Online
            </Typography>
            <Typography variant="body2" color="textSecondary">
              You can make a submission
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default NetworkStatus;