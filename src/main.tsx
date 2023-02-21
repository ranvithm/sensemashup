import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import App from './pages/App'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
 <StrictMode>
  <ThemeProvider theme={theme}>
   <App />
  </ThemeProvider>
 </StrictMode>,
)
