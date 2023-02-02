import { CheckBox } from '@mui/icons-material';
import {Container, FormControlLabel, TextField, Typography, Avatar, Box, Button, FormControl,MenuItem, Select ,InputLabel} from '@mui/material';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'




const Reg = () => {
       const [inputData, setinputdata] = useState({
              title: "",
              firstname: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              acceptTerms: true
       });

       const [validation, setvalidation] = useState({
              title: "",
              firstname: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              acceptTerms: false
       })


       const validateOutput = (name, value) => {

              let erorrMsg = '';

              switch (name) {
                     case "title":
                            if (!value) {
                                   erorrMsg = "Please Enter First Name";
                            }
                            break;

                     case "firstname":
                            if (!value) {
                                   erorrMsg = "Please Enter firstName";
                            }
                            break;

                     case "lastName":
                            if (!value) {
                                   erorrMsg = "Please Enter lastName";
                            }

                            break;
                     case "email":
                            if (!value) {
                                   erorrMsg = "Please Enter email";
                            }
                            break;
                     case "password":
                            if (!value) {
                                   erorrMsg = "Please Enter password";
                            }
                            break;
                     case "confirmPassword":
                            if (!value) {
                                   erorrMsg = "Please  confirmPassword";
                            }
                            break;
                     case "acceptTerms":
                            if (value !== true) {
                                   erorrMsg = "Agree the acceptTerms";
                            }
                            break;


              }

              return erorrMsg;

       }


       const chnagehangdler = (e) => {
              if (e.target.type !== "checkbox") {
                     setinputdata({ ...inputData, [e.target.name]: e.target.value })
              }
              else {
                     setinputdata({ ...inputData, [e.target.name]: e.target.checked })
              }

              let errorMessage = validateOutput(e.target.name, e.target.value);
              setvalidation({ ...errorMessage, [e.target.name]: errorMessage });


       }

       const Submitdata = (e) => {
              e.preventDefault();
              axios.post("http://localhost:4000/accounts/register", inputData).then(y => console.log(y.data))
       }
       return (
              <Container component="main" maxWidth="xs" >
                     <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                     }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                   <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                   Sign in
                            </Typography> </Box>

                     <form onSubmit={Submitdata} sx={{ mt: 1 }}>
                     <InputLabel>Age</InputLabel>
                            <Select
                                   margin="normal" required fullWidth
                                   name='title' 
                                   label="Title"
                                   onChange={chnagehangdler}
                            >
                                   <MenuItem value={"mr"}>Mr</MenuItem>
                                   <MenuItem value={"mrs"}>Mrs</MenuItem>
                                   <MenuItem value={"miss"}>Miss</MenuItem>
                            </Select>

                            <span style={{ "color": "Red" }}> {validation?.title}</span>
                            <TextField margin="normal" required fullWidth type="text" variant="outlined" name='firstName' label="firstName" onChange={chnagehangdler} />
                            <span style={{ "color": "Red" }}> {validation?.firstName}</span>

                            <TextField margin="normal" required fullWidth type="text" variant="outlined" name='lastName' label="lastName" onChange={chnagehangdler} />
                            <span style={{ "color": "Red" }}> {validation?.lastName}</span>

                            <TextField margin="normal" required fullWidth type="email" variant="outlined" name='email' label="email" onChange={chnagehangdler} />
                            <span style={{ "color": "Red" }}> {validation?.email}</span>

                            <TextField margin="normal" required fullWidth type="password" variant="outlined" name='password' label="password" onChange={chnagehangdler} />
                            <span style={{ "color": "Red" }}> {validation?.password}</span>

                            <TextField margin="normal" required fullWidth type="password" variant="outlined" name='confirmPassword' label="confirmPassword" onChange={chnagehangdler} />
                            <span style={{ "color": "Red" }}> {validation?.confirmPassword}</span>

                            <FormControlLabel margin="normal" control={<CheckBox name="acceptTerms" onClick={chnagehangdler} checked />} label="Agree Tearm and condition" />


                            {/* <TextField   required type="checkbox"  name="acceptTerms" onClick={chnagehangdler} /> */}
                            <span style={{ "color": "Red" }}> {validation?.acceptTerms}</span>

                            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} margin="normal" required type="submit" value="submit">Submit </Button>

                     </form>
              </Container>

       )
}

export default Reg