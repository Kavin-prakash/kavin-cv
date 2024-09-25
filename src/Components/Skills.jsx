import React from 'react';
import '../Styles/Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tooltip } from '@mui/material';
import Card from 'react-bootstrap/Card';
import FrontEndImage from '../Asserts/Front-End.png';
import BackEndImage from '../Asserts/Back-End.jpg';
import Others from '../Asserts/others.png';

export const Skills = () => {
    return (
        <section id='Skills' className='skill-section'>
            <Row>
                <h3>Skills</h3>
            </Row>
            <Container>
                <Row className='skills-row'>
                    <Col className='skill-col'>
                        <Tooltip title="HTML" placement='top'><img width="48" height="48" src="https://img.icons8.com/nolan/64/html-5.png" alt="html-5" /></Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title="CSS" placement='top'><img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" /></Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title="JS" placement='top'><img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" /></Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title="REACT" placement='top'>
                            <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo" />
                        </Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title="BOOTSTRAP" placement='top'>
                            <img width="48" height="48" src="https://img.icons8.com/nolan/64/bootstrap.png" alt="bootstrap" />
                        </Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title=".NET" placement='top'>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/net-framework.png" alt="net-framework" />
                        </Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title="C-SHARP" placement='top'>
                            <img width="50" height="50" src="https://img.icons8.com/nolan/50/c-sharp-logo.png" alt="c-sharp-logo" />
                        </Tooltip>
                    </Col>
                    <Col className='skill-col'>
                        <Tooltip title='MY-SQL' placement='top'>
                            <img width="48" height="48" src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-flat-those-icons" />
                        </Tooltip>
                    </Col>
                </Row>
                <Row className='Skill-display-cards'>
                    <Col xs={12} md={4}>
                        <Card className='cards' style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={FrontEndImage} />
                            <Card.Body>
                                <Card.Title>Front-End</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Hyper Text Mark Up Language</li>
                                        <li>Cascading Style Sheet</li>
                                        <li>Java Script</li>
                                        <li>BootStrap</li>
                                        <li>React Js</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='cards' style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={BackEndImage} />
                            <Card.Body>
                                <Card.Title>Back-End</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>.Net Core WebApi</li>
                                        <li>.Net MVC</li>
                                        <li>MySql</li>
                                        <li>SQL</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='cards' style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={Others} />
                            <Card.Body>
                                <Card.Title>Others</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>AWS Cloud</li>
                                        <li>Azure Cloud</li>
                                        <li>Jenkins</li>
                                        <li>Git & GitHub</li>
                                        <li>NUnit Testing</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
