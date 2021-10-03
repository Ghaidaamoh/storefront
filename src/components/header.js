import React from 'react';
import {Navbar, Container} from 'react-bootstrap'
export default function Header() {
  return (
<Navbar bg="dark">
<Container>
  <Navbar.Brand href="#home">
    <Navbar.Text style={{color:"wheat"}}> Ghaidaa Store </Navbar.Text>
  </Navbar.Brand>
</Container>
</Navbar>
  );
}