import React from 'react';
import { Link } from 'react-router-dom';

import {  FormGroup , Label, Input} from 'reactstrap';

export default class LoginPage extends React.Component{

//   state={
//     USERId:"",
//     PASS :""
//   };

// handelevent =(e,attribute) =>{
//   this.setState({[attribute]:e.target.value})
  
//};

//  submitLogin =() => {

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({

//     USERId:this.state.USERId,
//     password:this.state.PASS
//   }),
// })
// .then(response => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
//  }


render(){
    return (
      <>
          <div className="body">
            <img height="75px"  width ="75px" src="https://st3.depositphotos.com/15818422/19166/v/1600/depositphotos_191665506-stock-illustration-bus-travel-logo-design-trendy.jpg"/>
          <h2 align='center'> WELCOME TO </h2>
          <h1  align='center'>ADVENTURE Travels</h1>
             
         <FormGroup className="login" align ="center"><br/>
       <table  className="box" >
         <br/><br/>
         <br/><br/>

        <Label><strong>USER ID</strong></Label>
        <br/>
       

        <Input type="text" placeholder="Enter user Id" onChange={(e)=>this.handelevent(e,"userId")}/>

        <br/><br/>

        <Label><strong>PASSWORD</strong></Label>
        <br/>
        <Input type="password" placeholder="Enter password" onChange={(e)=>this.handelevent(e,"PASS")}/>
        <br/><br/>
        <Link to="./HomePage"><button className="button"  onClick={this.submitLogin}>LOG IN</button></Link>
        <br/><br/>
        
        <Link to="./SignUp">sign up ?</Link>
        </table>
        </FormGroup>
       
      
        </div>
        </>)
}

}