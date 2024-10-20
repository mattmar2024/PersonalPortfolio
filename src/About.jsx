import React from 'react';
import resume from './assets/Resume.pdf';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
const About = () => {

    

    return (
        <>
        <body>
            <div>
            <h1><br/>Hi, I am <br/>Matthew Marino<br/><br/></h1>
</div>
<div>
            <p className='Abtxt'>I am motivated to learn new things and expand my knowledge on computers.
            <br/>With my skills in problem solving and troubleshooting, I am ready <br/>to take
                on new challenges. I am interested in networking and <br/>desktop support. My goal
                is to learn as much as<br/> possible about the different areas of IT. 
            </p>
        </div>
<div className="button-container"> 
    <a href={resume} download="Resume.pdf">
        <Button variant="primary" className="resume-button">
                    Download My Resume
                </Button>
            </a>
            </div>
            </body>
            <Footer/>
        </>
    );
};

export default About;