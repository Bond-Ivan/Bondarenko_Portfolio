import { motion } from "framer-motion";
import styled from "styled-components";

const ActivitySection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 3px solid yellow;
`;
const StyledActivitySection = motion(ActivitySection);

const ActivityContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 1920px;
  padding: 110px 70px 125px 125px;
  @media (max-width: 1040px) {
    padding: 105px 25px 115px 105px;
  }

  @media (max-width: 768px) {
    padding: 60px 10px 115px 50px;
  }
`;

const ActivityTitle = styled.h2`
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
    top: -30px;
  }
`;

const ActivityElem = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityBox = styled.div`
  max-width: 500px;
  z-index: 2;
  width: 100%;
  margin-right: 60px;
  padding: 20px;
  border-radius: 30px;
  border: 5px solid black;
  -webkit-box-shadow: 1px 1px 14px 1px rgba(229, 255, 0, 0.38);
  -moz-box-shadow: 1px 1px 14px 1px rgba(229, 255, 0, 0.38);
  box-shadow: 1px 1px 14px 1px rgba(229, 255, 0, 0.38);
  scale: 1;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }

  @media (max-width: 1040px) {
    max-width: 415px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (max-width: 576px) {
    &:hover {
      scale: 1;
    }
  }
`;

const ActivityList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ActivityItemPost = styled.h3`
  margin-bottom: 25px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  color: yellow;
  font-weight: 500;
  letter-spacing: 2px;
  border-bottom: 5px solid black;

  @media (max-width: 1040px) {
    margin-bottom: 20px;
    padding-bottom: 15px;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const ActivityItemPlace = styled.p`
  margin-bottom: 45px;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
  color: white;
  font-weight: 600;

  @media (max-width: 1040px) {
    margin-bottom: 35px;
    font-size: 20px;
  }
`;

const ActivityItemResponsibilities = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ActivityResponsibilitiesInner = styled.li`
  position: relative;
  padding-left: 30px;

  &::before {
    position: absolute;
    left: -8px;
    top: 50%;
    content: "";
    width: 23px;
    height: 2px;
    background-color: yellow;
  }

  @media (max-width: 576px) {
    padding-left: 20px;
    &::before {
      left: -10px;
      width: 16px;
  }
  }
`;

const ActivityItemResponsibility = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: white;
  @media (max-width: 1040px) {
    font-size: 16px;
    line-height: 27px;
  }
`;

const ActivityTime = styled.p`
  z-index: 2;
  font-size: 25px;
  line-height: 30px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 22px;
  }
`;
const StyledActivityTime = motion(ActivityTime);

export {
  StyledActivitySection,
  ActivityContainer,
  ActivityTitle,
  ActivityElem,
  ActivityBox,
  ActivityList,
  ActivityItemPost,
  ActivityItemPlace,
  ActivityItemResponsibilities,
  ActivityResponsibilitiesInner,
  ActivityItemResponsibility,
  StyledActivityTime,
};
