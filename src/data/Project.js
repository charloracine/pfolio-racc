export const project = `
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Body1, DoubleListItem, ListItem, TypoH2 } from "../Typo/Typo";
import { colors } from "../Colors/Colors";
import { Button, ButtonGroup } from "../Button/Button";
import { Column } from "../Container/Container";
import { useRouteMatch, useHistory } from "react-router";
import { size } from "../Device/Device";


{/*La composante project*/}
const Project = ({
  id,
  nom,
  cours,
  resume,
  tech,
  images,
  detail,
  script,
  showCode,
  code,
}) => {
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

  return (
    <Card
      margin={width < size.laptop ? "0 0 1em 0" : "0 1.5em 1.5em 0"}
      textColor={id % 2 === 0 ? colors.primary : colors.comp}
    >
      <Column dir="column" size="1">
        <DoubleListItem>
          <TypoH2 color="currentColor">{nom}</TypoH2>
          <TypoH2 color={colors.dark}>{cours}</TypoH2>
        </DoubleListItem>
        <Column justify="center">
          <img
            src={\`/images/images[0].file\`}
            alt={images[0].name}
            style={{
              maxWidth: "100%",
              margin: "0.5em 0",
              objectFit: "contain",
            }}
          />
        </Column>
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
      <Column margin="1em 0 0">
        <ButtonGroup>
          <Button
            size="2"
            color="currentColor"
            outlined
            onClick={() => {
              detail();
              push(\`path/id\`);
            }}
          >
            Photos
          </Button>
          <Button
            size="1"
            color={colors.comp}
            disabled={script === null}
            onClick={() => {
              showCode(id);
              code();
            }}
          >
            Code
          </Button>
        </ButtonGroup>
      </Column>
    </Card>
  );
};

export default Project;

`;
