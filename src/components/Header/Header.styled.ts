import styled from "styled-components";

interface DropdownArrowProps {
  $active: boolean;
}

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
  background-color: #3e3e3e;
  border-bottom: 3px solid orange;
  @media (max-width: 768px) {
    padding: 5px 45px 5px 45px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
`;

const DropdownInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  font-size: 25px;
  line-height: 24.75px;
  letter-spacing: -0.03em;
  text-align: left;
  border: none;
  outline: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 12px 20px;
  border-radius: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orange;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DropdownArrow = styled.div<DropdownArrowProps>`
  content: "";
  position: absolute;
  top: ${(props) => (props.$active ? "15px" : "22px")};
  right: 20px;
  z-index: 1000;
  width: 8px;
  height: 8px;
  border: 2px solid transparent;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: ${(props) =>
    props.$active ? "rotate(-45deg)" : "rotate(-225deg)"};
  transition: 0.3s;
  pointer-events: none;
  @media (max-width: 768px) {
    right: 40px;
  }
`;

const OptionsContainer = styled.div<DropdownArrowProps>`
  position: absolute;
  top: 70px;
  width: 100%;
  background-color: #1a1818;
  border: 3px solid orange;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  overflow: hidden;
  pointer-events: ${(props) => (props.$active ? "all" : "none")};
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  @media (max-width: 768px) {
    top: 65px;
  }
`;

const Option = styled.div`
  font-size: 25px;
  line-height: 29.75px;
  letter-spacing: -0.01em;
  text-align: center;
  padding: 12px 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: orange;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const HeaderToggleTheme = styled.button`
  color: white;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orange;
  }
`;

export {
  HeaderContainer,
  HeaderWrapper,
  DropdownInput,
  DropdownContainer,
  OptionsContainer,
  DropdownArrow,
  Option,
  HeaderToggleTheme,
};
