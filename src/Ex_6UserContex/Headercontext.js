import { Select,MenuItem } from '@mui/material';
import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'
import { Themechnage } from './LanguageContext';

const Headercontext = () => {
    const { lan, setLan } = useContext(LanguageContext);
    const { theme, settheme }=useContext(Themechnage);

    return (
        <div>
            
            <Select onChange={(e) => { setLan(e.target.value) }}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
            </Select>
            <Select onChange={(e) => {settheme(e.target.value) }}>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select>


        </div>
    )
}

export default Headercontext