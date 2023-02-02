import { Delete, Edit } from '@mui/icons-material'
import {Button, Typography} from '@mui/material'
import React from 'react'

const Datashow = ({item,i,remove,edit}) => {
  return (
      <div>
            <Typography>{item}<Button onClick={()=>remove(i)}><Delete/></Button><Button onClick={()=>edit(i)}><Edit/></Button></Typography>
        </div>
  )
}

export default Datashow