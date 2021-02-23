import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

// Import app styling
import theme from './theme';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ReportingInterface from './pages/ReportingInterface';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/reporting-interface">
              <ReportingInterface />
              <Footer />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
