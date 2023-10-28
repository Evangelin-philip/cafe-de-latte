import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-mug-saucer me-2 fa-beat"></i>Cafe De Latte</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
