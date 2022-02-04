import React, { Component } from 'react';

// Import Material UI Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Import components
import AtmosphereDial from '../components/AtmosphereDial';
import Timestamp from 'react-timestamp';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshTime: null,
    }
    this.setRefreshTime = this.setRefreshTime.bind(this);
  }

  setRefreshTime(time) {
    this.setState({
      refreshTime: time
    });
  }

  render() {
    return (
      <div>
        <Box
          component="main"
          bgcolor="background.default"
          style={{            
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            minHeight: "calc(100vh - 217px)",
            padding: "2rem 2rem 0 2rem",
            boxSizing: "border-box",
          }}>
          <Grid
            container
            justify="center">
            <Grid item xs={8}>
              <Typography variant="h1" align="center" gutterBottom>
                How does the ward atmosphere feel today?
              </Typography>
            </Grid>
            <Grid item xs={12} style={{marginTop: 'auto'}}>
              <AtmosphereDial setRefreshTime={this.setRefreshTime} />
            </Grid>
          </Grid>
        </Box>
        {this.state.refreshTime &&
          <Box
            component="footer"
            py={5}>
            <Typography variant="body1" align="center">
              Last refreshed: <Timestamp date={this.state.refreshTime} />
            </Typography>
          </Box>
        }
      </div>
    )
  }
}

export default Dashboard;