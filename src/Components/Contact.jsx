import React from 'react';
import '../Styles/Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
export const Contact = () => {
    const Email = "kavinprakash1912@gmail.com";

    const SendEmail = () => {
        window.open("mailto:kavinprakash1912@gmail.com?subject=SendMail&body=Description");
    };

    return (
        <section id='Contacts' className='contact-section'>
            <Container>
                <Row className='contact-section-rows'>
                    <Col xs={12} md={6}>
                        <Row>
                            <h2>Contact</h2>
                        </Row>
                        <Row>
                            <h3>Feel free to reach out</h3>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <h5><EmailIcon /><a href='' onClick={SendEmail}><u>{Email}</u></a></h5>
                            <h5><GitHubIcon /><a href='https://github.com/Kavin-prakash' target='_blank' rel='noreferrer'>https://github.com/Kavin-prakash</a></h5>
                            <h5><LinkedInIcon /><a href='https://www.linkedin.com/in/kavin-prakash-s-a44b53217' target='_blank' rel='noreferrer'><u>Reach me on LinkedIn</u></a></h5>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
