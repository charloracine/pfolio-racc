import React from "react";
import { Card } from "../Card/Card";
import {  DoubleListItem, TypoH2 } from "../Typo/Typo";
import { colors } from "../Colors/Colors";
import { Button, ButtonGroup } from "../Button/Button";
import { Column } from "../Container/Container";
import { useRouteMatch, useHistory } from "react-router";

const Project = ({
  id,
  nom,
  cours,
  images,
  detail,
  script,
  showCode,
  code,
}) => {
  const { push } = useHistory();
  const { path } = useRouteMatch();

  return (
    <Card
      margin="0 0 1em 0"
      textColor={id % 2 === 0 ? colors.primary : colors.comp}
    >
      <Column dir="column" size="1">
        <DoubleListItem>
          <TypoH2 color="currentColor">{nom}</TypoH2>
          <TypoH2 color={colors.dark}>{cours}</TypoH2>
        </DoubleListItem>
        <Column justify="center">
          <img
            src={`/images/${images[0].file}`}
            alt={images[0].name}
            style={{
              maxWidth: "100%",
              margin: "0.5em 0",
              objectFit: "contain",
            }}
          />
        </Column>
      </Column>
      <Column margin="1em 0 0">
        <ButtonGroup>
          <Button
            size="2"
            color="currentColor"
            outlined
            onClick={() => {
              detail();
              push(`${path}/${id}`);
            }}
          >
            Voir plus
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
