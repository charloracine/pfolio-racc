import React from "react";
import { Column, Container } from "../Container/Container";
import { Bar } from "../AppBar/Bar";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { SideMenu } from "../AppBar/SideMenu";
import { TypoH1 } from "../Typo/Typo";
import { useParams } from "react-router";

const ProjectDetail = ({
  handleDetail,
  detail,
  projects,
  nextProject,
  prevProject,
}) => {
  const { project } = useParams();

  const myProject = projects.find(
    ({ id: projectId }) => projectId === parseInt(project)
  );

  const { id, nom, cours, resume, tech } = myProject;
  return (
    <SideMenu className={detail ? "detail detail-open" : "detail"}>
      <Bar primary>
        <Column size={1}>
          <LinkWithIcon
            icon="fas fa-times"
            to="/portfolio"
            onClick={() => handleDetail()}
          />
        </Column>
        <Column size={5} justify="space-between" pdr="2em">
          <TypoH1>{nom}</TypoH1>
          <Column>
            <LinkWithIcon
              icon="fas fa-arrow-left"
              to="#"
              disabled={id <= 0}
              onClick={() => prevProject(id)}
            />
            <TypoH1>
              {id + 1} / {projects.length}
            </TypoH1>
            <LinkWithIcon
              icon="fas fa-arrow-right"
              to="#"
              disabled={id === projects.length - 1}
              onClick={() => nextProject(id)}
            />
          </Column>
        </Column>
      </Bar>
      <Container pdt="2em" pdl="0">
        <Column width="100vw">
          <Card
            justify="flex-start"
            pd="2em 1em"
          ></Card>
        </Column>
      </Container>
    </SideMenu>
  );
};

export default ProjectDetail;
