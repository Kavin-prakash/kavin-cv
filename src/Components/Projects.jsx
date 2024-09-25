import React from 'react';
import '../Styles/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListAppImage from '../Asserts/To-Do-list.jpg'
import Button from 'react-bootstrap/Button';
export const Projects = () => {
    return (
        <section className='Project-section' id='Projects'>
            <Row>
                <h3>Projects</h3>
            </Row>
            <Container>
                <Row className='project-section-row'>
                    <Card className='cards-project' style={{ width: '18rem', height: 'auto' }}>
                        <Card.Img variant="top" src={ListAppImage} />
                        <Card.Body>
                            <Card.Title>To-do List App</Card.Title>
                            <Card.Text>
                                A to-do app is a productivity tool designed to help users manage their tasks and stay organized. It typically allows users to create, edit, and delete tasks.
                            </Card.Text>
                            <a href='https://kavin-prakash.github.io/My-Day---To-Do/' target='_blank' rel='noreferrer'><Button variant="primary">Demo</Button> </a>
                            <a href='https://github.com/Kavin-prakash/My-Day---To-Do' target='_blank' rel='noreferrer'><Button variant="primary">Source</Button> </a>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </section>
    )
}
