import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./ProjectItem.scss";
import Script from "./superNova.js";

const ProjectItem = ({ name, date, platform, language, desc, images, id }) => {

  return (
    <article className={`project-wrapper ${id % 2 === 0 && "pair"}`} id={name}>
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
          <SyntaxHighlighter
            language={language}
            style={a11yDark}
          >
            {Script}
          </SyntaxHighlighter>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
