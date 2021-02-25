import React, { Component } from 'react';
import { Detector } from 'react-detect-offline';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { ReactComponent as OnlineIndicator } from './../assets/online-indicator.svg';
import { ReactComponent as OfflineIndicator } from './../assets/offline-indicator.svg';

class NetworkStatus extends Component {
  render() {
    return (
      <Box
        maxWidth={396}
        px={3}
        py={2}
        border={1}
        borderColor="common.gray"
        borderRadius={14}
        boxShadow={3}
        elevation={3}
        variant="outlined">
        <Grid
          container
          style={{ height: "111px" }}
          spacing={2}
          justify="space-between"
          alignItems="center">
          <Grid item>
            <Detector
              render={({ online }) => (online ? <OnlineIndicator /> : <OfflineIndicator />)}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="h4">
              <Detector
                render={({ online }) => (
                  <div>
                    Wifi {online ? "Online" : "Offline"}
                  </div>
                )}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Detector
                render={({ online }) => (
                  <div>
                    You can make a submission {!online && "but can't submit until you're connected"}
                  </div>
                )}
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default NetworkStatus;