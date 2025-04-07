import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  max-width: 1920px;
  padding: 5px 70px 5px 125px;
  z-index: 14;
  border-radius: 0 0 0 70px;
  background-color: #0a1017;
  border-bottom: 3px solid black;
  @media (max-width: 768px) {
    padding: 5px 45px 5px 45px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleSwitchContainer = styled.div`
  position: relative;
  width: 200px;
`;

const Label = styled.label`
  position: absolute;
  right: 0;
  top: 8px;
  width: 60%;
  height: 35px;
  background-color: #28292c;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const HiddenInput = styled.input`
  position: absolute;
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 16px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    box-shadow: inset 6px -1px 0px 0px #d8dbe0;
    background-color: #28292c;
    transition: transform 0.3s, background-color 0.3s;
  }

  ${HiddenInput}:checked + & {
    background-color: #d8dbe0;

    &:before {
      transform: translateX(75px);
      background-color: #28292c;
      box-shadow: none;
    }
  }
`;

export {
  HeaderContainer,
  HeaderWrapper,
  ToggleSwitchContainer,
  Slider,
  Label,
  HiddenInput
};
