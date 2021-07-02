import React from 'react';
import {Form ,Col,Button} from 'react-bootstrap';


export default class UpdateProfile extends React.Component{ 

render(){

    return(<>
 <Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>Current UserId</Form.Label>
      <Form.Control type="text" placeholder="Enter your current UserId" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>First NAME</Form.Label>
      <Form.Control type="text" placeholder="Enter your first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>Last NAME</Form.Label>
      <Form.Control type="text" placeholder="Enter your last name" />
    </Form.Group>

  

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label> New Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>New Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

 

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Karnataka</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Hyderabad</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></>);
}
}