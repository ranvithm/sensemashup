import {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Box} from '@mui/material'
import BasicComponent from './basic-component'
import FormComponent from './form-component'
import AdvanceComponent from './advance-component'
import QlikComponent from './qlik-component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

const BlockComponent = () => {
 const [expanded, setExpanded] = useState<string>('')

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
  <Box>
   {componentsList.map((list) => (
    <Accordion key={list.type} expanded={expanded === list.type} onChange={() => handleChange(list.type)}>
     <AccordionSummary expandIcon={expandIcon}>{list.name}</AccordionSummary>
     <AccordionDetails>{list.components}</AccordionDetails>
    </Accordion>
   ))}
  </Box>
 )
}

export default BlockComponent
