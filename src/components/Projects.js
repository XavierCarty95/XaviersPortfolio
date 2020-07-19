import React, { Component } from 'react'
import { Card, Button, Container } from 'react-bootstrap';
class Projects extends Component {


    
    render() {
        return (
            <div>
               <h1 style={{textAlign: "center", marginTop: "10px"}}> Projects </h1>
            <Container style={{display: 'flex', flexDirection: 'row'}}>
               <Card style={{ width: '18rem', marginRight: "10px" }}>
               <Card.Img variant="top" src="https://www.youtube.com/watch?v=OOjtC3FIqRg" />
               <Card.Body>
                <Card.Title>TechHire </Card.Title>
              <Card.Text>
              An application that links software engineering companies with talent. Pulled Data from different job sources using RAPID API allowing filtering by location and job type.
              Leveraged reusable components using React and app level state using Redux.
              Applied Ruby on Rails API with Validations allowing users to enter the correct information. 
              Encrypted user data with Bcrypt encoded password information, and leveraged rack-cors for cross origin data transformation.
              Handled Login and SignIn with Auth, enabling users to stay logged in with localStorage tokens.
         
         </Card.Text>
     <a href = "https://xaviercarty95.github.io/techhirefrontend/" alt="texhhire link" target="_blank" rel="noopener noreferrer" ><Button variant="primary"> Go to Project </Button></a>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                <Card.Title>Springfield Alumni Chapter</Card.Title>
              <Card.Text>
              A website for Kappa Alpha Psi Fraternity, Inc  to increase members’ online presence and communication.
Employed JSON Web Tokens and localStorage to store encrypted user information for authentication. 
Implemented routing with  React-Router-Dom to develop responsive and user-friendly navigation.
Used Ruby API Active Record Serializers to structure JSON objects for database tables. 
Manage CRUD operations allowing to create notifications for users around delete, and like  members’s notifications

         </Card.Text>
         <a href = "https://xaviercarty95.github.io/SpakFrontEnd/" alt="texhhire link" target="_blank" rel="noopener noreferrer" ><Button variant="primary"> Go to Project </Button></a>
  </Card.Body>
</Card>

</Container>
            </div>
        )
    }
}

export default Projects
