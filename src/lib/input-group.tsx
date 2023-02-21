import {Box, Paper, TextField, InputBase, InputAdornment} from '@mui/material'
import React from 'react'

const InputGroup: React.FC<{children: JSX.Element}> = (props) => {
 const {children} = props
 return (
  <Paper variant='outlined'>
   <Box display='flex' flexDirection='column'>
    <InputBase
     sx={{m: 1, width: '50px'}}
     inputProps={{
      startAdornment: <InputAdornment position='end'>Px</InputAdornment>,
     }}
     size='small'
    />
    <Box display='flex'>
     <TextField
      sx={{m: 1, width: '50px'}}
      inputProps={{
       startAdornment: <InputAdornment position='end'>kg</InputAdornment>,
      }}
      size='small'
     />
     {children}
     <TextField
      sx={{m: 1, width: '50px'}}
      inputProps={{
       startAdornment: <InputAdornment position='end'>kg</InputAdornment>,
      }}
      size='small'
     />
    </Box>
    <TextField
     sx={{m: 1, width: '50px'}}
     inputProps={{
      startAdornment: <InputAdornment position='end'>kg</InputAdornment>,
     }}
     size='small'
    />
   </Box>
  </Paper>
 )
}

export default InputGroup

// <Box display='flex' flexDirection='column'>
// <TextField label='Top' variant='standard' size='small' />
// <Box display='flex'>
//  <TextField label='Left' variant='standard' size='small' />
//  {children}
//  <TextField label='Right' variant='standard' size='small' />
// </Box>
// <TextField label='Bottom' variant='standard' size='small' />
// </Box>
