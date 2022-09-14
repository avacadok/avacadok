import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import js from "../docs/JS.png";
import css from "../docs/css.png"
import html from "../docs/html.png"
import node from "../docs/node.png"
import ruby from "../docs/ruby.png"
import postgreSQL from "../docs/postgreSQL.png"
import react from "../docs/React.png"
import git from "../docs/git.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ea ipsam eos laudantium dolores aspernatur a perspiciatis nihil, iure provident, vitae, eveniet sed iusto dolor animi voluptate pariatur impedit saepe soluta itaque. Maiores mollitia doloribus earum, maxime assumenda explicabo facilis placeat necessitatibus ea! Ratione nihil vero eligendi, odit labore, distinctio voluptatem autem, repudiandae commodi doloribus cupiditate? Facilis laboriosam unde ducimus eaque? Rerum animi minima eveniet ipsam accusantium error, mollitia aperiam, necessitatibus excepturi tempore, omnis repellendus doloribus ducimus eius soluta corporis corrupti. Minima voluptatum quis harum voluptate ipsam dolores fuga odit aut, id cumque doloribus ex aliquid iusto eligendi blanditiis nam!
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                  <img src={git} alt="img" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={js} alt="img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="img" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="img" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={ruby} alt="img" />
                  <h5>Ruby on Rails</h5>
                </div>
                <div className="item">
                  <img src={node} alt="img" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={postgreSQL} alt="img" />
                  <h5>PostgreSQL</h5>
                </div>

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills;