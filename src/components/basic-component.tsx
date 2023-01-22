import {Grid} from '@mui/material'
import ComponentItem from '../lib/component-item'

const BasicComponent = () => {
 return (
  <Grid container justifyContent='center' columnGap={2} rowGap={2}>
   <ComponentItem name='Header' icon='faHeading' />
   <ComponentItem name='SideBar' icon='faBars' />
   <ComponentItem name='Menu' icon='faStream' />
   <ComponentItem name='UserMenu' icon='faIdCard' />
  </Grid>
 )
}

export default BasicComponent
