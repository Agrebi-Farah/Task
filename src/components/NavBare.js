import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBare() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Workshop React Router Dom</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* 
       <Link to="/"> <Nav.Link  >Home</Nav.Link></Link>
       <Link to="/Profiles"> <Nav.Link >Profiles</Nav.Link></Link>
        <Link to ="/Login"><Nav.Link >Login</Nav.Link></Link>
        */}

              
       <Nav.Link as = {Link} to="/"> Home</Nav.Link>
      <Nav.Link  as = {Link} to="/Profiles" >Profiles</Nav.Link>
      <Nav.Link  as = {Link} to="/Login" >Login</Nav.Link>
        

      


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}

export default NavBare
