import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const AppNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="color-nav" variant="light" dark expand="md">
          <NavbarBrand href="/">Books Finder</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
           
            <NavItem>
              <NavLink style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="/Contact">Contact</NavLink>
            </NavItem>
            
          </Nav>
          
          </Collapse>
        </Navbar>
      </div>
    );
  }


export default AppNav;
