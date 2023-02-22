import iPaddingGrid from '@/types/padding-grid'
import {Box, Paper, Typography} from '@mui/material'
import MarginInput from './input'

const PaddingGrid: React.FC<iPaddingGrid> = (props) => {
 const {label, height, width, background, children} = props
 return (
  <Paper
   sx={{
    height: height,
    width: width,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: background,
   }}
   variant='outlined'>
   <Box position='absolute' top='2px' left='2px' width='100%' alignItems='center'>
    <Typography variant='caption'>{label}</Typography>
   </Box>
   <Box>
    <MarginInput />
   </Box>
   <Box display='flex' alignItems='center' justifyContent='space-evenly' width='100%'>
    <Box>
     <MarginInput />
    </Box>
    {children}
    <Box>
     <MarginInput />
    </Box>
   </Box>
   <Box>
    <MarginInput />
   </Box>
  </Paper>
 )
}

export default PaddingGrid
