import React from 'react';
import { Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Profile from './Profile';



const BookNavbar = () =>{

    return (<>
        
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand ><img  height="70px "src="https://cdn.dribbble.com/users/1146489/screenshots/4574689/hello_behance.jpg?compress=1&resize=400x300" /></Navbar.Brand> 
          <Nav className="mr-auto">
          <Link to='/HomePage'><Nav.Link href="#home">Home</Nav.Link> </Link>
            <Nav.Link ><Profile/></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar>
        </>)
}
export default BookNavbar;