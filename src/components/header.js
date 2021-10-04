import React from 'react';
import { connect } from 'react-redux';
import {Navbar, Nav ,Container} from 'react-bootstrap'
function Header(props) {
  return (
    <Navbar bg="dark">
<Container>
  <Navbar.Brand href="#home">
    <Navbar.Text style={{color:"wheat"}}> Ghaidaa Store </Navbar.Text>
  </Navbar.Brand>
</Container>
<Nav className="me-auto">
      <Nav.Link style={{color:"wheat",float:"right"}} onClick={()=>{props.show()}} >🛒{props.cart.length}</Nav.Link>
    </Nav>
</Navbar>
  );
}

function mapStateToProps(state){
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
