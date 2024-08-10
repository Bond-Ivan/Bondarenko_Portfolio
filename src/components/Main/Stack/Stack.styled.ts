import { motion } from "framer-motion";
import styled from "styled-components";

const StackSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
`;
const StyledStackSection = motion(StackSection);

const StackContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 110px 70px 125px 125px;
  @media (max-width: 1040px) {
    padding: 95px 25px 65px 105px;
  }

  @media (max-width: 768px) {
    padding: 60px 10px 115px 50px;
  }
`;

const StackTitle = styled.h2`
  position: absolute;
  top: -40px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 60px;
  font-size: 60px;
  color: ${(props) => props.theme.color};
  text-shadow: 4px 4px #a17d51bb;
  @media (max-width: 1040px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StackInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  @media (max-width: 1040px) {
    margin-bottom: 70px;
  }
`;

const StackContentTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 35px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

const StackContentText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StackList = styled.ul`
  column-count: 3;
  @media (max-width: 370px) {
    column-count: 2;
  }
`;

const StackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const StyledStackItem = motion(StackItem);

const StackItemIcon = styled.svg`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  filter: drop-shadow(12px 10px 30px orange);
  scale: 1;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
  @media (max-width: 1040px) {
    width: 60px;
    height: 60px;
  }
  
`;

const StackItemTitle = styled.h4`
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

export {
  StyledStackSection,
  StackContainer,
  StackTitle,
  StackInner,
  StackContentTitle,
  StackContentText,
  StackList,
  StyledStackItem,
  StackItemIcon,
  StackItemTitle,
};
