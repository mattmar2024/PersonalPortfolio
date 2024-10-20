import React from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = () => {
    return (
        <>
        <div>
            <h1><br/>Education</h1>
        </div>
        <body>
            <br/>
        <Container>
            <Row className="justify-content-center"> {/* Center the row */}
                <Col md={6} lg={4}> {/* Set the width: md for medium, lg for large screens */}
                    <Card className="mb-3">
                        <Card.Header as="h5">Kean University</Card.Header>
                        <Card.Body>
                            <Card.Title>My Time at Kean University</Card.Title>
                            <Card.Text>
                                Location of University: Union New Jersey
                            </Card.Text>
                            <Card.Text>
                                Pursued Degree: Bachelor's degree in Information Technology
                            </Card.Text>
                            <Card.Text>
                                Graduation Date: May 2025
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Col md={6} lg={4}> {/* Same width */}
                    <Card className="mb-3">
                        <Card.Header as="h5">Academic Achievements</Card.Header>
                        <Card.Body>
                            <Card.Title>Achievements and Rewards</Card.Title>
                            <Card.Text>
                                Scholarship: Presidential Scholarship
                            </Card.Text>
                            <Card.Text>
                                Honors: Dean's list every semester
                            </Card.Text>
                            <Card.Text>
                                Current GPA: 3.990
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={6} lg={4}> {/* Same width */}
                    <Card className="mb-3">
                        <Card.Header as="h5">Courses</Card.Header>
                        <Card.Body>
                            <Card.Title>Major Courses</Card.Title>
                            <Card.Text>
                                I have taken classes in networking, Linux, database, computer systems,
                                Java programming, and project management. I am currently taking classes in web development,
                                computer security, and mobile app development. The database class has exposed me to php and mySQL.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </body>
        <Footer/>
        </>
    );
};

export default Education;
