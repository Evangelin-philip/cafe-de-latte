import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import store from '../redux/store'
import { fetchRestaurants } from '../redux/restaurantSlice'
import {useSelector,useDispatch} from 'react-redux'

function Home() {
    const allRestaurants=useSelector((state)=>{
      state.restaurantSlice
    })
    console.log("allRest "+allRestaurants)

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchRestaurants)
    },[])
  return (
    <>
      <Row>
        <Col sm={12} md={6} lg={4}>
            <RestCard restaurant_data={allRestaurants}/>
        </Col>
      </Row>
    </>
  )
}

export default Home
