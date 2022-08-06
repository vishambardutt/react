import React,{useState} from 'react';
import PropsFun from './PropsFun';
import Button from 'react-bootstrap/Button';
import PropsinClassCom from './PropsinClassCom';

function Home (){
   const [names, setNames] = useState('Hi Ankit')
 
  return(
        <div>
          <h4>Home Component</h4>
      
 <h5>State Change </h5>
        
        <PropsFun name={names} />
       
       
        {/* <button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change Name</button>{' '} */}
        <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change State</Button>{' '}
        
        <PropsFun name ="Vishambar " email ="vd@yahoo.com" address="ET Raod Banglore"/>  
        <PropsinClassCom pname ="Props Name in Class comp"  email="Props Email in class Comp" />
        

        </div>
    )
}


export default Home;
