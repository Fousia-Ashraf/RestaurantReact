import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import './Header.css'


function OperatingTime({ timeData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}
                className='mt-2 mb-2 btn '
                style={{ backgroundColor: "#0c2c31", color: 'yellow' }}
            >
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='blah' >Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <ListGroup>
                        <ListGroup.Item>Monday | {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday | {timeData.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday | {timeData.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday | {timeData.Thursday} </ListGroup.Item>
                        <ListGroup.Item>Friday | {timeData.Friday} </ListGroup.Item>
                        <ListGroup.Item>Saturday | {timeData.Saturday} </ListGroup.Item>
                        <ListGroup.Item>Sunday | {timeData.Sunday} </ListGroup.Item>


                    </ListGroup>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default OperatingTime