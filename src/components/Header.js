import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import NetworkStatus from './../components/Network-status';

import Logo from './../assets/nhs-leeds-and-yorkshire-partnership.png';

class Header extends Component {
  render() {
    return (
      <Box
        component="header"
        bgcolor="common.white"
        px={6}
        py={4}>
        <Grid
          container
          justify="space-between"
          alignItems="center">
          <Grid item>
            <NetworkStatus />
          </Grid>

          <Grid item>
            <img src={Logo} alt="NHS: Leeds and York Partnership - NHS Foundation Trust" />
            <Typography variant="h4" align="right">
              Ward Name
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Header;