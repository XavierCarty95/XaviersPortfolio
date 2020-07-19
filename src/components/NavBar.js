import React from 'react';
import { Navbar, Nav,Form,FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            
    <Navbar bg="primary" expand="lg" variant="light">
    <Navbar.Brand as={Link} to= "/home">Xavier</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
        {/* <NavDropdown.Item as={Link} to="/github">Github</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      {/* </NavDropdown> */} */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
     </Navbar.Collapse>
    </Navbar> 
    </div>
    )
}

export default NavBar