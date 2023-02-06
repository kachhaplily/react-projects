import React, { useState } from 'react'

export default function DynamicForm() {

    const [data,setData] = useState({
        basicInfo : {
            firstName : "",
            lastName : ""
        },
        education : [ {
            uniName : "",
            startDate: "",
            endDate : "",
            educationLevel : ""
        }]
    });

   

   const addmore = ()=> {

    let m = [...data.education];
    m.push({
        uniName : "",
        startDate: "",
        endDate : "",
        educationLevel : ""
    });

    setData({...data,education:m});

   } 

   const deleteEducation = (index)=> {
    let m = [...data.education];
    m.splice(index,1);
    setData({...data,education:m});
   }

   const myhandler = (e)=> {
    const {name,value} = e.target;

    let mydata = {...data};
    let d= name.split(".");

    if(name.includes("firstName")|| name.includes("lastName"))
    {
        let d = name.split(".");
        mydata[d[0]][d[1]] = value;
    }

    if(!Array.isArray(mydata[d[0]]))
     {
        
        mydata[d[0]][d[1]] = value;
     }
     else
     {
            let field = d[1].split("[")[0];
            let index = Number(d[1].substr(-2, 1));
            mydata[d[0]][index][field] = value;
     }


    setData(mydata);
   }

   const mySave =(e)=> {
    e.preventDefault();
    console.log(data);
   }

  return (
    <div>
        <form onSubmit={mySave}>
            <div>
                <span>Basic Information</span>
                <input type="text" name='basicInfo.firstName' placeholder='firstName' onChange={myhandler}/>
                <input type="text" name='basicInfo.lastName' placeholder='lastName' onChange={myhandler}/>
                {
                    data.education.map((value,index)=> {
                   return (<div>
                        <input type="text" name={`education.uniName[${index}]`} placeholder='uni' onChange={myhandler} />
                        <input type="text" name={`education.startDate[${index}]`}   placeholder='start' onChange={myhandler}/>
                        <input type="text" name={`education.endDate[${index}]`} placeholder='end' onChange={myhandler}/>
                        <input type="text" name={`education.educationLevel[${index}]`} placeholder='level' onChange={myhandler}/>
                        {
                            index ==0? "" : <button type='button' onClick={()=> {deleteEducation(index)}}>Delete</button>
                        }
                        {
                            index == data.education.length-1 ?  <button type='button' onClick={addmore}>AddMore</button>: ""
                        }

                   </div>)
                    })
                }

            </div>

                <input type="submit" value="saveData" />
        </form>


    </div>
  )
}