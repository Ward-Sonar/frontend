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
import ReportingInterface from './pages/ReportingInterface';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <ReportingInterface />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
