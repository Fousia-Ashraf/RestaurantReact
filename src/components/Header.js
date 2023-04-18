import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"



function Header() {
  return (
    <div>
        <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span>
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/restaurant-140-501644.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                <spn className="head">FindYourDineIn</spn >
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
  )
}

export default Header