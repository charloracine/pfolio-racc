import React from "react";
import { Column, Container } from "../Container/Container";
import { Bar } from "../AppBar/Bar";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { SideMenu } from "../AppBar/SideMenu";
import { Body1, ListItem, TypoH1, TypoH3 } from "../Typo/Typo";
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
      <Bar className="detail">
        <Column size="1" justify="space-between" className="desktop">
          <Column>
            <LinkWithIcon
              icon="fas fa-times"
              to="/portfolio"
              onClick={() => handleDetail()}
            />
          </Column>
          <Column size={1} justify="space-between" pdr="2em">
            <Column size="1">
              <TypoH3>{nom}</TypoH3>
            </Column>
            <Column>
              <LinkWithIcon
                icon="fas fa-arrow-left"
                to="#"
                pd="0"
                margin="0 0.5em"
                disabled={id <= 0}
                onClick={() => prevProject(id)}
              />
              <TypoH3>
                {id + 1}/{projects.length}
              </TypoH3>
              <LinkWithIcon
                icon="fas fa-arrow-right"
                to="#"
                pd="0 0.5em"
                disabled={id === projects.length - 1}
                onClick={() => nextProject(id)}
              />
            </Column>
          </Column>
        </Column>
      </Bar>
      <Container pdt="2em" pdl="0">
        <Column width="100vw">
          <Card justify="flex-start" pd="2em 1em" className="detail">
            <TypoH1 color={colors.primary}>Cours :</TypoH1>
            <Body1 color={colors.dark}>{cours}</Body1>
            <TypoH1 color={colors.primary}>Résumé :</TypoH1>
            <Body1 color={colors.dark}>{resume}</Body1>
            <TypoH1 color={colors.primary}>
              Logiciels et technologies utilisées :
            </TypoH1>
            {tech.map((value) => (
              <ListItem key={value} color={colors.dark}>
                {value}
              </ListItem>
            ))}
          </Card>
        </Column>
      </Container>
    </SideMenu>
  );
};

export default ProjectDetail;
