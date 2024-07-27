import styled from "styled-components";

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  z-index: 11;
  border-radius: 0 40px 40px 0;
  background-color: orange;
  @media (max-width: 768px) {
    width: 35px;
  }
`;

const SideBarList = styled.ul`
  height: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SideBarItem = styled.li`
  width: 150px;
  transform: rotate(-90deg);
`;

const SideBarItemText = styled.span`
  cursor: pointer;
  color: white;
  font-size: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3e3e3e;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export { SideBarContainer, SideBarList, SideBarItem, SideBarItemText };
