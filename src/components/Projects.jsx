import React from "react";
import ProjectCard from "./ProjectCard";
import depawture from "../docs/depawture.png";
import keen from "../docs/keen.png";
import jungle from "../docs/jungle.png";
import scheduler from "../docs/scheduler.png";

const Projects = () => {

  const projects = [
    {
      title: "Depawture",
      description: "An ecommerce store that display pet travel related products",
      imgUrl: depawture,
      link: 'https://github.com/avacadok/departure',
    },
    {
      title: "Keen Dating",
      description: "An online dating apps that helps users to find the one",
      imgUrl: keen,
      link: 'https://github.com/avacadok/Keen-Dating-App',
    },
    {
      title: "Jungle",
      description: "An ecommerce store that allows users to purchase a variety of beautiful plants.",
      imgUrl: jungle,
      link: 'https://github.com/avacadok/jungle-rails',
    },
    {
      title: "Scheduler",
      description: "An app that allows booking, editing and cancelling an interview",
      imgUrl: scheduler,
      link: 'https://github.com/avacadok/scheduler',
    }
    // {
    //   title: "Happy Eats",
    //   description: "A food ordering app that users can order items online and pick-up in store",
    //   imgUrl: "",
    //   link: '',
    // }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur quis illum fugiat excepturi non ullam enim eaque libero nobis, quos optio distinctio autem laboriosam?</p>
      <div className="projects-container">
        <div className="projects-wrapper">
          {projects.map((project, index) => {
              return (
                <ProjectCard 
                key={index}
                {...project}
                />
              )
            })
            }
        </div>
      </div>
    </section>
  )
}

export default Projects;