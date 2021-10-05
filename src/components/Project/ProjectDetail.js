import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import { Bar } from "../AppBar/Bar";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { SideMenu } from "../AppBar/SideMenu";
import { TypoH3, TypoH2, Body1 } from "../Typo/Typo";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";
import { size } from "../Device/Device";
import { colors } from "../Colors/Colors";
import { ListItem } from "../Typo/Typo";

const ProjectDetail = ({
  handleDetail,
  detail,
  projects,
  nextProject,
  prevProject,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });
  const { project } = useParams();

  const myProject = projects.find(
    ({ id: projectId }) => projectId === parseInt(project)
  );

  const { id, nom, images, resume, tech } = myProject;

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
              <Carousel
                color="black"
                showThumbs={width > parseInt(size.tablet)}
                infiniteLoop={true}
              >
                {images.map(({ file, name }) => (
                  <div key={name}>
                    <img
                      src={`/images/${file}`}
                      alt={name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "450px",
                        objectFit: "contain",
                      }}
                    />
                    <p className="legend">{name}</p>
                  </div>
                ))}
              </Carousel>
            </Column>
            <Column dir="column">
              <TypoH2 color="currentColor">Résumé</TypoH2>
              <Body1 color={colors.dark}>{resume}</Body1>
              <TypoH2 margin="0 0 0.5em" color="currentColor">
                Logiciels et technologies
              </TypoH2>
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
