import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/Beej_Logo-01.png';
import '../styles/home.css';

const Header = () => {
  return (
    <>

      <header style={{ paddingLeft: 0 }}>
        <div
          className='text-center bg-image'
          style={{ height: 600 }}
        >
          <Navbar expand="lg" className="">
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top comp-logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 justify-content-center w-100"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className='px-5'>About</Nav.Link>
                  <Nav.Link href="#action2" className='px-5'>Sustainability</Nav.Link>
                  <Nav.Link href="#action2" className='px-5'>Shop</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button> */}
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className='mask'>
            <div className='d-flex align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3 hero-text text-start'>Some people talk about saving the world Some act</h1>
                {/* <h1 className='mb-3 hero-text'>Some people talk about</h1>
                <h1 className='mb-3 hero-text'>saving the world</h1>
                <h1 className='mb-3 hero-text'>Some act</h1> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;