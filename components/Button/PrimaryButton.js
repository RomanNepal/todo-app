import styled from "styled-components";
const PrimaryButton = styled.button`
  border-radius: 8px;
  padding: 12px;
  color: ${(props) => props.color || "white"};
  text-decoration: none;
  background-color: black;
  font-family: "Inter";
  cursor: pointer;
  transition: "all 0.5s ease-out";
  :hover {
    background-color: ${(props) => props.bgColor || "white"};
    color: ${(props) => props.color || "black"};
    transition: "all 0.5s ease-out";
  }
`;
export default PrimaryButton;
