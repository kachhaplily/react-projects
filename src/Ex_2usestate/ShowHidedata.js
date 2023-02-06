import React, { useState } from 'react'
import Mydb from './Mydb'
import './ShowHide.css'

export const ShowHidedata = () => {
    const [myData,setmyData] = useState(Mydb) 
    const clrData = () =>{
        setmyData([])
    }
    const showData = () =>{
        setmyData(Mydb)
    }
    return (
        <div className='container'>
            <h1>My Products</h1>
            <div className='btndiv'>
                <button className='btn' onClick={clrData}>Clear Data</button>
                <button className='btn' onClick={showData}>Show Data</button>
            </div>
            {myData.map((element) => {
                return <div className='item'>
                    <img src={element.image} />
                    <p>{element.title}</p>
                    <p><span>Price:-</span>{element.price}</p>
                </div>
            })}
        </div>
    )
  
}