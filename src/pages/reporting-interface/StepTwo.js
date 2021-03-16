import React, { Component } from 'react';

// Import Material UI components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Import illustrations
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as SunCloudGrey } from '../../assets/sun-cloud-grey.svg';
import { ReactComponent as CloudGrey } from '../../assets/cloud-grey.svg';
import { ReactComponent as DarkCloud } from '../../assets/dark-cloud.svg';
import { ReactComponent as DarkCloudStorm } from '../../assets/dark-cloud-storm.svg';

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    }
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleAnswer = (event, selected) => {
    this.setState({
      selected: [selected]
    }, this.props.onSetAnswer('atmosphere', selected));
  };

  handleStepChange(step) {
    this.props.onStepChange(step);
  }

  render() {
    const { selected } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <Grid
          container
          justify="center"
          alignItems="center">
          <Grid item xs>
            <Typography variant="h1" align="center" gutterBottom>
              How does the ward atmosphere feel right now?
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              Please pick one
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{position: "relative"}}>
          <ToggleButtonGroup
            value={selected}
            exclusive
            onChange={this.handleAnswer}
            aria-label="How does the ward atmosphere feel to you today?"
          >
            <ToggleButton value={-2} aria-label="Very calm">
              <div className="custom-toggle-button-icon">
                <Sun />
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">Very calm</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={-1} aria-label="Calm">
              <div className="custom-toggle-button-icon">
                <SunCloudGrey />
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">Calm</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={0} aria-label="Neither calm nor stormy">
              <div className="custom-toggle-button-icon">
                <CloudGrey />
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">Neither calm nor stormy</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={1} aria-label="Stormy">
              <div className="custom-toggle-button-icon">
                <DarkCloud />
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">Stormy</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={2} aria-label="Very stormy">
              <div className="custom-toggle-button-icon">
                <DarkCloudStorm />
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">Very stormy</Typography>
              </div>
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="gradient-bar"></div>
        </Grid>
        <div style={{ marginTop: 40 }}>
          <Grid
            container
            justify="center"
            alignItems="center">
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={selected.length === 0}
                      onClick={() => this.handleStepChange(3)}>
                        Next <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default StepTwo;