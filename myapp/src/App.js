import React from 'react';
// import About from './About';
// import Contact from './Contact';
import Users from './Users';
import './App.css';

function App() {
  // const [name,setName] = useState('Ankit')
  return (
    <div className="App">
              
       <h1>Hello I am React</h1>
       {/* <About name ='Anil Kumar'/>  */}
      {/* <h2>{name}</h2> */}
      {/* <button onClick={()=> {setName("Amit Kumar")}}> Update Props</button>  */}
       {/* <Contact name ="Sita"/> */}
       <Users/>
      </div>
    
  );
}

export default App;
