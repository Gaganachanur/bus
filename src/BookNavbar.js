import React from 'react';
import { Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const BookNavbar = () =>{

    return (<>
        
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand> 
          <Nav className="mr-auto">
          <Link to='/HomePage'>      <Nav.Link href="#home">Home</Nav.Link> </Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar>
        </>)
}
export default BookNavbar;