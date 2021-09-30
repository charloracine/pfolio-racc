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

const AppBar = ({ endroit, setEndroit }) => {
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
      {width < parseInt(size.laptop) && (
        <SideMenu className={sidemenu ? "sidemenu" : "sidemenu closed"}>
          <Bar>
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
                  color={colors.primary}
                  to="/homepage"
                  onClick={() => {
                    handleMenu();
                    setEndroit("/homepage");
                  }}
                >
                  Accueil
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/portfolio"
                  onClick={() => {
                    handleMenu();
                    setEndroit("/portfolio");
                  }}
                >
                  Portfolio
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/about"
                  onClick={() => {
                    handleMenu();
                    setEndroit("/about");
                  }}
                >
                  À propos
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/contact"
                  onClick={() => {
                    handleMenu();
                    setEndroit("/contact");
                  }}
                >
                  Contacter
                </StyledLink>
                <Column align="center" pdt="1em">
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
                  <Button
                    pd="0"
                    fontSize="2rem"
                    outlined
                    color={colors.comp}
                    margin="0 0 0 0.5em"
                    onClick={() => showCv()}
                  >
                    cv
                  </Button>
                </Column>
              </Card>
            </Column>
          </Container>
        </SideMenu>
      )}
      <Bar className="main-bar">
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
                <Link to="/homepage" onClick={() => setEndroit("/homepage")}>
                  Charles-Olivier Racine
                </Link>
              </TypoH1>
            </Column>
          </>
        ) : (
          <Column size={1} dir="row" className="main-bar">
            <Column size={1} align="center">
              <StyledLink
                to="/homepage"
                className={
                  endroit === "/homepage" ? "desktop selected" : "desktop"
                }
                onClick={() => setEndroit("/homepage")}
              >
                Charles-Olivier Racine
              </StyledLink>
            </Column>
            <Column size={3} align="center" pdr="2em" justify="center">
              <StyledLink
                className={
                  endroit === "/portfolio" ? "desktop selected" : "desktop"
                }
                color={colors.white}
                to="/portfolio"
                onClick={() => setEndroit("/portfolio")}
              >
                Portfolio
              </StyledLink>
              <StyledLink
                className={
                  endroit === "/about" ? "desktop selected" : "desktop"
                }
                color={colors.white}
                to="/about"
                onClick={() => setEndroit("/about")}
              >
                À propos
              </StyledLink>
              <StyledLink
                className={
                  endroit === "/contact" ? "desktop selected" : "desktop"
                }
                color={colors.white}
                to="/contact"
                onClick={() => setEndroit("/contact")}
              >
                Contacter
              </StyledLink>
            </Column>
            <Column size={1} pdr="2.5em" justify="flex-end">
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
            </Column>
          </Column>
        )}
      </Bar>
    </>
  );
};

export default AppBar;
