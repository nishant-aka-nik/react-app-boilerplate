import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    JoyBox: {
      styleOverrides: {
        root: {
          padding: '16px',
          marginBottom: '12px',
          borderRadius: '8px',
          backgroundColor: '#fff',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#f4f4f9',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#555',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;