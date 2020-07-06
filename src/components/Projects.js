import React, { Component } from 'react'
import { Card, Button, Container } from 'react-bootstrap';
export class Projects extends Component {


    
    render() {
        return (
            <div>
               <h1 style={{textAlign: "center", marginTop: "10px"}}> Projects </h1>
            <Container>
               <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                <Card.Title>TechHire </Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
      the card's content.
         </Card.Text>
    <Button variant="primary">See Project</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                <Card.Title>Springfield Alumni Chapter</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
      the card's content.
         </Card.Text>
    <Button variant="primary">See Project</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                <Card.Title>Soccer Project</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
      the card's content.
         </Card.Text>
    <Button variant="primary">See Project</Button>
  </Card.Body>
</Card>
</Container>
            </div>
        )
    }
}

export default Projects
