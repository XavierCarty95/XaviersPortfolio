import React, { Component } from 'react'
import { Container, Button, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

    
    
    render() {
        console.log(this.props)
        return (
            
                <Container>
               <h1 style={{textAlign: 'center' , marginTop: '10px'}}> Welcome to My Portfolio </h1>

               <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" ,borderRadius: "50%", height: "350px", marginBottom: "20px"}} src={this.props.github.avatar_url} alt="me"></img>
               <a style={{textAlign: "center" , marginRight: "10px"}} href = {this.props.github.html_url} alt="texhhire link" target="_blank" rel="noopener noreferrer" ><Button variant="primary"> Go to Github </Button></a>
               <a style={{textAlign: "center", marginRight: "10px"}} href = "https://www.youtube.com/watch?v=OOjtC3FIqRg" alt="texhhire link" target="_blank" rel="noopener noreferrer" ><Button variant="primary"> TechHire Demo </Button></a>
               <a style={{textAlign: "center", marginRight: "10px" }} href = "https://www.youtube.com/watch?v=sAYIQK-JHHc" alt="texhhire link" target="_blank" rel="noopener noreferrer" ><Button variant="primary"> Springfield Alumni Demo </Button></a>
               <Link to="/contact" style={{textAlign: "center", marginRight: "10px" }} href = "https://www.youtube.com/watch?v=sAYIQK-JHHc" alt="texhhire link"  rel="noopener noreferrer" ><Button variant="primary"> Contact </Button></Link>
               <Link to="/projects" style={{textAlign: "center", marginRight: "10px" }} href = "https://www.youtube.com/watch?v=sAYIQK-JHHc" alt="texhhire link"  rel="noopener noreferrer" ><Button variant="primary"> Projects </Button></Link>
               <h1 style={{textAlign: 'center' , marginTop: '10px'}}> Top Five Repos </h1>
               <ListGroup>
  <ListGroup.Item><a alt="texhhire link" target="_blank" rel="noopener noreferrer" href="https://github.com/XavierCarty95/JavascriptDS">DataStructures & Algorithms</a></ListGroup.Item>
  <ListGroup.Item><a alt="texhhire link" target="_blank" rel="noopener noreferrer" href="https://github.com/XavierCarty95/techhirefrontend"> TechHireFrontEnd</a> </ListGroup.Item>
  <ListGroup.Item><a alt="texhhire link" target="_blank" rel="noopener noreferrer" href="https://github.com/XavierCarty95/ASP.net-Finance-Scraper">ASP.net-Finance-Scraper</a></ListGroup.Item>
  <ListGroup.Item><a alt="texhhire link" target="_blank" rel="noopener noreferrer" href="https://github.com/XavierCarty95/Blogavista-FrontEnd">blogavista-backend</a></ListGroup.Item>
  <ListGroup.Item><a alt="texhhire link" target="_blank" rel="noopener noreferrer" href="https://github.com/XavierCarty95/Blogavista-FrontEnd">Blogavista-FrontEnd</a></ListGroup.Item>
</ListGroup>
               {/* <a style={{textAlign: "center" , textDecoration: "none"}} href = {this.props.github.html_url} alt="texhhire link"   target="_blank" rel="noopener noreferrer" > GitHub </a> */}
               </Container>
        
    
        )
    }
}

export default Home
