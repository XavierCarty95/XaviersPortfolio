import React from 'react'
import { Table, Container } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            < Container >
         <h1 style={{textAlign: "center", marginTop: "10px"}}> Contact </h1>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Website</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linkedn</td>
      <td>Xavier</td>
      <td>Carty</td>
      <td>https://www.linkedin.com/in/xaviercarty</td>
    </tr>
    <tr>
      <td>Github</td>
      <td>Xavier</td>
      <td>Carty</td>
      <td>Xavier95</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>Xavier</td>
      <td>Carty</td>
      <td>XavierCarty</td>
    </tr>
  </tbody>
</Table>
</Container>
        </div>
    )
}
