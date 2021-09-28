import React from "react";
import { Column, Container } from "../Container/Container";
import { StackedImage } from "../Image/Image";
import { Body1, TypoH1, TypoH2 } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
const Homepage = () => {
  const { push } = useHistory();

  return (
    <Container dir="column" size={1} pd={0} pdt="1em">
      <Column size="1" dir="column">
        <TypoH1>DEVELOPPEUR WEB FRONTEND</TypoH1>
        <Column justify="center">
          <StackedImage pd="1em 0" className="invisible">
            <img src="/images/Logo.svg" alt="Mon logo à moi" className="logo" />
            <img
              src="/images/maphoto.png"
              alt="Moi sur une roche"
              className="moi"
            />
          </StackedImage>
        </Column>
        <Card>
          <TypoH2 color={colors.primary}>Charles-O.</TypoH2>
          <Body1 color={colors.dark}>
            Je suis étudiant finissant en Techniques d’intégration multimédia,
            profil logique. Mention DEC+ Ultra.
          </Body1>
          <Button
            size="1"
            color={colors.comp}
            margin="0 0 0.5em 0"
            onClick={() => push("/portfolio")}
          >
            Portfolio
          </Button>
          <ButtonGroup>
            <Button size="1" outlined onClick={() => push("/about")}>
              À propos
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

export default Homepage;
