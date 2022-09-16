import React from "react";
import ProjectCard from "./ProjectCard";
import depawture from "../docs/depawture.png";
import keen from "../docs/keen.png";
import jungle from "../docs/jungle.png";
import scheduler from "../docs/scheduler.png";
import portfolio from "../docs/portfolio.png";
import betterTweet from "../docs/better-tweet.png";

const Projects = () => {

  const projects = [
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
    },
    {
      title: "Tweeter",
      description: "A single page Twitter clone",
      imgUrl: betterTweet,
      link: 'https://github.com/avacadok/tweeter',
    }
  ];

  return (
    <section className="projects" id="projects">
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