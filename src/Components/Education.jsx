import React from 'react'
import '../Styles/Education.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EducationImage from '../Asserts/Education-rafiki.png'
import Educationgif from '../Asserts/Education.gif';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';


import Container from 'react-bootstrap/Container';
export const Education = () => {
    return (
        <section id='Education' className='education-section'>
            <Row>
                <h2>Education</h2>
            </Row>
            <Container>

                <Box>
                    <Row className='education-row'>
                        <Col xs={12} md={6} className='eduction-left-column'>
                            <Row className='eduction-left-column-rows'>
                            </Row>
                            <Row className='eduction-left-column-rows'>
                                <h4>Schooling</h4>
                                <Box component="section" className='education-box' sx={{ p: 2, border: '2px solid Black' }}>
                                    In 2019, I proudly graduated from Model School, nestled in the charming village of Chettimankurichi, near Idappadi in Salem District. My time there was filled with invaluable learning experiences and cherished memories.
                                </Box>
                            </Row>
                            <Row className='eduction-left-column-rows'>
                                <h4>Graduated<SchoolIcon /></h4>
                                <Box component="section" className='education-box' sx={{ p: 2, border: '2px solid Black' }}>
                                    In 2023, I proudly earned my Bachelor of Technology (B.Tech) degree from Velalar College of Engineering and Technology in Erode. My journey there was marked by rigorous academic challenges, enriching experiences, and countless unforgettable moments
                                </Box>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={EducationImage} alt='education-image' className='eduation-image' />
                        </Col>
                    </Row>
                </Box>
            </Container>
        </section>
    )
}