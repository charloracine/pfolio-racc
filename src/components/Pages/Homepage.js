import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import { Body1, TypoH1, TypoH2, TypoHeading } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
import { size } from "../Device/Device";
const Homepage = ({ endroit, setEndroit }) => {
  const { push } = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container dir="column" size={1} pd={0} pdt="1em">
      <Column size="1" dir="column" className="content">
        <TypoH1>DÉVELOPPEUR WEB</TypoH1>
        <Card
          color={
            width >= parseInt(size.laptop) ? "transparent" : colors.halfwhite
          }
          textColor={
            width >= parseInt(size.laptop) ? colors.white : colors.dark
          }
          pd={width >= parseInt(size.laptop) && "0 1em 0 0"}
          className="infos"
        >
          <Column dir="column" size="1">
            {width >= parseInt(size.laptop) ? (
              <TypoHeading fontSize="5em" color={colors.primary}>
                Charles-O.
              </TypoHeading>
            ) : (
              <TypoH2 color={colors.primary}>Charles-O.</TypoH2>
            )}
            <Body1
              color={
                width >= parseInt(size.laptop) ? colors.white : colors.dark
              }
            >
              Je suis étudiant-finissant en Techniques d’intégration multimédia,
              profil logique. Mention DEC+ Ultra.
            </Body1>
            <Body1
              color={
                width >= parseInt(size.laptop) ? colors.white : colors.dark
              }
            >
              (Portfolio en développement.)
            </Body1>
          </Column>
          <Column dir="column" pd="1em 0">
            <Button
              color={colors.comp}
              margin="0 0 0.5em 0"
              onClick={() => {
                push("/portfolio");
                setEndroit("/portfolio");
              }}
            >
              Portfolio
            </Button>
            <ButtonGroup>
              <Button
                size="1"
                outlined
                onClick={() => {
                  push("/about");
                  setEndroit("/about");
                }}
              >
                À propos
              </Button>
              <Button
                size="1"
                outlined
                onClick={() => {
                  push("/contact");
                  setEndroit("/contact");
                }}
              >
                Contacter
              </Button>
            </ButtonGroup>
          </Column>
        </Card>
      </Column>
    </Container>
  );
};

export default Homepage;
