import React from 'react';
// import ChangePropsClassComp from './ChangePropsClassComp';
class PropsinClassCom extends React.Component{
   
    render(){
        
        return(
            <div>
                <h4>Props in Class Component</h4>
                <h6>Name:{this.props.name}</h6>
                <h6>Email:{this.props.email}</h6> 
                <h6>{this.props.vegi}</h6>
                <h6>{this.props.fruit}</h6>
                {/* <ChangePropsClassComp name1="Vartika" name2="Yutika" /> */}
                
                
            </div>
        )
    }
}





export default PropsinClassCom;