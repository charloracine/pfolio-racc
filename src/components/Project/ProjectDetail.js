import React from "react";
import { Column, Container } from "../Container/Container";
import { Bar } from "../AppBar/Bar";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { SideMenu } from "../AppBar/SideMenu";
import { Body1, ListItem, TypoH1, TypoH3 } from "../Typo/Typo";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";

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

  const { id, nom, cours, resume, tech, images } = myProject;

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
          <Card
            justify="flex-start"
            pd="4em 0.5em"
            className="detail"
            overflowY="scroll"
          >
            <Column>
              {/* DOIT REVENIR A 0 LORSQUE CAHNGE PROJET, OVERFFLOW X EN MOBILE*/}
              <Carousel color="black" showThumbs={false}>
                {images.map(({ file, name }) => (
                  <div>
                    <img
                      src={`/images/${file}`}
                      alt={name}
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                    <p className="legend">{name}</p>
                  </div>
                ))}
              </Carousel>
            </Column>
            <Column dir="column" size="1">
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
            </Column>
          </Card>
        </Column>
      </Container>
    </SideMenu>
  );
};

export default ProjectDetail;
