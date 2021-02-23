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
      secondary: 'rgba(0, 0, 0, 0.54)'
    },
    action: {
      disabledBackground: 'rgba(27,94,32,0.5)',
      disabled: 'white'
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'p',
        body1: 'p',
        body2: 'p',
      },
    },
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
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.875rem',
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
      ':disabled': {
        backgroundColor: 'inherit',
        color: 'black',
      }
    },
    shadows: {
      0: '0px 3px 4px rgba(0, 0, 0, 0.2)',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '2rem 3rem'
      },
    },
    MuiDivider: {
      root: {
        width: 115,
        height: 2,
        margin: '2rem 0'
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 30,
      }
    }
  },
});

export default theme;