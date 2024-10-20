import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
    return (
     <>
        <div className="container">
            <h1><br/>Experience</h1>
        </div>
        <body>
        <div className="d-flex justify-content-center mt-4 mb-5">
        <Accordion defaultActiveKey={['0']} alwaysOpen style={{ width: '50%' }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Details of Working at Kean IT</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Duration: June 2023 - Present</li>
            <li>Role: Desktop Support Technician</li>
            <li>I was working at Kean IT when it was the Office of Computer and Information Services. I experienced the 
                transition from OCIS to Kean IT.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What I did while Working at Kean IT</Accordion.Header>
        <Accordion.Body>
        Tasks included troubleshooting various issues, connecting
users to printers on Mac and Windows devices, installing software, setting up computers, replacing
hard drives, transferring data, imaging computers, installing drivers, resolving audio/camera issues, and moving
equipment. I also utilized the ticketing system Freshservice to create, close, and make notes on tickets.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </body>
        <Footer />
    </>
    );
};

export default Experience;
