import React from "react";
import ProjectCard from "./ProjectCard";
import depawture from "../docs/depawture.png";
import keen from "../docs/keen.png";
import jungle from "../docs/jungle.png";
import scheduler from "../docs/scheduler.png";
import portfolio from "../docs/portfolio.png";
import netflix from "../docs/netflix.png";

const Projects = () => {

  const projects = [
    {
      title: "Netflix Clone",
      description: "Netflix clone built with React, Redux and Firebase",
      imgUrl: netflix,
      link: 'https://github.com/avacadok/netflix-clone',
    },
    {
      title: "Personal Portfolio",
      description: "A simple, one page personal portfolio website",
      imgUrl: portfolio,
      link: 'https://github.com/avacadok/avacadok-portfolio',
    },
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
      description: "An app that allows users to book, edit and cancell interviews",
      imgUrl: scheduler,
      link: 'https://github.com/avacadok/scheduler',
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p>Built with love</p>
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