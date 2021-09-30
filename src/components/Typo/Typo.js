import styled, { css } from "styled-components";
import { colors } from "../Colors/Colors";
import device from "../Device/Device";

export const TypoError = styled.p`
  font-size: 0.5rem;
  margin: 0;
  color: ${colors.secondary};
`;

export const TypoHeading = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  margin: 0.5em 0 0.25em;
  color: ${colors.white};
  color: ${(props) => props.color};
`;

export const TypoH1 = styled.h1`
  font-weight: 800;
  line-height: 1.5rem;
  font-size: 1.2rem;
  margin: ${(props) => props.margin};
  color: ${colors.white};
  color: ${(props) => props.color};
  & > a {
    text-decoration: none;
    color: currentColor;
    white-space: nowrap;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;
export const TypoH3 = styled.h1`
  font-weight: 800;
  line-height: 1.5rem;
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${colors.white};
  color: ${(props) => props.color};
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;
export const TypoH2 = styled.h1`
  font-weight: 800;
  line-height: 1.5rem;
  font-size: 1.2rem;
  margin: 0;
  margin: ${(props) => props.margin};
  color: ${colors.white};
  color: ${(props) => props.color};
`;

export const Body1 = styled.p`
  font-weight: 300;
  font-size: 1rem;
  text-indent: 1em;
  font-family: "Merriweather", serif;
  margin: 0em 0 1em 0;
  color: ${colors.white};
  color: ${(props) => props.color};
`;
export const ListItem = styled.li`
  font-weight: 300;
  list-style-type: none;
  font-family: "Merriweather", serif;
  text-indent: 1em;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: ${colors.white};
  color: ${(props) => props.color};
`;

export const DoubleListItem = styled.span`
  display: flex;
  justify-content: space-between;
  color: currentColor;
  &.black {
    background-color: ${colors.dark};
    color: ${colors.white};
  }
`;

export const Icon = styled.i`
  color: ${colors.white};
  color: ${(props) => props.color};
  font-size: 1.5em;
  font-size: ${(props) => props.fontSize};
  padding: 0.5em;
  padding: ${(props) => props.pd};
  margin: ${(props) => props.margin};
  border-radius: 5em;
  border-radius: ${(props) => props.br};
  border: ${(props) => props.border};
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;
