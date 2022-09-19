import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_ixx2u2r', 'template_cr5uj88', form.current, 'fzVeZRD9lNra-lyWB')
      .then((result) => {
          console.log("result",result.text);
          setStatus({ success: true, message: 'Message sent successfully, thank you 💜' });
          setButtonText("Send");
      }, (error) => {
          console.log(error.text);
          setStatus({ success: false, message: 'Sorry something went wrong, please try again later 😔' });
      });
    e.target.reset();
  };

  return (
    <section className="contact-ava" id="contact">
      <Container >
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src="https://imgur.com/nkoib6e.gif" alt="contact-us" />
          </Col>

          <Col size={12} md={6}>
            <h2>Let's Connect!</h2>
            {
                status.message && <Col>
                  <p className={status.success === true ? "success" : "danger"}>
                    {status.message}
                  </p>
                </Col>
              }
            <form onSubmit={handleSubmit} ref={form} data-netlify="true">
              <Row className="contact-detail">
                <Col md={6} className="px-1">
                  <input type="text" placeholder="Name" name="from_name" />
                </Col>

                <Col md={6} className="px-1">
                  <input type="email" placeholder="Email" name="from_email"/>
                </Col>

                <Col size={12} className="textarea">
                  <textarea rows="6" placeholder="Message" name="message"></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Contact;