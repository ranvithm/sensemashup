import React from 'react'
import {Input, styled, InputAdornment, Typography} from '@mui/material'

const _inputProps = (
 <InputAdornment position='end'>
  <Typography variant='caption'>px</Typography>
 </InputAdornment>
)

const InputField = styled((props) => <Input size='small' disableUnderline endAdornment={_inputProps} {...props} />)(
 ({theme}) => ({
  width: 40,
  height: 25,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 4,
  padding: '0 3px',
  margin: '5px 0',
  '& .MuiInput-input': {
   padding: 1,
   fontSize: 11,
  },
  '& .MuiInputAdornment-root': {
   marginLeft: 1,
  },
 }),
)

const MarginInput: React.FC = () => {
 return <InputField />
}

export default MarginInput
