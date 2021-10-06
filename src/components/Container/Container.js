import styled from "styled-components";
import device from "../Device/Device";

export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  flex-direction: ${(props) => props.dir};
  padding: 2em;
  padding: ${(props) => props.pd};
  padding-right: ${(props) => props.pdr};
  padding-left: ${(props) => props.pdl};
  padding-top: ${(props) => props.pdt};
  padding-bottom: ${(props) => props.pdb};
  max-width: 935px;
  @media ${device.laptop} {
    min-width: 940px;
  }
  @media ${device.laptop} {
    max-width: 935px;
  }
  @media ${device.laptopL} {
    min-width: 1400px;
    max-width: 1400px;
  }
`;

export const Column = styled.div`
  flex: ${(props) => props.size};
  order: ${(props) => props.order};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.wrap};
  overflow: ${(props) => props.overflow};
  display: flex;
  max-width: ${(props) => props.maxWidth};
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.pd};
  padding-right: ${(props) => props.pdr};
  padding-left: ${(props) => props.pdl};
  padding-top: ${(props) => props.pdt};
  padding-bottom: ${(props) => props.pdb};
  &.content {
    z-index: 4;
  }
  &.desktop {
    @media ${device.laptop} {
      max-width: 835px;
    }
  }
  &.main-bar {
    margin: 0 auto;
    @media ${device.laptop} {
      max-width: 935px;
    }
    @media ${device.laptopL} {
      max-width: 1440px;
    }
  }
`;
