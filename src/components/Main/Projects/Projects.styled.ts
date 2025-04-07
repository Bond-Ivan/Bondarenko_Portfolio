import { motion } from "framer-motion";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import criptoProject from '../../../../public/img/criptoProject-card.png';
import PrepareASleigh from '../../../../public/img/prepareSleight-card.png';
import Capico from '../../../../public/img/capico-card.png';
import Advolatum from '../../../../public/img/advolatum-card.png';
import BmPravo from '../../../../public/img/bmPravo-card.png';

const ProjectsSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 3px solid yellow;
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

const SwiperProjects = styled(Swiper)`
    width: 350px;
    height: 450px;
    margin-left: inherit;

    @media (max-width: 1240px) {
      width: 300px;
      height: 400px;
    }

    @media (max-width: 950px) {
      width: 250px;
      height: 350px;
    }

    @media (max-width: 768px) {
      width: 200px;
      height: 280px;
      margin-left: auto;
      margin-bottom: 30px;
    }
`;

const StyledSwiperSlide = styled(SwiperSlide) <any>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid yellow;

  &:nth-child(1) {
    background-image: url(${Advolatum});
  }

  &:nth-child(2) {
    background-image: url(${PrepareASleigh});
    background-position: right;
  }

  &:nth-child(3) {
    background-image: url(${Capico});
    background-position: left;
  }

  &:nth-child(4) {
    background-image: url(${criptoProject});
  }

  &:nth-child(5) {
    background-image: url(${BmPravo});
  }
`;

const ProjectTab = styled.div`
  color: white;
  font-size: 30px;
`;

const ProjectTabWrapper = styled.div`
  max-width: 58%;

  @media (max-width: 1240px) {
    max-width: 55%;
  }

  @media (max-width: 950px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectTabTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 600;

  @media (max-width: 1240px) {
    font-size: 40px;
  }

  @media (max-width: 950px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
      text-align: center;
  }
`;

const ProjectTabTitleSpan = styled.span`
  color: yellow;
`;

const ProjectTabText = styled.p`
  margin-bottom: 50px;
  text-indent: 40px;
  font-size: 25px;

  @media (max-width: 950px) {
    font-size: 25px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
  }
`;

const ProjectTabButton = styled.button`
  margin: 0 auto;
  color: black;
  display: flex;
  border: 1px solid yellow;
  border-radius: 10px;
  margin-right: auto;
  background-color: yellow;
  letter-spacing: 1px;
  padding: 10px 15px;
  font-size: 18px;
  -webkit-box-shadow: 4px 4px 25px 9px rgba(229, 255, 0, 0.38);
  -moz-box-shadow: 4px 25px 59px 9px rgba(229, 255, 0, 0.38);
  box-shadow: 4px 4px 25px 9px rgba(229, 255, 0, 0.38);
  scale: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

export {
  ProjectTab,
  ProjectTabTitle,
  ProjectTabText,
  ProjectTabTitleSpan,
  ProjectTabButton,
  SwiperProjects,
  ProjectsWrapper,
  StyledSwiperSlide,
  ProjectTabWrapper,
  StyledProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsDescription,
};
