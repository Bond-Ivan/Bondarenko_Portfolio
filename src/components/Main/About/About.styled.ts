import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid black;
`;

const AboutContainer = styled.div`
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

const AboutTitle = styled.h2`
  position: absolute;
  top: -20px;
  padding: 0 20px;
  color: ${(props) => props.theme.color};
  margin-bottom: 60px;
  font-size: 60px;
  background-color: ${(props) => props.theme.background};
  text-shadow: 4px 4px black;
  @media (max-width: 1040px) {
    font-size: 40px;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const AboutDescription = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 30px;
  text-indent: 35px;
  color: ${(props) => props.theme.color};

  &:first-of-type {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledAboutDescription = motion(AboutDescription);

const AboutCard = styled.div`
    border-radius: 10px;
    width: 300px;
    height: 450px;
    position: relative;
    perspective: 1000px;
    animation: cardVisible 1.5s;
    @media (max-width: 1040px) {
      width: 350px;
    }

    @media (max-width: 768px) {
      width: 80%;
      margin: 0 auto;
      height: 170px;
    }
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const AboutCardInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.2s ease-out;
    transform-style: preserve-3d;
    background-color: #10171F;
    border-radius: 10px;
`;

const AboutCardBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.6;
    pointer-events: none;
`;

const AboutInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 70px;
  max-width: 800px;
  @media (max-width: 1040px) {
    padding: 0 0 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 0 30px 0;
  }
`;

const AboutCardImage = styled.img`
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    border: 2px solid yellow;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
`;

const AboutBoxTitle = styled.h2`
    font-size: 45px;
    color: white;
    font-weight: 600;
    margin-bottom: 35px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
`;

const AboutBoxSpan = styled.span`
  display: block;
  color: yellow;
`;

export { AboutSection, AboutBoxSpan, AboutBoxTitle, AboutInner, AboutWrapper, AboutCardImage, AboutCardBox, AboutCardInner, AboutContainer, AboutTitle, StyledAboutDescription, AboutCard };
