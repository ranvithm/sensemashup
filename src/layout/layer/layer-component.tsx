import React from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowRight, faFile, faFolder} from '@fortawesome/free-solid-svg-icons'

const LayerComponent: React.FC = () => {
 return (
  <TreeView
   defaultCollapseIcon={<FontAwesomeIcon icon={faArrowDown} />}
   defaultExpandIcon={<FontAwesomeIcon icon={faArrowRight} />}
   sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
   <TreeItem expandIcon={<FontAwesomeIcon icon={faFile} />} nodeId='1' label='Applications'>
    <TreeItem
     expandIcon={<FontAwesomeIcon icon={faFile} />}
     endIcon={<FontAwesomeIcon icon={faFolder} />}
     nodeId='2'
     label='Calendar'
    />
   </TreeItem>
   <TreeItem nodeId='5' label='Documents'>
    <TreeItem nodeId='10' label='OSS' />
    <TreeItem nodeId='6' label='MUI'>
     <TreeItem nodeId='8' label='index.js' />
    </TreeItem>
   </TreeItem>
  </TreeView>
 )
}

export default LayerComponent
