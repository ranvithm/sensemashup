import {useState} from 'react'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Accordion, AccordionDetails, AccordionSummary, Box} from '@mui/material'
import LayoutComponent from './layout-component'
import MarginAndPadding from './margin-padding-component'

const StyleComponent = () => {
 const [expanded, setExpanded] = useState<string>('')

 const handleChange = (panel: string) => {
  setExpanded(expanded === panel ? '' : panel)
 }

 const componentsList = [
  {
   name: 'Options',
   type: 'options',
   components: <>Options</>,
  },
  {
   name: 'Layout',
   type: 'layout',
   components: <LayoutComponent />,
  },
  {
   name: 'Typography',
   type: 'typography',
   components: <>TypoGraphy</>,
  },
  {
   name: 'Background',
   type: 'background',
   components: <>Background</>,
  },
  {
   name: 'Margin & Padding',
   type: 'margin_and_padding',
   components: <MarginAndPadding />,
  },
  {
   name: 'Borders',
   type: 'border',
   components: <>Border</>,
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

export default StyleComponent
