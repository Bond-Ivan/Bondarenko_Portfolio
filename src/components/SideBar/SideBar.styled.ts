import styled from "styled-components";

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  z-index: 11;
  border-radius: 0 40px 40px 0;
  background-color: #0A0F14;
  border-right: 1px solid black;
  @media (max-width: 768px) {
    width: 35px;
  }
`;

const SideBarList = styled.ul`
  height: 100%;
  padding: 45px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SideBarItem = styled.li`
  width: max-content;
  transform: rotate(-90deg);
`;

const SideBarItemText = styled.span`
  cursor: pointer;
  color: white;
  font-size: 20px;
  text-shadow: 4px 4px #0e0e0e1f;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffffffad;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-height: 550px) {
    font-size: 14px;
  }

  @media (max-height: 400px) {
    font-size: 12px;
  }
`;

export { SideBarContainer, SideBarList, SideBarItem, SideBarItemText };
