import React from "react";
import { Parallax } from "react-scroll-parallax";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useWindowDimensions from "../../WindowDimensionsHook/useWindowDimensions";
import "./ProjectItem.scss";
import Script from "./superNova.js";

const ProjectItem = ({ name, date, matiere, platform, language, desc, images, id }) => {
  const { width } = useWindowDimensions();

  return (
    <div id={name}>
      <Parallax
        className={`project-wrapper ${id % 2 === 0 && "pair"}`}
        y={[20, -20]}
        disabled={width < 1580}
      >
        <div className="project-placeholder">
          <div className="project-info">
            <strong className="project-title">{name}</strong>
            <div className="extra-info">
              <p>{matiere}</p>
              <p>{platform}</p>
              <p>{language}</p>
              <p>{date}</p>
            </div>
            <p className="project-description">{desc}</p>
          </div>
          <Parallax
            className="project-img"
            y={[-60, 60]}
            x={[20, 0]}
            disabled={width < 1580}
          >
            <img src={images.show.web} alt={images.show.alt} />
          </Parallax>
          <div className="project-code">
            <SyntaxHighlighter language={language} style={a11yDark}>
              {Script}
            </SyntaxHighlighter>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ProjectItem;
