import { motion } from "framer-motion";
import styled from "styled-components";

const StackItem = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  border-radius: 80px;
  @media (max-width: 450px) {
    width: 45%;
  }
`;
const StyledStackItem = motion(StackItem);

const StackItemTitle = styled.h4`
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

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
  @media (max-width: 768px) {
    &:hover {
      scale: 1;
    }
  }
  @media (max-width: 1040px) {
    width: 60px;
    height: 60px;
  }
`;

export { StyledStackItem, StackItemTitle, StackItemIcon };
