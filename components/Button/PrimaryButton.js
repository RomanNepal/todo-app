import styled from "styled-components";
const PrimaryButton = styled.button`
  border-radius: 8px;
  border: none;
  color: ${(props) => props.color || "white"};
  text-decoration: none;
  background-color: ${(props) => props.backgroundColor || "black"};
  font-family: "Inter";
  font-weight: ${(props) => props.fontWeight || "normal"};
  cursor: pointer;
  transition: "all 0.5s ease-out";
  padding-left: 16px;
  padding-right: 16px;
  :hover {
    background-color: ${(props) => props.bgColor || "white"};
    color: ${(props) => props.color || "black"};
    border: 1px solid black;
    border-color: black;
    transition: "all 0.5s ease-out";
  }
`;
export default PrimaryButton;
