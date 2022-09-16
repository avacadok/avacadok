import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingTime, setTypingTiming] = useState(200);
  const [index, setIndex] = useState(1);
  const rotateText = ["Full-stack Developer", "Web Designer", "Problem Solver"];
  //rotate time between each text
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingTime);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    //index of the rotateText
    let i = loopNum % rotateText.length;
    let fullText = rotateText[i];
    //deleting text when isDeleting is true. if not, add one letter for the text
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingTiming(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      //delete text when its a full string
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setTypingTiming(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setTypingTiming(150);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className="home" id="home">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInDown animate__slow" : ""}>
            <Container>
              <Row className="align-item-center">
                <Col xs={12} md={6} xl={7}>
                  <span className="tagline">
                    Welcome to my Portfolio
                  </span>
                  <h1>Hi I am Ava ✨<br /> A <span className="wrap">{text}</span></h1>
                  <p>I am a web developer who transitioned from the financial banking field. I had a strong interest in web development and love the ability to be creative and design visually appealing applications. Passionated about using my code to create beautiful and user-friendly products, that provide joy in people’s daily lives. I am driven to learn new concepts and work well in highly collaborative work environment.</p>
                </Col>

                <Col xs={12} md={6} xl={5}>
                  <img className="creative-img" src="https://imgur.com/wiE1POO.gif" alt="creativity" />
                </Col>

              </Row>
            </Container>
          </div>}
      </TrackVisibility>
    </section>
  )
}

export default Banner;