import React, { Component } from 'react';

// Import Material UI Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Import components
import AtmosphereDial from '../components/AtmosphereDial';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Box
          component="main"
          bgcolor="background.default"
          style={{            
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "calc(100vh - 217px)",
            padding: "2rem 2rem",
            boxSizing: "border-box",
          }}>
          <Grid
            container
            justify="center">
            <Grid item xs={8}>
              <Typography variant="h1" align="center">
                How does the ward atmosphere feel to you today?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AtmosphereDial />
            </Grid>
          </Grid>
        </Box>
        <Box
          component="footer"
          py={5}>
          <Typography variant="body1" align="center">
            Last refreshed: 3 minutes ago
          </Typography>
        </Box>
      </div>
    )
  }
}

export default Dashboard;