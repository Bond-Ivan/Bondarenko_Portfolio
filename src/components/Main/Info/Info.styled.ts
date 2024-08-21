import styled from "styled-components";
import infoPhoneImg from "../../../../public/img/info-phone.png";
import { motion } from "framer-motion";

const InfoSection = styled.section`
  background-image: url(${infoPhoneImg});
  background-repeat: no-repeat;
  background-position: 50% 110px;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
  @media (max-width: 768px) {
    background-position: 50% 100px;
    background-size: 325px;
  }

  @media (max-width: 576px) {
    background-position: 50% 90px;
    background-size: 250px;
  }
`;

const InfoContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 1920px;
  padding: 550px 70px 150px 125px;
  display: flex;
  justify-content: center;
  @media (max-width: 1040px) {
    padding: 550px 25px 115px 105px;
  }

  @media (max-width: 768px) {
    padding: 370px 10px 115px 50px;
  }

  @media (max-width: 576px) {
    padding-top: 300px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 5px solid orange;
  border-radius: 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StyledInfoWrapper = motion(InfoWrapper);

const InfoTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 60px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 35px;
  }
`;

const InfoDescription = styled.p`
  text-indent: 35px;
  line-height: 40px;
  font-size: 25px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InfoEyes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 5px;
  position: absolute;
  top: 206px;
  transform: translate(-38%, 15px);
  @media (max-width: 768px) {
    top: 160px;
  }

  @media (max-width: 576px) {
    transform: translate(-52%, 15px);
    top: 133px;
  }
`;

const InfoEye = styled.div`
  overflow: hidden;
  width: 50px;
  height: 35px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 32px;
    height: 17px;
  }

  @media (max-width: 576px) {
    width: 22px;
    height: 12px;
  }
`;

const InfoPupil = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 101px;
  background-color: #000;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }

  @media (max-width: 576px) {
    width: 5px;
    height: 5px;
  }
`;

export {
  InfoSection,
  InfoContainer,
  StyledInfoWrapper,
  InfoTitle,
  InfoDescription,
  InfoEyes,
  InfoEye,
  InfoPupil,
};
