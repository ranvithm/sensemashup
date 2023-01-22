import React from 'react'
import {Button, Typography} from '@mui/material'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GridItem from './grid-item'
import IComponentItem from '../types/component-item'

const ComponentItem: React.FC<IComponentItem> = (props) => {
 const {name, icon} = props
 return (
  <GridItem>
   <Button
    title={name}
    color='secondary'
    sx={{width: 120, height: 100, flexDirection: 'column', gap: '10px', border: '1px'}}
    variant='contained'
    size='large'>
    <FontAwesomeIcon color='white' size='2x' icon={fas[icon]} />
    <Typography color='white' variant='caption' gutterBottom>
     {name}
    </Typography>
   </Button>
  </GridItem>
 )
}

export default ComponentItem
