import React, { useState } from "react";
import { Column, Container } from "../Container/Container";
import { StyledLink } from "../Link/Link";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { TypoH1 } from "../Typo/Typo";
import { Bar } from "./Bar";
import { SideMenu } from "./SideMenu";
import { colors } from "../Colors/Colors";
import { Button } from "../Button/Button";

const AppBar = () => {
  const [sidemenu, setSidemenu] = useState(false);

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
      <SideMenu className={sidemenu ? "" : "closed"}>
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
      <Bar>
        <Column>
          <LinkWithIcon
            icon="fas fa-bars"
            to="#"
            onClick={() => handleMenu()}
          />
        </Column>
        <Column size={1} justify="space-between" pdr="2em">
          <TypoH1>Charles-Olivier Racine</TypoH1>
        </Column>
      </Bar>
    </>
  );
};

export default AppBar;
