import styled from "styled-components";
import { Column } from "../Container/Container";

export const StackedImage = styled(Column)`
  position: relative;
  background: url(/img/boite.png) center no-repeat;
  background-size: contain;
  justify-content: center;
  align-items: center;
  width: 15em;
  height: 15em;
  padding: ${(props) => props.pd};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  & > img {
    width: 80%;
    height: auto;
    position: absolute;
    object-fit: scale-down;
  }
  & > .logo {
    width: 90%;
    object-fit: cover;
  }
  & > .moi {
    height: 55%;
    mix-blend-mode: multiply;
  }
  &.invisible {
    opacity: 0;
  }
`;