import React, { useState } from "react";
import { Column, Container } from "../Container/Container";
import { StyledLink } from "../Link/Link";
import LinkWithIcon from "../Link/LinkWithIcon";
import { Card } from "../Card/Card";
import { TypoH1 } from "../Typo/Typo";
import { Bar } from "./Bar";
import { SideMenu } from "./SideMenu";
import { colors } from "../Colors/Colors";
import { size } from "../Device/Device";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { usePathname } from "../../hooks/usePathname";

const AppBar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const { width } = useWindowSize();
  const { path: endroit } = usePathname();

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
                  }}
                >
                  Accueil
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/portfolio"
                  onClick={() => {
                    handleMenu();
                  }}
                >
                  Portfolio
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/about"
                  onClick={() => {
                    handleMenu();
                  }}
                >
                  À propos
                </StyledLink>
                <StyledLink
                  color={colors.primary}
                  to="/contact"
                  onClick={() => {
                    handleMenu();
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
                <Link to="/homepage">Charles-Olivier Racine</Link>
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
              >
                Portfolio
              </StyledLink>
              <StyledLink
                className={
                  endroit === "/about" ? "desktop selected" : "desktop"
                }
                color={colors.white}
                to="/about"
              >
                À propos
              </StyledLink>
              <StyledLink
                className={
                  endroit === "/contact" ? "desktop selected" : "desktop"
                }
                color={colors.white}
                to="/contact"
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
              <LinkWithIcon
                margin="0 0 0 0.5em"
                pd="3px 5px"
                fontSize="2em"
                br="10px"
                icon="fab fa-github"
                color={colors.white}
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
        )}
      </Bar>
    </>
  );
};

export default AppBar;
