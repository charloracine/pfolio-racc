import React, { useEffect, useState } from "react";
import { Column, Container } from "../Container/Container";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Body1, TypoH1, TypoH2 } from "../Typo/Typo";
import { Card } from "../Card/Card";
import { colors } from "../Colors/Colors";
import { ButtonGroup, Button } from "../Button/Button";
import { useHistory } from "react-router";
import { size } from "../Device/Device";
import { Link } from "react-router-dom";
const Contact = ({ setEndroit }) => {
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
        <TypoH1>CONTACTER</TypoH1>
        <Card
          color={
            width < parseInt(size.laptopL) ? colors.halfwhite : "transparent"
          }
          textColor={
            width >= parseInt(size.laptop) ? colors.white : colors.dark
          }
          className="infos"
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
              <LinkWithIcon
                margin="0 0 0 0.5em"
                pd="3px 5px"
                fontSize="2em"
                br="10px"
                icon="fab fa-github"
                color={colors.primary}
                border="3px solid currentColor"
                to={{
                  pathname: "https://github.com/charloracine",
                }}
                target="_blank"
              />
              <Link
                style={{
                  display: "flex",
                  textDecoration: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "1em",
                }}
                to="/Charles-Olivier_Racine_CV.pdf"
                target="_blank"
                download
              >
                <span
                  style={{
                    border: "3px solid #C12024",
                    borderRadius: "10px",
                    fontSize: "1.5rem",
                    fontWeight: "900",
                    padding: "5px",
                    color: "#C12024",
                  }}
                >
                  CV
                </span>
              </Link>
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
