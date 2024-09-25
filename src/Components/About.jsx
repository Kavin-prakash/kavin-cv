import React from 'react';
import '../Styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import AboutImage from '../Asserts/Mobile Marketing-bro.png';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';


export const About = () => {

    return (
        <section id='About' className='about-section'>
            <Row>
                <h2>About Me</h2>
            </Row>
            <Container>
                <Row className='aboutsection-row'>
                    <Col xs={12} md={6}>
                        <img className='about-image' src={AboutImage} alt='About-Image' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className='myself-content-row'>
                            <Row >
                                For the past year, I have been thriving as a Junior Software Engineer at Relevatz Technology. This role has allowed me to immerse myself in cutting-edge projects, collaborate with a talented team, and continuously expand my technical skills. My journey at Relevatz has been incredibly rewarding, providing me with opportunities to contribute to innovative solutions and grow both professionally and personally.
                            </Row>
                            <Row>
                                I am passionate about leveraging technology to solve real-world problems and am always eager to take on new challenges that push the boundaries of my capabilities. My experience at Relevatz Technology has solidified my commitment to excellence and my drive to make a meaningful impact in the tech industry.
                            </Row>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
