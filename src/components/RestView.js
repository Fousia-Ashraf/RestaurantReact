import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import './Restview.css'
import Review from './Review';
import OperatingTime from './OperatingTime';
import { useSelector } from 'react-redux';


function RestView() {
    const params = useParams()
    // console.log(params.id);
    // var [restaurantList, setRestaurant] = useState([])
    // const fetchData = async () => {
    //     const result = await fetch('/restaurants (1).json')
    //     result.json().then(data => {
    //         setRestaurant(data.restaurants)


    //     })
    // }
    // console.log(restaurantList);

    // console.log(restaurant);
    

    useEffect(() => {
        
    }, [])
    const {restaurantList}=useSelector(state=>state.restaurantReducer)

    const restaurant = restaurantList.find(item => item.id == params.id)



    return (

        <>
            {
                restaurant ? (
                    
                    <Container style={{ borderRadius: '20px' }} className='mt-5 mb-5 w-75 p-2'>

                        <Row id='anim' debug style={{ backgroundColor: 'yellow' }} className='p-2'>
                            <Col md={6} debug className='p-3'>
                                <img style={{ height: '500px', borderRadius: '20px',width:'400px' }} src={restaurant.photograph} />

                            </Col>
                            <Col id='anim' md={6} debug className='p-3'>
                                <ListGroup style={{ backgroundColor: 'yellow', color: '#0c2c31' }}>
                                    <p className='restHead' style={{ fontSize: '25px' }}><strong>{restaurant.name}</strong></p>
                                    <ListGroup.Item style={{ color: '#0c2c31' }}><strong>Address</strong> : {restaurant.address}</ListGroup.Item>
                                    <ListGroup.Item style={{ color: '#0c2c31' }}><strong>Neighborhood</strong> : {restaurant.neighborhood}</ListGroup.Item>
                                    <ListGroup.Item style={{ color: '#0c2c31' }}><strong>Cuisine Type</strong> : {restaurant.cuisine_type}</ListGroup.Item>
                                    <ListGroup.Item style={{ color: '#0c2c31' }}>
                                    <OperatingTime
                                    timeData={restaurant.operating_hours}/>
                                     <Review reviewData={restaurant.reviews}/>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                ) : ""
            }
        </>
    )
}

export default RestView