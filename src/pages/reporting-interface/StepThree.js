import React, { Component } from 'react';

// Import Material UI components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleAnswer = (event, selected) => {
    this.setState({ selected }, () => {
      this.props.onSetAnswer('answerTwo', selected);
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
                What direction is it going in?
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
            <ToggleButton value={-1} aria-label="Getting better">
              <Typography variant="subtitle1">Getting better</Typography>
            </ToggleButton>
            <ToggleButton value={0} aria-label="The same">
              <Typography variant="subtitle1">The same</Typography>
            </ToggleButton>
            <ToggleButton value={1} aria-label="Getting worse">
              <Typography variant="subtitle1">Getting worse</Typography>
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
                      disabled={selected === null}
                      onClick={() => this.handleStepChange(4)}>
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

export default StepThree;