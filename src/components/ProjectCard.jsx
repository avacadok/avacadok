import React from "react";

const ProjectCard = (props) => {
  const { title, description, imgUrl, link } = props;

  return (
    <>
      <div className='project-item'>

        <a href={link} className='project-pic-wrap' 
        target={'_blank'}
        data-category={title}>
          <img src={imgUrl} alt="project-pic" className="project-pic" />
        </a>

        <div className="project-info">
          <h3 className="project-text">
            {description}
          </h3>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;