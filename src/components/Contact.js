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
      
      <th>Link To Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linkedn</td>
      
      <td><a href ="https://www.linkedin.com/in/xaviercarty" target="_blank" rel="noopener noreferrer">Linkedn</a></td>
    </tr>
    <tr>
      <td>Github</td>
      <td><a href ="https://www.github.com/in/xaviercarty" target="_blank" rel="noopener noreferrer">Github</a></td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><a href = "https://medium.com/@xaviercarty" target="_blank" rel="noopener noreferrer" >Medium</a></td>
      
    </tr>
    <tr>
      <td>Resume</td>
      <td><a href = "https://docs.google.com/document/d/1jJ4lkfJ6hUq_NHcPHllNXhmCgC-IOPZYX2idPGwdF-I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></td>
    </tr>
    <tr>
      <td>Email</td>
      <td> xaviercarty@gmail.com </td>
    </tr>
  </tbody>
</Table>
</Container>
        </div>
      
    )
}
