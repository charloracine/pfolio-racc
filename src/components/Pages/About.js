import React from "react";
import { Column, Container } from "../Container/Container";
import { StackedImage } from "../Image/Image";
import { Body1, TypoH1, TypoH2 } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
const About = () => {
  const { push } = useHistory();

  return (
    <Container dir="column" size={1} pd={0} pdt="1em">
      <Column size="1" dir="column">
        <TypoH1>À PROPOS</TypoH1>
        <Card>
          <Column dir="column" pdt="0.5em">
            <TypoH2 color={colors.primary}>Titre de l'enonce</TypoH2>
            <Body1 color={colors.dark}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quo alias obcaecati unde, amet nemo neque nobis dignissimos quae
              odio tempora id, autem nam laboriosam pariatur asperiores quod
              aliquid nisi.
            </Body1>
          </Column>
          <Column dir="column" pdt="0.5em">
            <TypoH2 color={colors.primary}>Titre de l'enonce</TypoH2>
            <Body1 color={colors.dark}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quo alias obcaecati unde, amet nemo neque nobis dignissimos quae
              odio tempora id, autem nam laboriosam pariatur asperiores quod
              aliquid nisi.
            </Body1>
          </Column>
          <ButtonGroup>
            <Button
              size="1"
              color={colors.comp}
              margin="0 0 0.5em 0"
              onClick={() => push("/portfolio")}
            >
              Portfolio
            </Button>
            <Button size="1" outlined onClick={() => push("/contact")}>
              Contacter
            </Button>
          </ButtonGroup>
        </Card>
      </Column>
    </Container>
  );
};

export default About;
