import {Grid} from '@mui/material'
import ComponentItem from '../lib/component-item'

const QlikComponent = () => {
 return (
  <Grid container justifyContent='center' columnGap={2} rowGap={2}>
   <ComponentItem name='Measure' icon='faSquareRootAlt' />
   <ComponentItem name='Object' icon='faRankingStar' />
   <ComponentItem name='Current Filter' icon='faFilter' />
   <ComponentItem name='Filter' icon='faFilter' />
  </Grid>
 )
}

export default QlikComponent
