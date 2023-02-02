import React, { useEffect, useState } from 'react'
import authFetch from './Intercepteraxios'

const Account = () => {
    const [data, setData] = useState()
    useEffect(() => {
        authFetch.get("/accounts").then(y => {

            console.log(y);
        })
    })
    return (
        <div>Account</div>
    )
}

export default Account