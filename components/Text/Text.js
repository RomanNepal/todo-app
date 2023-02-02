import styled from "styled-components";

const Text = styled.text`
  font-family: "Inter";
  color: ${(props) => props.color || "black"};
`;

export default Text;
