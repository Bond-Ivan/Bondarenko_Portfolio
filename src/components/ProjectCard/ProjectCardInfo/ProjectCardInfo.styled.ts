import styled from "styled-components";

const ProjectCardInfoSection = styled.section`
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
`;

const ProjectCardInfoContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 50px 10px 125px 10px;
  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`;

const ProjectCardInfoDescription = styled.p`
  color: white;
  text-indent: 35px;
  padding: 30px;
  border-radius: 10px;
  line-height: 40px;
  font-size: 30px;
  @media (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding-right: 0;
    padding-left: 0;
  }
`;

const ProjectCardInfoBack = styled.div`
  position: fixed;
  z-index: 30;
  transform: translate(50%, 170%);
  right: 50%;
`;

const ProjectCardInfoBackSpan = styled.span`
  color: white;
  font-size: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orange;
  }
`;

const PrpjectCardInfoTitle = styled.h2`
  padding: 5px 8px;
  position: fixed;
  transform: translate(50%, 12%);
  right: 50%;
  border: 3px solid orange;
  border-top: 0;
  z-index: 13;
  border-radius: 0 0 15px 15px;
  background-color: #3e3e3e;
  text-align: center;
  margin-bottom: 60px;
  font-size: 60px;
  color: white;
  text-shadow: 6px 6px #a17d51bb;
  @media (max-width: 1040px) {
    font-size: 55px;
    width: 70%;
  }

  @media (max-width: 768px) {
    transform: translate(50%, 16%);
    font-size: 40px;
  }

  @media (max-width: 458px) {
    transform: translate(50%, 9%);
  }
`;

const ProjectCardInfoImg = styled.img`
  border-radius: 45px;
  width: 90%;
  display: flex;
  margin: 0 auto;
  margin-top: 170px;
  border: 5px solid orange;
  border-radius: 45px;
  filter: drop-shadow(12px 10px 30px orange);
  @media (max-width: 768px) {
    margin-top: 130px;
  }

  @media (max-width: 768px) {
    margin-top: 130px;
    width: 100%;
  }
`;

export {
  ProjectCardInfoContainer,
  ProjectCardInfoBackSpan,
  ProjectCardInfoImg,
  ProjectCardInfoSection,
  ProjectCardInfoDescription,
  PrpjectCardInfoTitle,
  ProjectCardInfoBack,
};
