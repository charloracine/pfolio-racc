import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
 to {
    background: rgba(20,20,20,0.3);
  }
`;

export const LinkIcon = styled(Link)`
  border-radius: 5em;
  border-radius: ${(props) => props.br};
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  &:focus {
    animation: ${pulseAnimation} 500ms linear;
  }
`;

export const StyledLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  font-size: 2rem;
  padding-right: 1em;
  padding-top: 0.5em;
  margin: ${(props) => props.margin};
  border-bottom: 3px solid currentColor;
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(20, 20, 20, 0.1);
  }
`;
