import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      detail: '',
    }
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleAnswer = (event, selected) => {
    this.setState({ selected }, () => {
      this.props.onSetAnswer('answerThree', selected);
    });
  };

  handleDetail = (event) => {
    if(event.target.value.length <= 140) {
      this.setState({ detail: event.target.value }, () => {
        this.props.onSetAnswer('answerThreeDetail', event.target.value);
      });
    }
  };

  handleStepChange(step) {
    this.props.onStepChange(step);
  }

  render() {
    const { selected, detail } = this.state;

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
            onChange={this.handleAnswer}
            required
            aria-label="How does the ward atmosphere feel to you today?"
          >
            <ToggleButton value={'the-staff'} aria-label="The staff">
              <Typography variant="subtitle1">The staff</Typography>
            </ToggleButton>
            <ToggleButton value={'the-other-patients'} aria-label="The other patients">
              <Typography variant="subtitle1">The other patients</Typography>
            </ToggleButton>
            <ToggleButton value={'how-im-feeling'} aria-label="How I'm feeling">
              <Typography variant="subtitle1">How I'm feeling</Typography>
            </ToggleButton>
            <ToggleButton value={'the-ward-environment'} aria-label="The ward/environment">
              <Typography variant="subtitle1" style={{wordBreak: 'break-all'}}>The ward/environment</Typography>
            </ToggleButton>
            <ToggleButton value={'other'} aria-label="Other">
              <Typography variant="subtitle1">Other</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {selected.length > 0 &&
          <div style={{
            marginTop: 80,
            marginBottom: 80,
            }}>
            <Grid
            container
            alignContent="center"
            direction="column"
            spacing={2}
            >
              <Grid item>
                <Typography variant="h3" align="center">
                  Please describe in a few words
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="detail"
                  aria-label="Please describe in a few words"
                  multiline
                  rowsMax={4}
                  placeholder="Type here"
                  value={detail}
                  onChange={this.handleDetail}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  You can use up to 140 characters
                </Typography>
              </Grid>
            </Grid>
          </div>
        }
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
                      disabled={!selected.length}
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