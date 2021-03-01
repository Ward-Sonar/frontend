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
      this.props.onSetAnswer('causes', selected);
    });
  };

  handleDetail = (event) => {
    if(event.target.value.length <= 140) {
      this.setState({ detail: event.target.value }, () => {
        this.props.onSetAnswer('comment', event.target.value);
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
                Which of the things below is making the ward feel {this.props.howDoesTheWardFeel}?
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
            <ToggleButton value={1} aria-label="The staff">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">The staff</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={2} aria-label="The other patients">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">The other patients</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={3} aria-label="How I'm feeling">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1">How I'm feeling</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={4} aria-label="The ward/environment">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
                <Typography variant="subtitle1" style={{wordBreak: 'break-all'}}>The ward/environment</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={5} aria-label="Other">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
              <Typography variant="subtitle1">Option 5</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={6} aria-label="Other">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
              <Typography variant="subtitle1">Option 6</Typography>
              </div>
            </ToggleButton>
            <ToggleButton value={7} aria-label="Other">
              <div className="custom-toggle-button-icon">
                
              </div>
              <div className="custom-toggle-button-label">
              <Typography variant="subtitle1">Other</Typography>
              </div>
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