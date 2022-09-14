import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = (props) => {
  const {title, description, imgUrl} = props;

  return (
    <Col sm={6} md={4}>
      <div className="project-img">
        <img src="" alt="project-image" />
        <div className="project-content">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;