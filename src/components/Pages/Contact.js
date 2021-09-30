import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Body1, TypoH1, TypoH2 } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
import { size } from "../Device/Device";
const Contact = ({ endroit, setEndroit }) => {
  const { push } = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  const showCv = () => {
    window.open(
      `https://drive.google.com/file/d/1KLg6nmqIXaMoQAMnJQlo0RoOSIZDAKDA/view?usp=sharing`,
      `_blank`
    );
  };

  return (
    <Container dir="column" size={1} pd={0} pdt="1em">
      <Column size="1" dir="column" className="content">
        <TypoH1>CONTACTER</TypoH1>
        <Card
          color={
            width < parseInt(size.laptopL) ? colors.halfwhite : "transparent"
          }
          textColor={
            width >= parseInt(size.laptop) ? colors.white : colors.dark
          }
        >
          <Column dir="column">
            <TypoH2 color={colors.primary}>Adresse électronique</TypoH2>
            <Body1
              color={
                width < parseInt(size.laptopL) ? colors.dark : colors.white
              }
            >
              charles-o.racine@outlook.fr
            </Body1>
          </Column>
          <Column dir="column">
            <TypoH2 color={colors.primary}>Réseaux sociaux</TypoH2>
            <Column align="center" pd="1em">
              <Button
                pd="0"
                fontSize="2rem"
                outlined
                color={colors.comp}
                margin="0 0.5em 0 0"
                onClick={() => showCv()}
              >
                cv
              </Button>
              <LinkWithIcon
                pd="3px 5px"
                fontSize="2em"
                br="10px"
                icon="fab fa-linkedin-in"
                color={colors.primary}
                border="3px solid currentColor"
                to={{
                  pathname:
                    "https://ca.linkedin.com/in/charles-olivier-racine-815655178",
                }}
                target="_blank"
              />
            </Column>
          </Column>
          <ButtonGroup margin="1em 0 0">
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
                push("/about");
                setEndroit("/about");
              }}
            >
              À propos
            </Button>
          </ButtonGroup>
        </Card>
      </Column>
    </Container>
  );
};

export default Contact;
