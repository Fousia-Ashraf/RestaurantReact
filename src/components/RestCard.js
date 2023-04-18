import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Restview.css'

function RestCard({restData}) {
  return (
    <>
        <Link to={`/view-restaurant/${restData.id}`} style={{textDecoration:'none'}}>
          <Card id='anim' style={{ width: '18rem' ,backgroundColor:'yellow',color:'#0c2c31'}}>
                  <Card.Img variant="top" src={restData.photograph} />
                  <Card.Body>
                      <Card.Title>{restData.name}</Card.Title>
                      <Card.Text>
                          <p>
                           <strong> Cuisine Type</strong> {restData.cuisine_type}
                          </p>
                          <p>
                           <strong>Neighbourhood</strong> {restData.neighborhood}
                          </p>
                      </Card.Text>
                  </Card.Body>
              </Card>
        </Link>
    </>
  )
}

export default RestCard