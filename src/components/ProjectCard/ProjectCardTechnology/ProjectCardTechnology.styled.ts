import styled from "styled-components";

const ProjectCarTechnologydSection = styled.section`
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
`;

const ProjectCardTechnologyContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 125px 10px 125px 10px;
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 40px;
  }  
`;

const ProjectCardTechnologyTitle = styled.h2`
  position: absolute;
  top: -40px;
  left: 45%;
  z-index: 10;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 60px;
  font-size: 60px;
  color: white;
  text-shadow: 4px 4px #ff9800d9;
  @media (max-width: 1040px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    left: 20%;
  }
`;


export { ProjectCarTechnologydSection, ProjectCardTechnologyContainer, ProjectCardTechnologyTitle };
