import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectsSection = styled.section`
  position: relative;

  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
`;
const StyledProjectsSection = motion(ProjectsSection);

const ProjectsContainer = styled.div`
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

const ProjectsTitle = styled.h2`
  position: absolute;
  top: -40px;
  right: 18%;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  text-align: end;
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

const ProjectsDescription = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 45px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 35px;
  }
  @media (max-width: 1040px) {
    font-size: 30px;
  }
`;

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  column-gap: 30px;
  row-gap: 60px;
  @media (max-width: 1040px) {
    row-gap: 80px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    row-gap: 40px;
  }
`;

const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledProjectsItem = motion(ProjectsItem);


const ProjectsCard = styled.div`
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

const ProjectsCardWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ProjectsCardImg = styled.img`
  height: 100%;
  border-radius: 35px;
  opacity: 0.3;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const ProjectsCardInner = styled.div`
  position: absolute;
  padding: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 35px;
  background-color: orange;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  max-height: 0;
  opacity: 0;
  transition: transform 0.5s, max-height 0.5s ease-in-out,
    opacity 0.5s ease-in-out;

  ${ProjectsCard}:hover & {
    opacity: 1;
    max-height: 200px;
  }
`;

const ProjectsCardText = styled.p`
  margin-bottom: 25px;
  color: white;
`;

const ProjectsCardLinkSpan = styled.span`
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

const ProjectsItemTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  color: ${(props) => props.theme.color};
`;

export {
  ProjectsCardLinkSpan,
  StyledProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsDescription,
  ProjectsList,
  StyledProjectsItem,
  ProjectsCard,
  ProjectsCardWrapper,
  ProjectsCardImg,
  ProjectsCardInner,
  ProjectsCardText,
  ProjectsItemTitle,
};
