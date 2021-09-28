import React from "react";
import { Card } from "../Card/Card";
import { StackedImage } from "../Image/Image";
import { Body1, DoubleListItem, ListItem, TypoH2 } from "../Typo/Typo";
import { colors } from "../Colors/Colors";
import { Button } from "../Button/Button";
import { Column } from "../Container/Container";
import { useRouteMatch, useHistory } from "react-router";

const Project = ({ id, nom, cours, resume, tech, image, detail }) => {
  const { push } = useHistory();
  const { path } = useRouteMatch();

  return (
    <Card
      margin="0 0 1em 0"
      textColor={id % 2 === 0 ? colors.primary : colors.comp}
    >
      <DoubleListItem>
        <TypoH2 color="currentColor">{nom}</TypoH2>
        <TypoH2 color={colors.dark}>{cours}</TypoH2>
      </DoubleListItem>
      <Column justify="center">
        <StackedImage>
          <img src={image} alt="" className="moi" />
        </StackedImage>
      </Column>
      <TypoH2 color="currentColor">Résumé</TypoH2>
      <Body1 color={colors.dark}>{resume}</Body1>
      <TypoH2 color="currentColor">Logiciels et technologies</TypoH2>
      {tech.map((value) => (
        <ListItem key={value} color={colors.dark}>
          {value}
        </ListItem>
      ))}
      <Button
        size="1"
        color={colors.secondary}
        margin="1em 0 0"
        outlined
        onClick={() => {
          detail();
          push(`${path}/${id}`);
        }}
      >
        Voir plus
      </Button>
    </Card>
  );
};

export default Project;
