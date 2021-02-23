import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

import StepOne from './reporting-interface/StepOne';
import StepTwo from './reporting-interface/StepTwo';
import StepThree from './reporting-interface/StepThree';
import StepFour from './reporting-interface/StepFour';
import StepFive from './reporting-interface/StepFive';

class ReportingInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      answerOne: '',
      answerTwo: '',
      answerThree: '',
      answerThreeDetail: '',
    };
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange(step) {
    this.setState({
      step: step,
    })
  }

  render() {
    return (
      <Box
        component="main"
        bgcolor="background.default"
        px={4}
        py={16}>
          {this.state.step === 1 &&
            <StepOne onStepChange={this.handleStepChange} />
          }
          {this.state.step === 2 &&
            <StepTwo />
          }
          {this.state.step === 3 &&
            <StepThree />
          }
          {this.state.step === 4 &&
            <StepFour />
          }
          {this.state.step === 5 &&
            <StepFive />
          }
      </Box>
    )
  }
}

export default ReportingInterface;