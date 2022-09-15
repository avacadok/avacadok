import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInfo = {
    name: '',
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

  const handleSumbit = (e) => {
    e.preventDeafult()
  }

  return (
    <section className="contact-ava">
      <Container >
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src="https://imgur.com/nkoib6e.gif" alt="contact-us" />
          </Col>

          <Col size={12} md={6}>
            <h2>Let's Get In Touch</h2>
            <form onSubmit={handleSumbit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>

                <Col size={12} className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>

                {
                  status.message && <Col>
                  <p className={status.success === true ? "success" : "danger"}>
                    {status.messgae}
                  </p>
                  </Col>
                }

              </Row>
            </form>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Contact;