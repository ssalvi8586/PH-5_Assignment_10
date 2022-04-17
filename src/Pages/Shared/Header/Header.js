import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Doc Deal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  <strong>{user.displayName}</strong>
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={() => signOut(auth)}>
                  <strong>Sign Out</strong>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  <strong>Login</strong>
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <strong>Register</strong>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
