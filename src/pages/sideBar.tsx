import React, {useState} from 'react'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {AppBar, Box, Button, Drawer, Grid, Toolbar} from '@mui/material'

import BlockComponent from '../layout/blocks/blocks'
import StyleComponent from '../layout/style/style-component'
import LayerComponent from '../layout/layer/layer-component'
import ComponentItem from '../components/tools/blocks/component-item'
const drawerWidth = 300

const SideBar: React.FC = () => {
 const [type, setType] = useState<string>('block')
 return (
  <Drawer
   variant='permanent'
   anchor='right'
   sx={{
    width: drawerWidth,
    flexShrink: 0,
    fontSize: '13px',
    [`& .MuiDrawer-paper`]: {
     width: drawerWidth,
     boxSizing: 'border-box',
     backgroundColor: (theme) => theme.palette.primary.main,
    },
   }}>
   <Toolbar />
   <Box>
    <AppBar position='static'>
     <Box display='flex' alignItems='center' justifyContent='space-evenly' m='1px'>
      <Button
       onClick={() => setType('style')}
       color='primary'
       sx={{p: 2, borderRadius: 0, flex: 1}}
       title='Style Manager'
       size='small'>
       <FontAwesomeIcon color={type === 'style' ? 'white' : '#144272'} size='2x' icon={fas['faPaintBrush']} />
       style
      </Button>
      <Button
       onClick={() => setType('block')}
       color='primary'
       sx={{p: 2, borderRadius: 0, flex: 1}}
       title='Layer Manager'
       size='small'>
       <FontAwesomeIcon color={type === 'block' ? 'white' : '#144272'} size='2x' icon={fas['faLayerGroup']} />
      </Button>
      <Button
       onClick={() => setType('layer')}
       color='primary'
       sx={{p: 2, borderRadius: 0, flex: 1}}
       title='Blocks'
       size='small'>
       <FontAwesomeIcon color={type === 'layer' ? 'white' : '#144272'} size='2x' icon={fas['faShapes']} />
      </Button>
     </Box>
    </AppBar>
    {
     {
      block: <BlockComponent />,
      style: <StyleComponent />,
      layer: <LayerComponent />,
     }[type]
    }
   </Box>
  </Drawer>
 )
}

export default SideBar
