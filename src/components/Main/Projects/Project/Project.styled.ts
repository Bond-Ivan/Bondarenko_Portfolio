import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledProjectItem = motion(ProjectItem);

const ProjectCard = styled.div`
  height: 100%;
  margin-bottom: 20px;
  border: 3px solid orange;
  border-radius: 40px;
  -webkit-box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  -moz-box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  }

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

const ProjectCardWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ProjectCardImg = styled.img`
  height: 100%;
  border-radius: 35px;
  opacity: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.3;
  }
`;

const ProjectCardInner = styled.div`
  position: absolute;
  padding: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 35px;
  background-color: #ff9800d9;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  max-height: 0;
  opacity: 0;
  transition: transform 0.5s, max-height 0.5s ease-in-out,
    opacity 0.5s ease-in-out;

  ${ProjectCard}:hover & {
    opacity: 1;
    max-height: 200px;
  }
`;

const ProjectCardText = styled.p`
  margin-bottom: 25px;
  color: white;
`;

const ProjectCardLinkSpan = styled.span`
  margin: 0 auto;
  display: flex;
  width: max-content;
  padding: 10px 20px;
  background-color: white;
  color: orange;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  border: 1px solid orange;
  scale: 1;
  &:hover {
    background-color: orange;
    color: white;
    border: 1px solid white;
    scale: 1.05;
  }
`;

const ProjectItemTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  color: ${(props) => props.theme.color};
`;
export {
  StyledProjectItem,
  ProjectCard,
  ProjectCardWrapper,
  ProjectCardImg,
  ProjectCardInner,
  ProjectCardText,
  ProjectCardLinkSpan,
  ProjectItemTitle,
};
