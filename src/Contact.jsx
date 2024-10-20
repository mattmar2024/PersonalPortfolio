import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5el6xkg', 'template_eyjkhyc', form.current, {
        publicKey: 'qq7PB-C4HxFYDy0xA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!'); 
                    window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        },
      );
  };

    return (
        <>
        <div>
            <h1><br/>Contact</h1>
            </div>
            <body>
                <br/> <br/>
                <div>
            <Form  className='Contactform' ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text"  name="user_name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control type="email" name="user_email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="user_subject" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={6} required />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit" value="Send" className="btn-lg">
                        Send
                    </Button>
                </div>
            </Form>
        </div>
        </body>
        <Footer/>
        </>
    );
};

export default Contact;
