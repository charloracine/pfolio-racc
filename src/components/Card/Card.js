import styled from "styled-components";
import { colors } from "../Colors/Colors";
import device from "../Device/Device";

export const Card = styled.div`
  background-color: ${colors.halfwhite};
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  overflow-y: ${(props) => props.overflowY};
  flex: 1;
  box-shadow: 2px 2px 2px currentColor;
  padding: 1em;
  padding: ${(props) => props.pd};
  margin: ${(props) => props.margin};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: ${(props) => props.justify};
  &.infos{
    max-width: 500px;
  }
  /* @media ${device.laptop} {
    &.detail {
      max-width: 800px;
    }
  }
  @media ${device.laptopL} {
    
    &.detail {
      min-width: 800px;
    }
  } */
`;

export const CodeCard = styled(Card)`
  background-color: ${colors.halfwhite};
  position: absolute;
  left: -2em;
  top: -3em;
  width: 125%;
  height: 120%;
  padding: 0;
  margin: 0;
  @media ${device.laptop} {
    max-width: 1000px;
    left: 0;
  }
  @media ${device.laptopL} {
    max-width: 1400px;
    left: 0;
  }
  @media ${device.desktop} {
    max-width: 1800px;
  }
`;
