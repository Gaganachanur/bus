import React from 'react';
import { Link } from 'react-router-dom';

import {  FormGroup , Label, Input} from 'reactstrap';

export default class Body extends React.Component{

render(){
    return (
      <>
          <div className="body">
            <img height="75px"  width ="75px" src="https://st3.depositphotos.com/15818422/19166/v/1600/depositphotos_191665506-stock-illustration-bus-travel-logo-design-trendy.jpg"/>
          <h2 align='center'> WELCOME TO </h2>
          
        
          <h1  align='center'>GREEN BUS</h1>
             
         <FormGroup className="login" align ="center"><br/>
       <table  className="box" >
         <br/><br/>
         <br/><br/>

        <Label><strong>USER ID</strong></Label>
        <br/>
       

        <Input type="text" placeholder="Enter user Id"/>

        <br/><br/>

        <Label><strong>PASSWORD</strong></Label>
        <br/>
        <Input type="password" placeholder="Enter password"/>
        <br/><br/>
        <button className="button">LOG IN</button>
        <br/><br/>
        
        <Link to="./SignUp">sign up ?</Link>
        </table>
        </FormGroup>
       
      
        </div>
        </>)
}

}