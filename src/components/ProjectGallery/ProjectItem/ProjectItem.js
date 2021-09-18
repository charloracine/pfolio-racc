import React from "react";
import "./ProjectItem.scss";

const ProjectItem = ({ name, date, platform, language, desc, images }) => {
  return (
    <article className="project-wrapper">
      <div className="project-placeholder">
        <div className="project-info">
          <strong className="project-title">{name}</strong>
          <div className="extra-info">
            <p>{platform}</p>
            <p>{language}</p>
            <p>{date}</p>
          </div>
          <p className="project-description">{desc}</p>
        </div>
        <div className="project-img">
          <img src={images.show.web} alt={images.show.alt} />
        </div>
        <div className="project-code">
          <img src={images.prog.web} alt={images.prog.alt} />
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
