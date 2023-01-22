import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Drawer, Toolbar} from '@mui/material'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import BasicComponent from '../components/basic-component'
import FormComponent from '../components/form-component'
import AdvanceComponent from '../components/advance-component'
import QlikComponent from '../components/qlik-component'
const drawerWidth = 300

const SideBar: React.FC = () => {
 const [expanded, setExpanded] = React.useState<string>('')

 const handleChange = (panel: string) => {
  setExpanded(expanded === panel ? '' : panel)
 }

 const componentsList = [
  {
   name: 'Basic Component',
   type: 'basic',
   components: <BasicComponent />,
  },
  {
   name: 'Form Component',
   type: 'form',
   components: <FormComponent />,
  },
  {
   name: 'Advance Component',
   type: 'advance',
   components: <AdvanceComponent />,
  },
  {
   name: 'Qlik Component',
   type: 'qlik',
   components: <QlikComponent />,
  },
 ]

 const expandIcon = <FontAwesomeIcon color='white' icon={fas.faAngleDown} />

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
     <Box display='flex' alignItems='center' justifyContent='space-evenly' p='10px'>
      <Button title='Style Manager' size='small'>
       <FontAwesomeIcon color='white' size='2x' icon={fas['faPaintBrush']} />
      </Button>
      <Button title='Layer Manager' size='small'>
       <FontAwesomeIcon color='white' size='2x' icon={fas['faLayerGroup']} />
      </Button>
      <Button title='Blocks' size='small'>
       <FontAwesomeIcon color='white' size='2x' icon={fas['faShapes']} />
      </Button>
     </Box>
    </AppBar>
    {componentsList.map((list) => (
     <Accordion key={list.type} expanded={expanded === list.type} onChange={() => handleChange(list.type)}>
      <AccordionSummary expandIcon={expandIcon}>{list.name}</AccordionSummary>
      <AccordionDetails>{list.components}</AccordionDetails>
     </Accordion>
    ))}
   </Box>
  </Drawer>
 )
}

export default SideBar
