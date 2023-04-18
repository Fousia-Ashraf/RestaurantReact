import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer() {
  return (
    <div>
        <Row>
            <Col className='text-center'>
            <p className='foot'>All rights are reserved to <span className='footm'>FindYourDineIn</span>&#169;2023 
            </p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer