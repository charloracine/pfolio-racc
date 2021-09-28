import styled from "styled-components";

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
`;

export const Column = styled.div`
  z-index: ${(props) => props.zIndex};
  flex: ${(props) => props.size};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.pd};
  padding-right: ${(props) => props.pdr};
  padding-left: ${(props) => props.pdl};
  padding-top: ${(props) => props.pdt};
  padding-bottom: ${(props) => props.pdb};
`;
