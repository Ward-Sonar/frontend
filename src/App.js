import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

// Import app styling
import theme from './theme';
import './App.css';

// Import Material UI
import Box from '@material-ui/core/Box';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import StepOne from './pages/reporting-interface/StepOne';
import StepTwo from './pages/reporting-interface/StepTwo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Box
            component="main"
            bgcolor="background.default"
            px={4}
            pt={8}
            pb={16}>
              {this.state.step == 1 &&
                <StepOne />
              }
              {this.state.step == 2 &&
                <StepTwo />
              }
          </Box>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
