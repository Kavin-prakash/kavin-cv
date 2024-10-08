import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../Styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import KavinImage from '../Asserts/kavin.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-awesome-button/dist/styles.css';
import { ReactTyped } from "react-typed";
import { AwesomeButton } from "react-awesome-button";
import { DownloadIcon } from '@primer/octicons-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export const Home = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const handleDownload = () => {
        const pdfurl = "KAVIN RESUME.pdf";
        const link = document.createElement("a");
        link.href = pdfurl;
        link.download = "Kavin-Prakash-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const SendEmail = () => {
        window.open("mailto:kavinprakash1912@gmail.com?subject=SendMail&body=Description");
    }

    return (
        <section id='Home' className='home-section'>
            <Container fluid>
                <Row className={`row-name ${inView ? 'animate' : ''}`} ref={ref}>
                    <Col className='left-column'>
                        <Row>
                            <Row className='left-column-rows'>
                                <h3 className='words-home-leftcolumn'>Hello It's Me</h3>
                            </Row>
                            <Row className='left-column-rows'>
                                <h1 className='words-home-leftcolumn'>Kavin Prakash</h1>
                            </Row>
                            <Row className='left-column-rows'>
                                <h2 id='react-typed-line' className='words-home-leftcolumn'>And I'am a <ReactTyped style={{ color: 'rgb(14, 135, 146)' }} strings={["Full Stack Developer", "React Js Dev ", ".Net Developer Dev"]} loop typeSpeed={200} /></h2>
                            </Row>
                        </Row>
                        <Row className='social-buttons-css'>
                            <Col>
                                <a href='https://www.linkedin.com/in/kavin-prakash-s-a44b53217' target='_blank' rel='noopener noreferrer'><button className='social-media-button'><LinkedInIcon /></button></a>
                            </Col>
                            <Col>
                                <a href='https://github.com/Kavin-prakash' target='_blank' rel='noopener noreferrer'>
                                    <button className='social-media-button'><GitHubIcon /></button>
                                </a>
                            </Col>
                        </Row>
                        <Row className='cv-download-button'>
                            <AwesomeButton type='primary' after={<DownloadIcon />} className="animated-button" onPress={handleDownload}>
                                Download CV
                            </AwesomeButton>
                        </Row>
                    </Col>
                    <Col className='right-column'>
                        <Row className='say-hi-button' style={{ marginLeft: '400px' }}>
                            <Button onClick={SendEmail}>Say Hi<EmojiEmotionsIcon /></Button>
                        </Row>
                        <img className='kavin-image' src={KavinImage} alt='kavin-prakash' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
