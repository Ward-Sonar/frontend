import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FAF7F7"
    },
    common: {
      black: '#263238',
      gray: '#E0E0E0',
    },
    primary: {
      main: '#1B5E20',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D3E0EC',
      contrastText: '#000000',
    },
    error: {
      main: '#F44336',
    },
    success: {
      main: '#4CAF50',
    },
    text: {
      primary: '#263238',
      secondary: 'rgba(0, 0, 0, 0.87)'
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    h1: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '3.75rem',
      fontWeight: 600,
      lineHeight: '4.5rem',
    },
    h2: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: '3.625rem',
    },
    h3: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: '3rem',
    },
    h4: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '2.625rem',
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: '1.375rem',
    },
    button: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '1.625rem',
      textTransform: 'none',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '2rem 3rem'
      },
    },
  },
});

export default theme;