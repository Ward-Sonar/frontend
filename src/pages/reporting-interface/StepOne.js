import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

class StepOne extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h1" gutterBottom>
                  Reporting interface
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We know that sometimes on wards patients don’t feel safe. We are trying to make wards safer by understanding how the feeling of a ward (atmosphere/milieu) links to patient safety. We want to see if we can learn about how wards feel and help staff to make them feel safer.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Over the next few weeks we will ask you three questions, three times a day. The questions have been written with patients. They try to focus on how the ward (atmosphere/milieu) feels to you.
                </Typography>
                <Typography variant="subtitle1">
                  How long will it take?
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We very much hope that you will help us, it should take no more than a few minutes of your time. The more times you do this the better it will be for the study, but if now is not a good time just click the button [Not right now] below.
                </Typography>
                <Typography variant="subtitle1">
                  Is it anonymous?
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The answers to the questions will be stored safely and made anonymous.
                </Typography>
                <Typography variant="subtitle1">
                  Where can I find more information?
                </Typography>
                <Typography variant="body1">
                  This study has been reviewed by the NHS ethics committee (insert reference). This study has been funded by the National Institute for Health Research. If you want to know more about the study please click here [insert hyperlink].
                </Typography>
            </Grid>
        </Grid>
        <div style={{ marginTop: 40 }}>
          <Grid
            container
            justify="center"
            alignItems="center">
              <Grid item xs={10}>
                <Grid container spacing={5}>
                  <Grid item>
                    <Button variant="contained" color="primary">Start now <ArrowForwardIcon style={{ marginLeft: 8, fontSize: 40 }} /></Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="gray">Not right now <CloseIcon style={{ marginLeft: 8, fontSize: 40 }} /></Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default StepOne;