// import Accordion from 'react-bootstrap/Accordion';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='mt-2 mb-2 btn '
        style={{ backgroundColor:"#0c2c31" ,color:'yellow'}}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
           { 
           reviewData.map(item=>(
            <Card body style={{ width: '400px' }}>
                <h6>{item.name},{item.date}</h6>
                <p>Rating : {item.rating}</p>
                <p>Comments : {item.comments}</p>
              
            </Card>

           ))
            
}
          </div>
        </Collapse>
      </div>
        
    </div>
  )
}

export default Review