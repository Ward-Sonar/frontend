import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';

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
      <div>
        <Box
          component="main"
          style={{
            bgcolor: "background.default",
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "calc(100vh - 178px)",
            padding: "2rem 2rem",
            boxSizing: "border-box",
          }}>
            {this.state.step === 0 &&
              <div>
                <Button
                  style={{
                    position: 'absolute',
                    top: 70,
                    left: 52,
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={() => this.handleStepChange(1)}>
                  <ArrowBack style={{ marginRight: 8, fontSize: 40 }} /> Go back
                </Button>
                <StepZero onStepChange={this.handleStepChange} />
              </div>
            }
            {this.state.step === 1 &&
              <StepOne onStepChange={this.handleStepChange} />
            }
            {this.state.step === 2 &&
              <StepTwo onStepChange={this.handleStepChange} />
            }
            {this.state.step === 3 &&
              <StepThree onStepChange={this.handleStepChange} />
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