import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import "../App.css"
export class About extends Component {
    render() {
        return (

            <Container>
            <div >
                <h1 style={{textAlign: "center", marginTop: "10px"}}> About</h1>
                <p>My name is Xavier Carty, I am from Mount Vernon, NY. I just graduated from 
                Flatiron Software Engineering Bootcamp. I went to Computer Science Career Devs for a year 
                and a half. 

                Fullstack Developer a bachelor's degree in Psychology and two years of experience working in the healthcare and social service sectors. Passionate about solving mission-oriented problems through tech, and have strong skills in pair-programming, driver navigator roles, github version control and wireframing. 
                </p>
            </div>
            </Container>
        )
    }
}

export default About
