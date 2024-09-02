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
  HeaderToggleTheme,
};
