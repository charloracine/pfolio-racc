import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import { Body1, TypoH1, TypoH2 } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
import { size } from "../Device/Device";
const About = ({ endroit, setEndroit }) => {
  const { push } = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container dir="column" size={1} pd={0} pdt="1em">
      <Column size="1" dir="column" className="content">
        <TypoH1>À PROPOS</TypoH1>
        <Card
          color={
            width < parseInt(size.laptopL) ? colors.halfwhite : "transparent"
          }
          textColor={
            width >= parseInt(size.laptop) ? colors.white : colors.dark
          }
        >
          <Column dir="column">
            <TypoH2 color={colors.primary}>Ce que je suis...</TypoH2>
            <Body1
              color={
                width < parseInt(size.laptopL) ? colors.dark : colors.white
              }
            >
              Jeune avec beaucoup de potentiel. Hyper polyvalent, j'adore apprendre et acquérir de l'expérience. La résolution de problème c'est mon « flow ». Je suis quelqu'un de fiable, optimiste et assidu. Je ne laisse tomber personne.
            </Body1>
          </Column>
          <Column dir="column" pdt="0.5em">
            <TypoH2 color={colors.primary}>Ce que je veux...</TypoH2>
            <Body1
              color={
                width < parseInt(size.laptopL) ? colors.dark : colors.white
              }
            >
              Une équipe avec laquelle je pourrais partager de belles valeurs. Un emploi flexible, un milieu en pleine croissance. Le juste équilibre entre la vie et le travail.
            </Body1>
          </Column>
          <ButtonGroup>
            <Button
              size="1"
              color={colors.comp}
              margin="0 0 0.5em 0"
              onClick={() => {
                push("/portfolio");
                setEndroit("/portfolio");
              }}
            >
              Portfolio
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
        </Card>
      </Column>
    </Container>
  );
};

export default About;
