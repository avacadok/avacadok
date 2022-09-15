import React from "react";


const ProjectCard = (props) => {
  const { title, description, imgUrl } = props;

  return (
    <>
      <li className="cards__item">
        <div className='cards__item__link'>

        <figure className='cards__item__pic-wrap' data-category={title}>
          <img src={imgUrl} alt="project-pic" className="cards__item__img"/>
        </figure>

        <div className="cards__item__info">
          <h3 className="cards__item__text">
            {description}
          </h3>

        </div>
        </div>
      </li>

    </>
  )
}

export default ProjectCard;