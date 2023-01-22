import React from 'react'
import {AppBar, Box, Container, Toolbar} from '@mui/material'

const Header: React.FC = () => {
 return (
  <Box sx={{flexGrow: 1}}>
   <AppBar component='nav' sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
    <Container sx={{width: '100vw'}} fixed>
     <Toolbar>
      <Box display='flex' justifyContent='space-between' width='100%'></Box>
     </Toolbar>
    </Container>
   </AppBar>
  </Box>
 )
}

export default Header
