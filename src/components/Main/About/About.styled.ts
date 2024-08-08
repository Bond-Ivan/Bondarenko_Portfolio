import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
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
  top: -40px;
  padding: 0 20px;
  color: ${(props) => props.theme.color};
  margin-bottom: 60px;
  font-size: 60px;
  background-color: ${(props) => props.theme.background};
  text-shadow: 6px 6px #a17d51bb;
  @media (max-width: 1040px) {
    font-size: 55px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const AboutDescription = styled.p`
  max-width: 800px;
  padding: 30px;
  font-size: 18px;
  line-height: 30px;
  text-indent: 35px;
  border: 5px solid orange;
  border-radius: 40px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledAboutDescription = motion(AboutDescription);

export { AboutSection, AboutContainer, AboutTitle, StyledAboutDescription };
