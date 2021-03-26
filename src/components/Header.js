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
          px={4}
          py={4}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={4}>
            <Grid item sm>
              <Route exact path="/" component={NetworkStatus} />
              <Route exact path="/dashboard">
                <Typography variant="h4" align="left" style={{width: '100%'}}>
                  {process.env.REACT_APP_WARD_NAME}
                </Typography>
              </Route>
            </Grid>

            <Grid
              item
              sm
              container
              justify="flex-end"
              alignItems="center">
              <div style={{display: 'block', width: '100%', textAlign: 'right'}}>
                <img src={Logo} alt="NHS: Leeds and York Partnership - NHS Foundation Trust" style={{maxWidth: '100%'}}/>
              </div>
              <Route exact path="/">
                <Typography variant="h4" align="right" style={{width: '100%'}}>
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