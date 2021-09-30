import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../Colors/Colors";

export const LinkIcon = styled(Link)`
  border-radius: 5em;
  border-radius: ${(props) => props.br};
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  z-index: 30;
  font-size: 2rem;
  white-space: nowrap;
  padding-right: 1em;
  padding-top: 0.5em;
  border-bottom: 3px solid currentColor;
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${colors.halfwhite};
  }
  &.desktop {
    font-size: 1.5rem;
    color: ${colors.white};
    border: none;
    font-weight: 700;
    padding: 0;
    margin: 0 10px;
    display: block;
    position: relative;
    &::after {
      content: "";
      background: ${colors.dp};
      mix-blend-mode: color;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      width: calc(100% + 20px);
      height: 0;
      position: absolute;
      top: -22px;
      left: -10px;
      transition: all 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &:hover::after,
    &.selected::after {
      height: calc(100% + 34px);
    }
  }
`;
