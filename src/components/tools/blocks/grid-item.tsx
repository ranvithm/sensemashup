import React from 'react'
import {Grid} from '@mui/material'
import IGridItem from '../../../types/grid-item'

const GridItem: React.FC<IGridItem> = (props) => {
 const {children} = props
 return <Grid item>{children}</Grid>
}

export default GridItem
