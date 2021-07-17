import React from 'react';
import { Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Help from './Help.js'



const BookNavbar = () =>{

    return (<div className="booknav">
        
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand ><img  height="70px "src="https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_do_Blue_Bus.jpg" /></Navbar.Brand> 
          <Nav className="mr-auto">
          <Link to='/HomePage'><Nav.Link href="#home">Home</Nav.Link> </Link>
            <Nav.Link ><Help/></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar>
        </div>)
}
export default BookNavbar;