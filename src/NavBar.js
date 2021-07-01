
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  

import {Link} from 'react-router-dom';


 const NavBar= (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
       <>
      <div className="HomeNav">
  <Navbar   expand="md">
  <NavbarBrand  ><img  height="70px "src="https://thumbs.dreamstime.com/b/glowing-neon-line-bus-icon-isolated-blue-background-transportation-concept-tour-transport-sign-tourism-public-vehicle-symbol-213246949.jpg" /></NavbarBrand>
  
  <NavbarBrand  ></NavbarBrand>
  <Link to = '/Booktickets'> <NavbarBrand  >BOOK TICKETS</NavbarBrand></Link>
   <NavbarToggler onClick={toggle} /> 
   <Collapse isOpen={isOpen} navbar>
      
      <Nav className="mr-auto" navbar>
         <NavItem>
         <NavLink>About </NavLink>
         </NavItem>
         <NavItem>
            <NavLink target="blank" href="https://github.com/Gagan720602/bus.git">GitHub</NavLink>
         </NavItem>
         <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
               Options
            </DropdownToggle>
            <DropdownMenu right>
               <DropdownItem>  Option 1</DropdownItem>
               <DropdownItem> Option 2  </DropdownItem>
               <DropdownItem divider />
               <DropdownItem> Reset</DropdownItem>
            </DropdownMenu>
         </UncontrolledDropdown>
      </Nav>
      <NavbarText>peace</NavbarText>
   </Collapse>
</Navbar>
 </div>



 </>
    );
  }
  export default NavBar;
  