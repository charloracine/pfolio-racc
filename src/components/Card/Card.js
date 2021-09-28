import styled from "styled-components";
import { colors } from "../Colors/Colors";

export const Card = styled.div`
  background-color: ${colors.halfwhite};
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  flex: 1;
  box-shadow: 5px 5px 5px #606060;
  padding: 1em;
  padding: ${(props) => props.pd};
  margin: ${(props) => props.margin};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: ${(props) => props.justify};
`;
