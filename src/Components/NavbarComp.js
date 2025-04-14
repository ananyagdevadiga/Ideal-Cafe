import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaHome, FaUser, FaUtensils } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, InputGroup, Button, Badge } from 'react-bootstrap';
import './NavbarComp.css';

function NavbarComp() {
  const { totalItems } = useCart();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-content-wrapper">

            {/* Logo + Location */}
            <div className="logo-location-group">
              <Navbar.Brand href="/" className="navbar-brand no-margin">
                <img src="/logo-3.png" alt="Ideal Logo" height="45" width="150" />
              </Navbar.Brand>
              <Nav className="align-items-center no-gap">
                <NavDropdown
                  title={
                    <span className="location-title">
                      <FaMapMarkerAlt className="location-icon" />
                      <span className="location-text">Locations</span>
                    </span>
                  }
                  className="location-dropdown"
                >
                  <NavDropdown.Item>Hampankatte</NavDropdown.Item>
                  <NavDropdown.Item>Kankanady</NavDropdown.Item>
                  <NavDropdown.Item>Lalbhag</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>All Cities</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>

            {/* Search */}
            <Form className="search-form flex-grow-1">
              <InputGroup>
                <FormControl type="search" placeholder="Search" className="search-input" />
                <Button className="search-icon-button">
                  <FaSearch size={18} />
                </Button>
              </InputGroup>
            </Form>

            {/* Nav Icons */}
            <Nav className="align-items-center icon-nav text-center">
              <Link to="/" className="nav-link icon-link">
                <div className="icon-wrapper">
                  <FaHome className="nav-icon" />
                  <div className="nav-label">Home</div>
                </div>
              </Link>
              <Link to="/menu" className="nav-link icon-link">
                <div className="icon-wrapper">
                  <FaUtensils className="nav-icon" />
                  <div className="nav-label">Menu</div>
                </div>
              </Link>
              <Link to="/cart" className="nav-link icon-link position-relative">
                <div className="icon-wrapper">
                  <FaShoppingCart className="nav-icon" />
                  <div className="nav-label">Cart</div>
                  {totalItems > 0 && (
                    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                      {totalItems}
                    </Badge>
                  )}
                </div>
              </Link>
              <Nav.Link href="#login" className="icon-link">
                <div className="icon-wrapper">
                  <FaUser className="nav-icon" />
                  <div className="nav-label">Login</div>
                </div>
              </Nav.Link>
            </Nav>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
