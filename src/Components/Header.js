import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";

function Header(props) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MAKE-UP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            {isAuthenticated && <Nav.Link href="/favourites">My Favs</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
            {isAuthenticated && <p style={{color:"grey", margin:"auto 20px"}}>{`Welcome ${user.name}`}</p>}
            <Login />
            <Logout />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
