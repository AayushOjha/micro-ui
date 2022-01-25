import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'

export default function NavBar() {
  return (
    <>
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#home">About Us</Nav.Link>
      <Nav.Link href="#features">Sing In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  );
}
