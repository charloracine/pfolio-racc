import styled, { keyframes } from "styled-components";
import { Column } from "../Container/Container";

const OpenAnimation = keyframes`
  to {
    left: 0;
  }
`;

export const SideMenu = styled(Column)`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 11111;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.5);
  transition: all 300ms ease-in;
  &.closed {
    left: -110vw;
  }
  &.detail {
    left: -110vw;
  }
  &.detail-open {
    animation: ${OpenAnimation} ease-in 300ms forwards;
  }
`;
