import React from 'react';
import {Link ,Redirect} from 'react-router-dom';

import {  FormGroup , Label, Input} from 'reactstrap';


export default class LoginPage extends React.Component{

  state={
    userId:"",
    password :"",
	redirect:false
  };

handelevent =(e,attribute) =>{
  this.setState({[attribute]:e.target.value})
  
};

 submitLogin =() => {

fetch('http://localhost:3000/login', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    userId:this.state.userId,
    password:this.state.password,

  }),
})
.then(response => response.json())
.then((data) => {
	
  console.log('Success:', data);
  console.log(data.rowCount)
  if(data.rowCount === 0)
  {
    alert('check your user id and password and login again')
  }else{
	this.setState({redirect:true})
	
  }
})
.catch((error) => {
  console.error('Error:', error);
});
 }


render(){

	if(this.state.redirect === true)
	{
      return(  <Redirect to='/HomePage'/ >)
	}
    return (
      <>
          <div className="body"> <img height="110px" width="150px" src="https://www.clipartkey.com/mpngs/m/13-134167_bus-clipart-logo-highway-bus-cartoon-logo.png" />
	<h2 align='center' style={{color:'red'}}> WELCOME TO </h2>
	<h1 align='center' style={{color:'red'}}>ADVENTURE Travels</h1>
	<FormGroup className="login" align="center">
		<br/>
		<table className="box">
			<br/>
			<br/>
			<br/>
			<br/>
			<Label><strong>USER ID</strong></Label>
			<br/>
			<Input type="text" placeholder="Enter user Id" onChange={(e)=>this.handelevent(e,"userId")}/>
			<br/>
			<br/>
			<Label><strong>PASSWORD</strong></Label>
			<br/>
			<Input type="password" placeholder="Enter password" onChange={(e)=>this.handelevent(e,"password")}/>
			<br/>
			<br/>
			
			<button className="button" onClick={this.submitLogin}>LOG IN</button>
			
			<br/>
			<br/>
			Don't have an account ?
			<Link to="./SignUp"> sign up </Link>
		</table>
	</FormGroup>
</div>
        </>)
}

}