import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import depawture from "../docs/depawture.png";
import keen from "../docs/keen.png"
import jungle from "../docs/jungle.png"
import scheduler from "../docs/scheduler.png"

const Projects = () => {

  const projects = [
    {
      title: "Depawture",
      description: "An ecommerce store that display pet travel related products",
      imgUrl: depawture,
    },
    {
      title: "Keen Dating",
      description: "An online dating apps that helps users to find the one",
      imgUrl: keen,
    },
    {
      title: "Jungle",
      description: "An ecommerce store that allows users to purchase a variety of beautiful plants.",
      imgUrl: jungle,
    },
    {
      title: "Scheduler",
      description: "An app that allows booking, editing and cancelling an interview",
      imgUrl: scheduler,
    }
    // {
    //   title: "Happy Eats",
    //   description: "A food ordering app that users can order items online and pick-up in store",
    //   imgUrl: "",
    // }
  ];

  return (
    <section className="cards">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur quis illum fugiat excepturi non ullam enim eaque libero nobis, quos optio distinctio autem laboriosam?</p>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="project-display">
          {projects.map((project, index) => {
              return (
                <ProjectCard 
                key={index}
                {...project}
                />
              )
            })
            }
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects;

{/* <div className="project-display">{projects.map((project, index) => {
              return (
                <ProjectCard 
                key={index}
                {...project}
                />
              )
            })
            }
            </div> */}