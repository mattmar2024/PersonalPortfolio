import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResearchPaper from './assets/Research Paper.pdf';
import Report from './assets/HCI Project Report.pdf';
import Footer from './Footer';

const Projects = () => {
    return (
        <>
            <div>
                <h1> <br/>Projects</h1>
            </div>
            <body>
            <br/>  <br/>
            <Row className="g-4 justify-content-center"> {/* Centering the first two cards */}
                <Col md={4} className="d-flex"> {/* First Card - 33% width */}
                    <Card className="w-100" style={{ maxHeight: '300px' }}> {/* Set max height */}
                        <Card.Body>
                            <Card.Title>Research</Card.Title>
                            <Card.Text>
                                I conducted a research study about the impact of technology
                                on Gen X and Gen Z. The research study was for one of my courses at Kean University. It involved 
                                surveying 50 at least participants, analyzing data, creating charts, and writing a research paper.
                                The results were shocking because Gen X and Gen Z agreed on more areas than I thought they would.
                            </Card.Text>
                            <a href={ResearchPaper} download="Research Paper.pdf">
                                <Button variant="primary">Download Research Paper</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="d-flex"> {/* Second Card - 33% width */}
                    <Card className="w-100" style={{ maxHeight: '300px' }}> {/* Set max height */}
                        <Card.Body>
                            <Card.Title>Group Project</Card.Title>
                            <Card.Text>
                                I worked on a group project for a human-computer interaction course. The goal of the project was to find 
                                issues with the UI of various streaming services and find ways to improve the user experience. We then created three 
                                prototypes of an improved UI that could be implemented by all streaming services. We selected one of the prototypes and tested it 
                                with users to see if our UI provided a better experience.
                            </Card.Text>
                            <a href={Report} download="HCI Project Report.pdf">
                                <Button variant="primary">Download Report</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>  <br/>
            <Row className="g-4 justify-content-center"> {/* Centering the third card */}
                <Col md={6} className="d-flex justify-content-center"> {/* Center the card */}
                    <Card className="w-100" style={{ maxHeight: '4500px'}}> {/* Set max height */}
                        <Card.Body>
                            <Card.Title>Team Project</Card.Title>
                            <Card.Text>
                                I worked on a database project with one other team member. We had to create an index.html page where someone could
                                login, view all the employees, or search for employees based on a keyword. After signing in, someone could search
                                for a product in the table or add a product to the table. I was responsible for creating the index.html page and allowing the user 
                                to search for and view the employees. I also made sure that when the form was filled, the products would be inserted 
                                into the table. The final thing I worked on was making sure the user could search for the products that are in the table.
                                My partner handled the login and logout function. He also created the form for adding the products and provided the code
                                that created the table the products would be inserted into.
                            </Card.Text>
                            <a href='https://obi.kean.edu/~marinom4@kean.edu/TECH3740/index.html' target="_blank" rel="noopener noreferrer"> 
                                <Button variant="primary">Go to Project Website</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </body>
            <Footer/>
        </>
    );
};

export default Projects;
