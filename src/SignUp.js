import React from "react";
import { Link } from "react-router-dom";
import { Form, Label, Input } from "reactstrap";

export default class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userId: "",
    password: "",
    mobile: "",
    email:"",
    gender:""
  };

  handleOnChangeInput = (e, attribute) => {
    this.setState({ [attribute]: e.target.value }); 
  };

  submitForm = () => {
    alert('sucessfully regesterd please click on LOG IN and log In ')
  fetch(" http://localhost:3000/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        userId: this.state.userId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        mobile: this.state.mobile,
        email:this.state.email,
        gender:this.state.gender
       
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="peace">
        <div className="signup" align="center">
          <Form>
            <Label>First Name </Label>&nbsp;{" "}
            <Input
              type="text"
          
              onChange={(e) => this.handleOnChangeInput(e, "firstName")}
              required/>
            <br /> <br />
            <Label>Last Name </Label>&nbsp;{" "}
            <Input
              type="text"
              required
              onChange={(e) => this.handleOnChangeInput(e, "lastName")}
            />
            <br /> <br />
            <Label>User Id </Label>
            <Input
              type="text"
              required
              onChange={(e) => this.handleOnChangeInput(e, "userId")}
            />
            <br />
            <br />
            <Label>Password</Label>
            <Input
              type="password"
              required
              onChange={(e) => this.handleOnChangeInput(e, "password")}
            />
            <br />
            <br />
            <Label>mobile </Label>
            <Input
              type="tel"
              required
              onChange={(e) => this.handleOnChangeInput(e, "mobile")}
            />
            <br />
            <br />
            <Label>email</Label>
            <Input
              type="email"
              required
              onChange={(e) => this.handleOnChangeInput(e, "email")}
            />
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Label>gender</Label>
            <Input
              type="text"
              required
              onChange={(e) => this.handleOnChangeInput(e, "gender")}/>
            <br />
            <br />
            
          </Form>
           
          <button className="button" onClick={this.submitForm}>
            {" "}
            SIGN UP
          </button><br />
            <br />
            
          <Link to="/">
              <button className="button"> LOG IN</button>
            </Link>
        </div>
      </div>
    );
  }
}