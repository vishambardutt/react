import React from 'react';
import PropsinClassCom from './PropsinClassCom';
import Button from 'react-bootstrap/esm/Button';

class ChangePropsClassComp extends React.Component {
    constructor()
    {
        super();
        this.state ={
            vegi:'Yashoda'
        }
    }
    render()
   
    {
        console.log('vegi')
        return(
            <div>
                <h4>Props Change in Class Component</h4>
                <h4>{this.props.name1}{this.props.name2}</h4>
                <PropsinClassCom fruit='MangoNew' vegi='Potato' name="My Name" email="myname@yahoo.com"/>
                <h6> <Button variant="primary" onClick={()=>this.setState({vegi:'Krishna'})}>Change Props</Button></h6>
            </div>
        )
    }

}
export default ChangePropsClassComp;