import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = styled.section`
  position: relative;
  border-bottom: 1px solid #ffff0045;
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
  border-radius: 50px;
  padding: 0 20px;
  color: ${(props) => props.theme.color};
  margin-bottom: 60px;
  font-size: 40px;
  background-color: ${(props) => props.theme.background};
  text-shadow: 4px 4px black;
  @media (max-width: 1040px) {
    font-size: 30px;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
  }
`;

const AboutDescription = styled.p`
  max-width: 650px;
  font-size: 16px;
  line-height: 26px;
  text-indent: 35px;
  color: ${(props) => props.theme.color};

  &:first-of-type {
    margin-bottom: 10px;
  }

  @media (max-width: 1040px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 12px;
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
      width: 50%;
      margin: 0 auto;
      height: 320px;
    }

    @media (max-width: 430px) {
      width: 80%;
    }
`;

const AboutWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const CardText = styled.div`
  font-size: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  background-color: #0a10178c;
  padding: 5px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: yellow;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

const CardList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;

  li {
    width: 16px;
    scale: 1;
    transition: all 0.3s ease-in-out;
    &:hover {
    scale: 1.6;
    }
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
  padding: 0 0 0 55px;
  max-width: 800px;
  @media (max-width: 1040px) {
    padding: 0 0 0 45px;
  }

  @media (max-width: 768px) {
    padding: 0 0 25px 0;
  }
`;

const AboutCardImage = styled.img`
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    -webkit-box-shadow: 5px 3px 18px 5px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: 5px 3px 18px 5px rgba(0, 0, 0, 0.74);
    box-shadow: 5px 3px 18px 5px rgba(0, 0, 0, 0.74);
    border: 1px solid black;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
`;

const AboutBoxTitle = styled.h2`
    font-size: 35px;
    color: white;
    font-weight: 600;
    margin-bottom: 35px;
    @media (max-width: 1040px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 420px) {
      font-size: 20px;
    }
`;

const AboutBoxSpan = styled.span`
  display: block;
  color: yellow;
`;

export { AboutSection, CardList, CardDescription, CardTitle, CardText, AboutBoxSpan, AboutBoxTitle, AboutInner, AboutWrapper, AboutCardImage, AboutCardBox, AboutCardInner, AboutContainer, AboutTitle, StyledAboutDescription, AboutCard };
