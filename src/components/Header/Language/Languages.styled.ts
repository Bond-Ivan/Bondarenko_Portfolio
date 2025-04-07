import styled from "styled-components";

interface LanguageArrowProps {
  $active: boolean;
}

const LanguageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
`;

const LanguageInput = styled.input`
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
    color: yellow;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LanguageArrow = styled.div<LanguageArrowProps>`
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

const LanguageOptions = styled.div<LanguageArrowProps>`
  position: absolute;
  top: 70px;
  width: 100%;
  background-color: #111a24;
  border: 3px solid black;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  overflow: hidden;
  pointer-events: ${(props) => (props.$active ? "all" : "none")};
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  -webkit-box-shadow: 4px 4px 42px 20px rgba(255, 255, 255, 0.07);
    -moz-box-shadow: 4px 4px 42px 20px rgba(255, 255, 255, 0.07);
    box-shadow: 3px 0px 10px 8px rgba(255, 255, 255, 0.07);
  @media (max-width: 768px) {
    top: 65px;
  }
`;

const LanguageOption = styled.div`
  font-size: 25px;
  line-height: 29.75px;
  letter-spacing: -0.01em;
  text-align: center;
  padding: 12px 20px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: black;
    color: yellow;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export {
  LanguageContainer,
  LanguageInput,
  LanguageArrow,
  LanguageOptions,
  LanguageOption,
};
