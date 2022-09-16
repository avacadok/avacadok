import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInfo);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInfo);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully, thank you 💜' });

    } else {
      setStatus({ success: false, message: 'Sorry something went wrong, please try again later 😔' });
    }
  };
      console.log("status",status.message)
  return (
    <section className="contact-ava">
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
            <form onSubmit={handleSubmit}>
              <Row className="contact-detail">
                <Col md={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>

                <Col md={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>

                <Col md={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>

                <Col md={6} className="px-1">
                  <input type="text" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>

                <Col size={12} className="textarea">
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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