import styled from "styled-components";
import { colors } from "../Colors/Colors";

export const Bar = styled.header`
  position: fixed;
  padding: 1em 0;
  height: 2em;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 10;
  width: 100%;
  border-top: 0.5em solid ${(props) => (props.primary ? colors.ds : colors.dp)};
  background-color: ${(props) =>
  props.primary ? colors.secondary : colors.primary};
  &.main-bar{
    z-index: 5;
  }
`;
