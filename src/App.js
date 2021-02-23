import { ThemeProvider } from '@material-ui/core/styles';

// Import app styling
import theme from './theme';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
