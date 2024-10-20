import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
const Skills = () => {
    return (
        <>
            <div>
                <h1><br/>Skills</h1>
                
            </div>
            <body>
                <br/><br/><br/><br/><br/>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Hard Skills</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Java</li>
                                    <li>HTML</li>
                                    <li>Windows</li>
                                    <li>Mac</li>
                                    <li>iOS</li>
                                    <li>Troubleshooting</li>
                                    <li>Hardware Troubleshooting</li>
                                    <li>Software Troubleshooting</li>
                                    <li>Remote Troubleshooting</li>
                                    <li>Proficiency in Microsoft Office</li>
                                    <li>Freshservice ITSM</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Soft Skills</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Problem-Solving</li>
                                    <li>Critical Thinking</li>
                                    <li>Working in Teams/Groups</li>
                                    <li>Resourceful</li>
                                    <li>Time Management</li>
                                    <li>Attention to Detail</li>
                                    <li>Leadership</li>
                                    <li>Organized</li>
                                    <li>Hardworking</li>
                                    <li>Dependable</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Experience with</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>Python</li>
                                    <li>Linux</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </body> 
        <Footer/>
        
        </>
    );
};

export default Skills;
