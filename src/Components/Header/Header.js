import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../apple-1218166__340.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
        <Navbar expand="lg">
        <Container>
        
        <Navbar.Brand className="fv">Fruit  <img src={logo}alt=""/>Valley</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Link className="link" to="/shop">Shop</Link>
        <Link className="link" to="/order-review">Order Review</Link>
        <Link className="link" to="/manage">Manage</Link>
        <Link className="link" to="/login">Login</Link>
        </Nav>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search You Want"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
        </Form>
        </Container> 
        </Navbar>
        </div>
    );
};

export default Header;