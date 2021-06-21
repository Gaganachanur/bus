import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Label, Input } from 'reactstrap';


export default class SignUp extends React.Component{


    render()
    {
        return (
            <div className="peace">
            <div className="signup" align="center">
            <Form >
               <Label>First Name </Label>&nbsp;  <Input type="text" required/> 
               <br/>  <br/>
               <Label>Last Name </Label>&nbsp; <Input type="text" required/> 
               <br/>  <br/>
               <Label>User Id </Label>
               <Input type="text" required/> <br/><br/>
               <Label>Password</Label><Input type="password" required/>
               <br/><br/>
              
               <Label>Phone </Label><Input type="tel" required/>
               <br/><br/>
               <button className="button"> SIGN UP</button>&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/">
               <button className="button" > LOG IN</button></Link>
            </Form>
         </div>
         </div>
    
        );        
     
    }
}