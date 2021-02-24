import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleAnswer = (event, selected) => {
    this.setState({ selected }, () => {
      this.props.onSetAnswer('answerThree', selected);
    });
  };

  handleStepChange(step) {
    this.props.onStepChange(step);
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center">
            <Grid item xs={10}>
              <Typography
                variant="h2"
                align="center"
                gutterBottom>
                Which of the things below is making the ward feel [option]?
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
            <ToggleButton value={1} aria-label="The staff">
              <Typography variant="subtitle1">The staff</Typography>
            </ToggleButton>
            <ToggleButton value={2} aria-label="The other patients">
              <Typography variant="subtitle1">The other patients</Typography>
            </ToggleButton>
            <ToggleButton value={3} aria-label="How I'm feeling">
              <Typography variant="subtitle1">How I'm feeling</Typography>
            </ToggleButton>
            <ToggleButton value={4} aria-label="The ward/environment">
              <Typography variant="subtitle1">The ward/environment</Typography>
            </ToggleButton>
            <ToggleButton value={5} aria-label="Other">
              <Typography variant="subtitle1">Other</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
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
                      disabled={!selected}
                      onClick={() => this.handleStepChange(5)}>
                        Finish <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} />
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

export default StepFour;