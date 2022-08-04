import React,{useEffect, useState} from 'react';

function Contact (props)
{

    const [name,setName] = useState ('Yutika');
    const [age,setAge] = useState (9);
    const [val,setVal] = useState ('Raman')

  useEffect(()=>{
 
   console.log('check props', props.name)
  })

  useEffect(()=>{
 
    console.log('check props2', props.name)
   },[props.name])
   const vish = (e)=>{
    console.log('vish function',e.target.value)
    setVal(e.target.value)
   }
    let data = "Contact us Component"
    return (
        <div><h1>Contact us  Component</h1>
        <h2><input type='text'value={val} onChange = {vish}/><button onClick={vish}>Click Me</button></h2>
       <h2><button onClick={()=>alert(val)}>Click ME..</button></h2> 
        
        {data}
        
        {props.name}
         <h2>Name:{ name}</h2>
         <h2>Age:{ age}</h2> 
        <button onClick={()=>setName('Vartika Jakhmola')}>Update State</button>
         <button onClick={()=>setAge(10)}>Update Age</button>
         {/* Events */}
         <button onClick={()=>{console.log('Hello form on Click')}}>Click Me</button>
        </div>
    )

}



export default Contact;
