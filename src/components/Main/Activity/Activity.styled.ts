import { motion } from "framer-motion";
import styled from "styled-components";

const ActivitySection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid yellow;
`;

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
  border-radius: 50px;
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
  flex-direction: column;
  border-radius: 20px;
  max-width: 700px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActivityTime = styled.p`
  z-index: 2;
  font-size: 25px;
  line-height: 30px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
      font-size: 20px;
  }
`;
const StyledActivityTime = motion(ActivityTime);

const ActivityCampanyLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  margin-bottom: 15px;
`;

const CompanyLink = styled.a`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  color: rgba(255, 255, 255, .75);
  font-size: 17px;

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

const CompanyText = styled.p`
  margin-bottom: 25px;
  font-size: 20px;
  color: white;
  line-height: 25px;
`;

const CompanyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CompanyItem = styled.li`
  background-color: rgba(45, 212, 191, .1);
  color: yellow;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 17px;
`;

const AccordionTop = styled.button`
  background-color: #ffffff14;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px 20px 0 0;
  border: 1px solid #ffffff14;
  border-bottom: none;
  padding: 15px 30px;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 576px) {
    padding: 5px 10px;
  }

  @media (max-width: 420px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const AccordionBottom = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "20px 20px 20px 20px" : "0 20px 0 20px")};
  transition: all 0.5s ease;
  background-color: #8080800f;
  border-radius: 0 0 20px 20px;
  border: 1px solid #ffff002e;
  border-top: none;

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

const AccordionTitle = styled.h2`
    font-size: 25px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 20px;
    }
`;

export {
  ActivitySection,
  AccordionTitle,
  ActivityContainer,
  CompanyLink,
  AccordionTop,
  ActivityTitle,
  ActivityElem,
  CompanyText,
  AccordionBottom,
  ActivityList,
  CompanyItem,
  CompanyList,
  ActivityCampanyLogo,
  StyledActivityTime,
};
