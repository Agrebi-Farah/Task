import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function UserCard({element}) {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png" />
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
      {element.Profession}
    </Card.Text>
    <Link to ={`/Details/${element.id}`} > <Button variant="primary">Details</Button> </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
