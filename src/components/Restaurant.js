import {React,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';
import './Reastaurant.css'
import { restList } from '../actions/restaction';
import { useDispatch,useSelector } from 'react-redux';

function Restaurant() {
 

//dispatch
const dispatch=useDispatch()

useEffect(()=>{
    // fetchData()
    dispatch(restList())
},[])

const {restaurantList}=useSelector(state=>state.restaurantReducer)
console.log(restaurantList);

  return (
      <Row className='text-align-center mt-4 '>
        {
          restaurantList.map(item=>(
         <Col lg={3} md={4} className='p-3 ' id='stylec'> <RestCard restData={item}>
          </RestCard></Col>
          ))
        }
      </Row>


    
  )
}

export default Restaurant