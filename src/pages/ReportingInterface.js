import React, { Component } from 'react';
import API from '../api';

// Import Material UI components;
import Box from '@material-ui/core/Box';

// Import components
import Footer from '../components/Footer';
import StepOffline from './reporting-interface/StepOffline';
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
      atmosphere: '',
      direction: '',
      directionLabel: '',
      causes: [],
      comment: '',
      abandoned: false,
    };

    this.baseState = this.state;

    this.setAnswer = this.setAnswer.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);

    // Check if the user is refreshing the page
    window.onbeforeunload = this.checkReload.bind(this);
  }

  setAnswer(id, answer) {
    this.setState({
      [id]: answer
    });
  }

  handleStepChange(step) {
    if(step === 0) {
      this.setState({
        abandoned: true
      }, () => {
        this.handleSubmission(step);
      });
    } else if(step === 5) {
      this.handleSubmission(step);
    } else {
      this.setState({
        step: step,
      });
    }
  }

  checkReload(evt) {
    const message = 'Are you sure you want to leave?';
    if (typeof evt == 'undefined') {
      evt = window.event;
    }
    if (evt) {
      evt.returnValue = message;
    }
    return message;
  }

  handleSubmission(step) {
    API.post('/submission', {
      "data": {
        "type": "string",
        "attributes": {
          "atmosphere": this.state.atmosphere,
          "direction": this.state.direction,
          "comment": this.state.comment,
          "abandoned": this.state.abandoned
        },
        "relationships": {
          "causes": this.state.causes
        }
      }
    })
    .then(() => {
      this.setState({
        step: step,
        atmosphere: '',
        direction: '',
        causes: [],
        comment: '',
        abandoned: false,
      });
    });
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
            padding: "2rem",
            boxSizing: "border-box",
          }}>
            {this.state.step === -1 &&  
              <StepOffline onStepChange={this.handleStepChange} />
            }
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
              <StepFour onStepChange={this.handleStepChange} onSetAnswer={this.setAnswer} howDoesTheWardFeel={this.state.directionLabel} />
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