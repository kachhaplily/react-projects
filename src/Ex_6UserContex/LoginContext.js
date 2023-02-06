import { Container } from '@mui/material';
import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'
import { Themechnage } from './LanguageContext';
import './Theme.css';

const LoginContext = () => {
    const {lan}=useContext(LanguageContext)
    const {theme}=useContext(Themechnage)

    const myOBject = {

        en : {
            firstName : "first Name",
            lastName : "Last Name",
            login : "Login",
            password: "password"

        },

        hi : {
            firstName : "पहला नाम",
            lastName : "उपनाम",
            login : "लॉग इन करें",
            password: "पासवर्ड"
        }

}
  return (
    <>
       <Container className={theme}>
        {myOBject[lan].login}
        <label>
        {myOBject[lan].firstName}
        </label>
        <input type="text" />

        <label>
        {myOBject[lan].password}
        </label>

        <input type="text" />

        <input type="submit" value="login" />

    </Container>
    </>
  )
}

export default LoginContext