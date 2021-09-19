import React from "react";
import "./ProjectGallery.scss";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectData from "../../data/projectData.json";

const data = [...ProjectData.projet];

const ProjectGallery = () => {
  return (
    <>
      <section className="project-gallery-wrapper">
        <aside className="side-menu-wrapper">
          <ul className="side-menu">
            {data.map((e) => {
              return (
                <a
                  key={e.id}
                  href={`#${e.name}`}
                  className={`side-menu-item ${e.id % 2 === 0 && "gauche"}`}
                >
                  <li>{e.name}</li>
                </a>
              );
            })}
          </ul>
        </aside>
        <div className="project-gallery">
          <h1 className="page-title">Projets</h1>
          {data.map((e) => (
            <ProjectItem
              key={e.id}
              name={e.name}
              date={e.date}
              matiere={e.matiere}
              platform={e.platform}
              language={e.language}
              desc={e.description}
              images={e.images}
              id={e.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;
