import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Import Material UI components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import NetworkStatus from './../components/Network-status';

import Logo from './../assets/nhs-leeds-and-yorkshire-partnership.png';

class Header extends Component {
  render() {
    return (
      <Router>
        <Box
          component="header"
          bgcolor="common.white"
          px={6}
          py={4}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={4}>
            <Grid item xs>
              <Route exact path="/" component={NetworkStatus} />
              <Route exact path="/dashboard">
                <Typography variant="h4" align="left">
                  {process.env.REACT_APP_WARD_NAME}
                </Typography>
              </Route>
            </Grid>

            <Grid
              item
              xs
              container
              justify="flex-end"
              alignItems="center">
              <img src={Logo} alt="NHS: Leeds and York Partnership - NHS Foundation Trust" />
              <Route exact path="/">
                <Typography variant="h4" align="right">
                  {process.env.REACT_APP_WARD_NAME}
                </Typography>
              </Route>
            </Grid>
          </Grid>
        </Box>
      </Router>
    );
  }
}

export default Header;