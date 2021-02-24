import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

// Import components
import Footer from '../components/Footer';
import StepZero from './reporting-interface/StepZero';
import StepOne from './reporting-interface/StepOne';
import StepTwo from './reporting-interface/StepTwo';
import StepThree from './reporting-interface/StepThree';
import StepFour from './reporting-interface/StepFour';
import StepFive from './reporting-interface/StepFive';

class ReportingInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 2,
      answerOne: null,
      answerTwo: null,
      answerThree: null,
      answerDetail: null,
    };

    this.setAnswer = this.setAnswer.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  setAnswer(id, answer) {
    this.setState({
      [id]: answer
    });
  }

  handleStepChange(step) {
    this.setState({
      step: step,
    })
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
            alignItems: "center",
            minHeight: "calc(100vh - 178px)",
            padding: "2rem 2rem",
            boxSizing: "border-box",
          }}>
            {this.state.step === 0 &&  
              <StepZero onStepChange={this.handleStepChange} />
            }
            {this.state.step === 1 &&
              <StepOne onStepChange={this.handleStepChange} />
            }
            {this.state.step === 2 &&
              <StepTwo onStepChange={this.handleStepChange} onSetAnswer={this.setAnswer} />
            }
            {this.state.step === 3 &&
              <StepThree onStepChange={this.handleStepChange} onSetAnswer={this.setAnswer} />
            }
            {this.state.step === 4 &&
              <StepFour onStepChange={this.handleStepChange} />
            }
            {this.state.step === 5 &&
              <StepFive onStepChange={this.handleStepChange} />
            }
        </Box>
        {this.state.step === 1 &&
          <Footer />
        }
      </div>
    )
  }
}

export default ReportingInterface;