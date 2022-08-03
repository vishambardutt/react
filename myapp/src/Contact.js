import React,{useEffect, useState} from 'react';

function Contact (props)
{
    const [name,setName] = useState ('Yutika');
    const [age,setAge] = useState (9);

  useEffect(()=>{
 
   console.log('check props', props.name)
  })

  useEffect(()=>{
 
    console.log('check props2', props.name)
   },[props.name])
    let data = "Contact us Component"
    return (
        <div><h1>Contact us  Component</h1>
        {data}
        
        {props.name}
         <h2>Name:{ name}</h2>
         <h2>Age:{ age}</h2> 
        <button onClick={()=>setName('Vartika Jakhmola')}>Update State</button>
         <button onClick={()=>setAge(10)}>Update Age</button>
        </div>
    )

}



export default Contact;
