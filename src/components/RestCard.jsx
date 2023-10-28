import React from 'react'
import{Card} from 'react-bootstrap'

function RestCard({restaurant_data}) {
  return (
    <>
      {
        restaurant_data?.restaurant_data?
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant_data?.photograph} />
      <Card.Body>
        <Card.Title>{restaurant_data?.name}</Card.Title>
        <Card.Text>
         <p>cusine :
         {restaurant_data?.name}
         <span> {restaurant_data?.neighborhood}</span>
         </p>
         
        </Card.Text>
      </Card.Body>
    </Card>
    :
    <p>No data found</p>}
    </>
  )
}

export default RestCard
