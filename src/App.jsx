import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Education from "./Education.jsx";
import AI from './AI.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Matthew Marino's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">About Me</Nav.Link>
            <Nav.Link as={Link} to="/Education">Education</Nav.Link>
            <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/AI">AI</Nav.Link>

            <Nav.Link href="#" disabled> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Routes>
<Route path="/" element={<About />} />
<Route path="/Experience" element={<Experience />} />
<Route path="/Education" element={<Education />} />
<Route path="/Skills" element={<Skills />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/AI" element={<AI />} />

</Routes>
</Router>

    </>
  )
}

export default App
