import React, { Component } from 'react';

// Import Material UI components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleAnswer = (event, selected) => {
    this.setState({ selected }, () => {
      this.props.onSetAnswer('answerOne', selected);
    });
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
            <Grid item xs={10}>
              <Typography variant="h1" align="center" gutterBottom>
                How does the ward atmosphere feel to you today?
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                You can only make 1 selection
              </Typography>
            </Grid>
        </Grid>
        <Grid
          container
          justify="center">
          <ToggleButtonGroup
            value={selected}
            exclusive
            onChange={this.handleAnswer}
            aria-label="How does the ward atmosphere feel to you today?"
          >
            <ToggleButton value={-2} aria-label="Very calm">
              <Typography variant="subtitle1">Very calm</Typography>
            </ToggleButton>
            <ToggleButton value={-1} aria-label="Calm">
              <Typography variant="subtitle1">Calm</Typography>
            </ToggleButton>
            <ToggleButton value={0} aria-label="Neither calm nor stormy">
              <Typography variant="subtitle1">Neither calm nor stormy</Typography>
            </ToggleButton>
            <ToggleButton value={1} aria-label="Stormy">
              <Typography variant="subtitle1">Stormy</Typography>
            </ToggleButton>
            <ToggleButton value={2} aria-label="Very stormy">
              <Typography variant="subtitle1">Very stormy</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <div style={{
          display: 'block',
          width: '100%',
          height: '13px',
          marginTop: 32,
          marginBottom: 64,
          background: 'linear-gradient(90deg, rgba(255,211,71,1) 0%, rgba(196,196,196,0) 50%, rgba(137,141,141,1) 100%)',
        }}></div>
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
                      disabled={selected === null}
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