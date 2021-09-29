import React, { useState, useEffect } from "react";
import { Column, Container } from "../Container/Container";
import { StyledLink } from "../Link/Link";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { TypoH1 } from "../Typo/Typo";
import { Bar } from "./Bar";
import { SideMenu } from "./SideMenu";
import { colors } from "../Colors/Colors";
import { Button } from "../Button/Button";
import { size } from "../Device/Device";
import { Link } from "react-router-dom";

const AppBar = () => {
  const [sidemenu, setSidemenu] = useState(false);
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

  const handleMenu = () => {
    return setSidemenu(!sidemenu);
  };

  return (
    <>
      {width < parseInt(size.laptop) ? (
        <SideMenu className={sidemenu ? "sidemenu" : "sidemenu closed"}>
          <Bar primary>
            <Column>
              <LinkWithIcon
                icon="fas fa-times"
                to="#"
                onClick={() => handleMenu()}
              />
            </Column>
            <Column size={1} justify="space-between" pdr="2em">
              <TypoH1>Vos accès</TypoH1>
            </Column>
          </Bar>
          <Container pdt="2em" pdl="0">
            <Column width="100vw">
              <Card justify="flex-start" pd="2em 1em">
                <StyledLink
                  color={colors.secondary}
                  to="/homepage"
                  onClick={() => handleMenu()}
                >
                  Accueil
                </StyledLink>
                <StyledLink
                  color={colors.secondary}
                  to="/portfolio"
                  onClick={() => handleMenu()}
                >
                  Portfolio
                </StyledLink>
                <StyledLink
                  color={colors.secondary}
                  to="/about"
                  onClick={() => handleMenu()}
                >
                  À propos
                </StyledLink>
                <StyledLink
                  color={colors.secondary}
                  to="/contact"
                  onClick={() => handleMenu()}
                >
                  Contacter
                </StyledLink>
                <Column align="center" pdt="1em">
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
              </Card>
            </Column>
          </Container>
        </SideMenu>
      ) : (
        "allo"
      )}
      <Bar>
        {width < parseInt(size.laptop) ? (
          <>
            <Column>
              <LinkWithIcon
                icon="fas fa-bars"
                to="#"
                onClick={() => handleMenu()}
              />
            </Column>
            <Column size={1} justify="space-between" pdr="2em">
              <TypoH1>
                <Link to="/homepage">Charles-Olivier Racine</Link>
              </TypoH1>
            </Column>
          </>
        ) : (
          <Column size={1} dir="row">
            <Column size={1} align="center" pdl="1.5em">
              <StyledLink className="desktop" to="/homepage">
                <img
                  src="/images/Logo.svg"
                  alt="mon logo"
                  style={{ width: "1em", filter: "grayscale(1)" }}
                />
              </StyledLink>
              <TypoH1 margin="0 1em">
                <Link to="/homepage">Charles-Olivier Racine</Link>
              </TypoH1>
            </Column>
            <Column size={3} align="center" pdr="2em" justify="center">
              <StyledLink className="desktop" to="/homepage">
                Accueil
              </StyledLink>
              <StyledLink
                className="desktop"
                color={colors.white}
                to="/portfolio"
              >
                Portfolio
              </StyledLink>
              <StyledLink className="desktop" color={colors.white} to="/about">
                À propos
              </StyledLink>
              <StyledLink
                className="desktop"
                color={colors.white}
                to="/contact"
              >
                Contacter
              </StyledLink>
            </Column>
            <Column size={1} pdr="2.5em" justify="flex-end">
              <Button
                pd="0"
                fontSize="2rem"
                outlined
                color={colors.comp}
                margin="0.5em 0.5em"
                onClick={() => showCv()}
              >
                cv
              </Button>
              <LinkWithIcon
                pd="3px 5px"
                fontSize="2em"
                br="10px"
                icon="fab fa-linkedin-in"
                color={colors.white}
                border="3px solid currentColor"
                to={{
                  pathname:
                    "https://ca.linkedin.com/in/charles-olivier-racine-815655178",
                }}
                target="_blank"
              />
            </Column>
          </Column>
        )}
      </Bar>
    </>
  );
};

export default AppBar;
