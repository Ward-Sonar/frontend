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
      main: '#E0E0E0',
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
      disabled: '#ffffff'
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
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
    allVariants: {
      color: '#263238'
    },
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
      '@media (max-width:600px)': {
        fontSize: '2.375rem',
        lineHeight: '2.875rem',
      }
    },
    h2: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: '3.625rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2.75rem',
      }
    },
    h3: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      }
    },
    h4: {
      fontFamily: [
        'Cabin',
        'sans-serif',
      ].join(','),
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '2.625rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      }
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.875rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      }
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      }
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
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '1.625rem',
      }
    },
    shadows: {
      0: '0px 3px 4px rgba(0, 0, 0, 0.2)',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '1.5rem 2rem',
        '@media (max-width:600px)': {
          padding: '0.75rem 1.25rem',
        }
      },
    },
    MuiDivider: {
      root: {
        width: 115,
        height: 2,
        margin: '2rem 0'
      }
    },
    MuiFormControl: {
      root: {
        minWidth: '100%',
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: '#ffffff',
        border: '1px solid #FAF7F7'
      },
      inputMultiline: {
        width: '100%',
        maxWidth: 520,
        height: '96px !important',
        padding: 16,
      }
    },
    MuiToggleButton: {
      root: {
        width: '100%',
        maxWidth: 170,
        margin: '0 28px',
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'v',
        borderRadius: 4,
        textAlign: 'left',
        '&:hover': {
          padding: 0,
          border: '3px solid #898D8D',
          backgroundColor: '#D3E0EC',
        },
        '&:focus': {
          padding: 0,
          border: '3px solid #898D8D',
          backgroundColor: '#D3E0EC',
        },
        '&$selected': {
          backgroundColor: '#D3E0EC',
          padding: 0,
          border: '3px solid #898D8D !important',
        },
        '@media (max-width:600px)': {
          maxWidth: '100%',
        }
      },
      label: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'left',
        flexWrap: 'wrap',
        height: '100%',
        '@media (max-width:600px)': {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }
      }
    },
    MuiToggleButtonGroup: {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
      },
      groupedHorizontal: {
        '&:not(:last-child), &:not(:first-child)': {
          margin: '12px 8px !important',
          border: '1px solid #AFAFAF'
        },
        '&:last-child:nth-child(3n - 2)': {
          gridColumnEnd: 3
        },
        '&:hover': {
          padding: 0,
          border: '3px solid #898D8D',
        },
      }
    },
    MuiTypography: {
      color: {
        main: '#263238',
      },
      gutterBottom: {
        marginBottom: 30,
      }
    }
  },
});

export default theme;