import { React, useState } from 'react'
import Headercontext from './Headercontext'
import LanguageContext from './LanguageContext'
import LoginContext from './LoginContext'
import { Themechnage } from './LanguageContext'

const UserContextApp = () => {
    const [lan, setLan] = useState('en')
    const [theme, settheme] = useState('light')
    return (
        <Themechnage.Provider value={{ theme, settheme }}>
            <LanguageContext.Provider value={{ lan, setLan }}>
                <Headercontext />
                <LoginContext />
            </LanguageContext.Provider>
        </Themechnage.Provider>

    )
}

export default UserContextApp