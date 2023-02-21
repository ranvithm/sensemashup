import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Box, Button, ButtonGroup, Typography} from '@mui/material'

const LayoutComponent = () => {
 const layoutGrp = [
  {name: 'Width', items: []},
  {name: 'Height', items: []},
  {
   name: 'Direction',
   items: [
    {
     name: 'row',
     icon: fas.faAngleDown,
    },
    {
     name: 'row reverse',
     icon: fas.faAngleDown,
    },
    {
     name: 'column',
     icon: fas.faAngleDown,
    },
    {
     name: 'Column reverse',
     icon: fas.faAngleDown,
    },
   ],
  },
  {
   name: 'align',
   items: [
    {
     name: 'start',
     icon: fas.faAngleDown,
    },
    {
     name: 'end',
     icon: fas.faAngleDown,
    },
    {
     name: 'center',
     icon: fas.faAngleDown,
    },
    {
     name: 'stretch',
     icon: fas.faAngleDown,
    },
   ],
  },
  {
   name: 'Justify',
   items: [
    {
     name: 'start',
     icon: fas.faAngleDown,
    },
    {
     name: 'end',
     icon: fas.faAngleDown,
    },
    {
     name: 'center',
     icon: fas.faAngleDown,
    },
    {
     name: 'space between',
     icon: fas.faAngleDown,
    },
    {
     name: 'space around',
     icon: fas.faAngleDown,
    },
   ],
  },
 ]

 return (
  <Box display='flex' flexDirection='column' alignItems='flex-start' gap={1}>
   {layoutGrp.map((lay) => (
    <ButtonGroup key={`group_${lay.name}`} variant='contained'>
     <Button size='small' disabled>
      {lay.name}
     </Button>
     {lay.items.map((it) => (
      <Button size='small' key={`btn${lay.name}${it.name}`}>
       <FontAwesomeIcon color='white' icon={it.icon} />
      </Button>
     ))}
    </ButtonGroup>
   ))}
  </Box>
 )
}

export default LayoutComponent
