
import React from 'react';
import {Navbar, Container} from 'react-bootstrap'

export default function Footer() {
  return (
      <div >
    <Navbar bg="dark">
      <Container>
        <Navbar.Text style={{color:"wheat"}}>
    2021 Ghaidaa moh
    <br/>
    Contacts Us 123-459-000
    </Navbar.Text>
   </Container>
</Navbar>
    </div>
  );
}