import React from "react";
import "./ProjectGallery.scss";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectData from "../../data/projectData.json";

const data = [...ProjectData.projet];

const ProjectGallery = () => {
  return (
    <section className="project-gallery-wrapper">
      {data.map((e) => (
        <ProjectItem
          key={e.id}
          name={e.name}
          date={e.date}
          platform={e.platform}
          language={e.language}
          desc={e.description}
          images={e.images}
        />
      ))}
    </section>
  );
};

export default ProjectGallery;
