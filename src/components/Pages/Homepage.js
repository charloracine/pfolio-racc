import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import { StackedImage } from "../Image/Image";
import { Body1, TypoH1, TypoH2, TypoHeading } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
import { size } from "../Device/Device";
const Homepage = () => {
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
    <Container dir="column" size={1} pd={0} pdt="1em" pdl="1.5em">
      <Column size="1" dir="column" className="content">
        <TypoH1>DEVELOPPEUR WEB FULL STACK</TypoH1>
        {width < parseInt(size.laptop) && (
          <Column justify="center">
            <StackedImage pd="1em 0" className="invisible">
              <img
                src="/images/Logo.svg"
                alt="Mon logo à moi"
                className="logo"
              />
              <img
                src="/images/maphoto.png"
                alt="Moi sur une roche"
                className="moi"
              />
            </StackedImage>
          </Column>
        )}
        <Card
          color={
            width >= parseInt(size.laptop) ? "transparent" : colors.halfwhite
          }
          pd={width >= parseInt(size.laptop) && "0 1em 0 0"}
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
            <Body1>(Portfolio en développement.)</Body1>
          </Column>
          <Column dir="column" pd="1em 0">
            <Button
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
          </Column>
        </Card>
      </Column>
      {width >= parseInt(size.laptop) && (
        <Column justify="flex-end" size="1">
          <StackedImage pd="1em 0" className="desktop invisible">
            <img src="/images/Logo.svg" alt="Mon logo à moi" className="logo" />
            <img
              src="/images/maphoto.png"
              alt="Moi sur une roche"
              className="moi desktop"
            />
          </StackedImage>
        </Column>
      )}
    </Container>
  );
};

export default Homepage;
