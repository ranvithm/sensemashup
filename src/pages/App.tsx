import {Box, CssBaseline} from '@mui/material'
import {Header, SideBar} from '../components'
import '../styles/App.css'

function App() {
 return (
  <Box sx={{flexGrow: 1}}>
   <CssBaseline />
   <Header />
   <Box>
    <SideBar />
   </Box>
  </Box>
 )
}

export default App
