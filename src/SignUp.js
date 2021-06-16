import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Label, Input } from 'reactstrap';


export default class SignUp extends React.Component{


    render()
    {
        return (
        <div className="signup" align="center">
            
        <label>First Name </label>&nbsp;  <input type="text"/> 
        <br/>  <br/>
         <label>Last Name </label>&nbsp; <input type="text"/> <br/>  <br/>
         <label>User Id </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text"/> <br/><br/>
        
          <lable>Password</lable>&nbsp;&nbsp;&nbsp;&nbsp;<input type="password"/>
          <br/><br/>
          <lable>conform </lable>&nbsp;&nbsp;&nbsp;&nbsp;<input type="password"/>
          <br/><br/>
          <lable>Phone </lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number"/>
          <br/><br/>

         <button> SIGN UP</button>
         
        </div>
    
        );        
     
    }
}