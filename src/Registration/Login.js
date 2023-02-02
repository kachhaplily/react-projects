import { Container,Box,TextField ,Button} from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import authFetch from './Intercepteraxios';

const Login = () => {
    const[input,setinput]=useState({
        email:"",
        password:""
    })


 const chnagehangdler=(e)=>{
    // console.log(e.target.name)
    // setinput(e.target.value)
    setinput({...input,[e.target.name]:e.target.value})
    }

    const submitdata=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/accounts/authenticate",input) .then(y=> {
        // authFetch.post("/authenticate",input).then(y=>{
        if(y.status === 200 || y.status === 201)
        {
            localStorage.setItem("user", JSON.stringify(y));
        }
        console.log(y.data);
    })

    }

  return (
    <>
       <Container component="main" maxWidth="xs" >
                     <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                     }}>

                     <form onSubmit={submitdata}>
                     <TextField margin="normal" required fullWidth type="email" variant="outlined" name='email' label="email" onChange={chnagehangdler} />
                     <TextField margin="normal" required fullWidth type="password" variant="outlined" name='password' label="password" onChange={chnagehangdler} />
                     <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} margin="normal" required type="submit" value="submit">Submit </Button>

                     </form>
                     </Box>
                     </Container>
    </>
  )
}

export default Login