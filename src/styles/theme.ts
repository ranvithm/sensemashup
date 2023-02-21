import {createTheme} from '@mui/material/styles'

const theme = createTheme({
 palette: {
  primary: {
   main: '#0A2647',
  },
  secondary: {
   main: '#205295',
   light: '#2C74B3',
  },
 },

 components: {
  MuiAccordion: {
   styleOverrides: {
    root: {
     backgroundColor: '#144272',
     color: '#fff',
     '&.Mui-expanded': {
      margin: '8px 0',
     },
    },
   },
  },
  MuiAccordionSummary: {
   styleOverrides: {
    root: {
     '&.Mui-expanded': {
      minHeight: '48px',
     },
    },
    content: {
     '&.Mui-expanded': {
      margin: '12px 0',
     },
    },
   },
  },
  MuiAccordionDetails: {
   styleOverrides: {
    root: {
     backgroundColor: '#205295',
     color: '#fff',
    },
   },
  },
  MuiGrid: {
   styleOverrides: {
    root: {},
   },
  },
  MuiButton: {
   styleOverrides: {
    root: {
     '&.Mui-disabled': {
      color: 'inherit',
      fontSize: '9px',
     },
    },
   },
  },
 },
})

export default theme
