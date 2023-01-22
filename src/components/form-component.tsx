import {Grid} from '@mui/material'
import ComponentItem from '../lib/component-item'

const FormComponent = () => {
 return (
  <Grid container justifyContent='center' columnGap={2} rowGap={2}>
   <ComponentItem name='Typography' icon='faTextHeight' />
   <ComponentItem name='Image' icon='faImage' />
   <ComponentItem name='Divider' icon='faGripLinesVertical' />
   <ComponentItem name='Link' icon='faLink' />
  </Grid>
 )
}

export default FormComponent
