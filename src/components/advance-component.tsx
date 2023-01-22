import {Grid} from '@mui/material'
import ComponentItem from '../lib/component-item'

const AdvanceComponent = () => {
 return (
  <Grid container justifyContent='center' columnGap={2} rowGap={2}>
   <ComponentItem name='Side list' icon='faListCheck' />
   <ComponentItem name='Table' icon='faTable' />
  </Grid>
 )
}

export default AdvanceComponent
