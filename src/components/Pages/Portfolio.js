import React, { useState, useEffect } from "react";
import { Column, Container } from "../Container/Container";
import { TypoH1 } from "../Typo/Typo";
import Project from "../Project/Project";
import ProjectDetail from "../Project/ProjectDetail";
import { useRouteMatch, Route, useHistory } from "react-router-dom";
import { size } from "../Device/Device";

const Portfolio = ({ projects }) => {
  const [detail, setDetail] = useState(false);
  const { push } = useHistory();
  const { path } = useRouteMatch();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  const handleDetail = () => {
    return setDetail(!detail);
  };
  const nextProject = (id) => {
    const newId = id + 1;
    if (newId >= projects.length) {
      return null;
    } else {
      push(`${path}/${newId}`);
    }
  };
  const prevProject = (id) => {
    const newId = id - 1;
    if (newId < 0) {
      return null;
    } else {
      push(`${path}/${newId}`);
    }
  };

  return (
    <>
      <Route path={`${path}/:project`}>
        <ProjectDetail
          detail={detail}
          handleDetail={handleDetail}
          projects={projects}
          nextProject={nextProject}
          prevProject={prevProject}
        />
      </Route>
      <Container dir="column" size={1} pd={0} pdt="1em">
        <Column size="1" dir="column" className="content">
          <TypoH1>PORTFOLIO</TypoH1>
          <Column
            dir={width < parseInt(size.laptopL) ? "column" : "row"}
            wrap="wrap"
          >
            {projects.map(({ id, nom, cours, resume, tech, image }) => (
              <Project
                key={id}
                id={id}
                nom={nom}
                cours={cours}
                resume={resume}
                tech={tech}
                image={image}
                detail={() => handleDetail()}
              />
            ))}
          </Column>
        </Column>
      </Container>
    </>
  );
};

export default Portfolio;
