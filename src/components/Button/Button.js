import styled, { css } from "styled-components";
import { colors } from "../Colors/Colors";

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0;
  margin: ${(props)=>props.margin};
  padding: 0;
  & > button {
    border-radius: 0;
    margin: 1px;
    &:nth-of-type(1) {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:nth-last-of-type(1) {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5em 0;
  padding: ${(props) => props.pd};
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 10px;
  flex: ${(props) => props.size};
  font-size: 1rem;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  font-weight: ${(props) => props.fontWeight};
  color: ${colors.white};
  margin: ${(props) => props.margin};
  transition: all linear 200ms;
  background-color: ${(props) =>
    props.primary ? colors.secondary : colors.primary};
  background-color: ${(props) => props.color};
  &:focus,
  :hover {
    opacity: 0.5;
  }
  ${(props) => [
    props.outlined &&
      css`
        color: ${(props) =>
          props.primary ? colors.secondary : colors.primary};
        color: ${(props) => props.color};
        border: 3px solid currentColor;
        background-color: transparent;
      `,
    props.disabled &&
      css`
        color: ${colors.white};
        opacity: 0.5;
        background-color: #202020;
      `,
  ]}
`;
