import styled, { css } from "styled-components";
import { colors } from "../Colors/Colors";


export const StyledInput = styled.input`
  ${(props) =>
    props.type === "text" &&
    css`
      display: block;
      box-sizing: border-box;
      width: 100%;
      border: 3px solid ${colors.dark};
      color: currentColor;
      padding: 1em;
      border-radius: 5px;
      font-size: 1rem;
      &:focus{
        border: 3px solid ${colors.secondary};
      }
    `}
  ${(props) =>
    props.type === "checkbox" &&
    css`
      background-color: red;
    `}
`;

export const StyledSpan = styled.span`
  position: absolute;
  left: 5px;
  white-space: nowrap;
  font-size: 1rem;
  padding: 0 0.5em;
  top: -15px;
  background-color: ${colors.white};
`;

export const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  margin: 1em 0;
`;
