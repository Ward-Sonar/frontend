import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import NIHRLogo from './../assets/national-institute-for-health-research.png';
import UniversityOfLeedsLogo from './../assets/university-of-leeds.png';

class Header extends Component {
  render() {
    return (
      <Box
        component="footer"
        bgcolor="common.white"
        px={10}
        py={8}>
        <Grid
          container
          justify="space-between"
          alignItems="center">
          <Grid item>
            <Typography variant="body2">
              The #WardSonar study is funded by the National Institute for Health Research (NIHR) Health Services and Delivery Research programme (Grant Reference Numbers NIHR128070). The views expressed are those of the author(s) and not necessarily those of the NIHR or the Department of Health and Social Care
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="center">
          <Grid item>
            <img src={NIHRLogo} alt="National Institue for Health Research" />
          </Grid>
          <Grid item>
            <img src={UniversityOfLeedsLogo} alt="University of Leeds" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Header;