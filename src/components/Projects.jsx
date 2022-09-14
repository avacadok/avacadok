import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {

  const projects = [
    {
      title: "Depawture",
      description: "An ecommerce store that display pet travel related products",
      imgUrl: "",
    },
    {
      title: "Keen Dating",
      description: "An online dating apps that helps users to find the one",
      imgUrl: "",
    },
    {
      title: "Jungle",
      description: "An ecommerce store that allows users to purchase a variety of beautiful plants.",
      imgUrl: "",
    },
    {
      title: "Scheduler",
      description: "An app that allows booking, editing and cancelling an interview",
      imgUrl: "",
    },
    {
      title: "Happy Eats",
      description: "A food ordering app that users can order items online and pick-up in store",
      imgUrl: "",
    }
  ];

  return (
    <section className="project">
      <Container>
        <Row>
          <Col>
            <h2>
              My Projects
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis rerum vero maxime vel repellat iste error? Expedita, molestiae alias?
            </p>

            <div>{projects.map((project, index) => {
              return (
                <p key={index}>
                  {project.title}
                </p>
              )
            })
            }
            </div>
          </Col>
        </Row>

      </Container>

    </section>
  )
}

export default Projects;