import styled from "styled-components";
const SecondaryButton = styled.button`
  border-radius: 8px;
  padding: 12px;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.bgColor || "white"};
  text-decoration: none;
  font-family: "Inter";
`;
export default SecondaryButton;
