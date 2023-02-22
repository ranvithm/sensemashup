import PaddingGrid from '@/lib/padding-grid'
import {Box, Paper} from '@mui/material'
import {red, green} from '@mui/material/colors'

const MarginAndPadding = () => {
 return (
  <Box>
   <PaddingGrid label='margin' height={250} background={red[100]}>
    <PaddingGrid label='margin' height={150} width={150} background={green[100]}>
     <Paper sx={{height: 50, width: 50}} variant='outlined' />
    </PaddingGrid>
   </PaddingGrid>
  </Box>
 )
}

export default MarginAndPadding
