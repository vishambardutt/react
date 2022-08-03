import React from "react";
class About extends React.Component{
    
    constructor()
    {   
        super();
        this.state = {
            name: 'Vishambar',
            age: 45
        }
    }
    componentDidMount()
    {
       console.log("props",this.props.name)
       // console.log('did mount');
      // alert('name updated')
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        console.log('render')
        return (<div>
            <h2>{this.props.name}</h2>
           
            <h1>About Class Component</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            
            <button onClick={()=>{this.setState({name:'Vartika'})}}>State Update</button>
        </div>)
    }
}

export default About;