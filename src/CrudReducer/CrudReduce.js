import { Button, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useReducer, useState } from 'react'
import Datashow from './Datashow'

const CrudReduce = () => {
    const myreducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                let d = [...state, action.payload];
                return d;
                break;
            case "Remove":
                let b = [...state];
                b.splice(action.index, 1);
                return b;
                break;
            case "Edit":
                let e = [...state];
                let i = action.index;
                setinput(e[i]);
            console.log(e[i])
                break;


            default:

                return state;
        }

    }
    const [input, setinput] = useState()
    const [data, setData] = useReducer(myreducer, [])
    const [edit, isEdit] = useState(-1)


    const chnageHandler = (e) => {
        setinput(e.target.value)

    }
    const Savedata = () => {
        setData({ type: "ADD", payload: input })
        console.log(data);
    }
    const Remove = (index) => {
        setData({ type: "Remove", index: index })
    }
    const Edit = (index) => {
        setData({ type: "Edit", index: index })
    }
    return (
        <Container>
            <TextField label="Input" onChange={chnageHandler} value={input} />
            <Button onClick={Savedata}>Submit</Button>
            {
                data.map((ele, index) => {
                    return <Datashow item={ele} i={index} remove={Remove} edit={Edit} />
                })
            }
        </Container>
    )
}

export default CrudReduce