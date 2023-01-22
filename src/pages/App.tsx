import {Box, CssBaseline} from '@mui/material'
import '../styles/App.css'
import Header from './header'
import SideBar from './sideBar'

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
