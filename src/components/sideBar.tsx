import React from 'react'
import {Drawer, Toolbar} from '@mui/material'

const SideBar: React.FC = () => {
 return (
  <Drawer
   variant='permanent'
   anchor='right'
   sx={{
    width: 240,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
     width: 240,
     boxSizing: 'border-box',
     backgroundColor: (theme) => theme.palette.secondary.main,
    },
   }}>
   <Toolbar />
   <>Hello</>
  </Drawer>
 )
}

export default SideBar
