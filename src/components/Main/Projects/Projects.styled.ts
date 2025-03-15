import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectsSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid black;
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
  text-shadow: 4px 4px blackd9;

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


export {
  StyledProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsDescription,
  ProjectsList,
};
