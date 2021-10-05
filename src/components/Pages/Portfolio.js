import React, { useState } from "react";
import { Column, Container } from "../Container/Container";
import { TypoH1 } from "../Typo/Typo";
import Project from "../Project/Project";
import ProjectDetail from "../Project/ProjectDetail";
import { useRouteMatch, Route, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCode from "../Project/ProjectCode";

const Portfolio = ({ projects }) => {
  const [detail, setDetail] = useState(false);
  const { push } = useHistory();
  const { path } = useRouteMatch();
  const [code, setCode] = useState(false);
  const [codeId, setCodeId] = useState(0);

  const handleCode = () => {
    return setCode(!code);
  };

  const handleDetail = () => {
    return setDetail(!detail);
  };

  const showCode = (id) => {
    return setCodeId(id);
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
      {code && (
        <ProjectCode
          projects={projects}
          codeId={codeId}
          code={() => handleCode()}
        />
      )}
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
            dir="column"
          >
            {projects.map(
              ({ id, nom, cours, images, script }) => (
                <Project
                  key={id}
                  id={id}
                  nom={nom}
                  cours={cours}
                  images={images}
                  script={script}
                  detail={() => handleDetail()}
                  showCode={showCode}
                  code={() => handleCode()}
                />
              )
            )}
          </Column>
        </Column>
      </Container>
    </>
  );
};

export default Portfolio;
