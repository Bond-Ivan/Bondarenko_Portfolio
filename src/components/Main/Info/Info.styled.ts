import styled from "styled-components";
import infoPhoneImg from "../../../../public/img/qwe.png";

const InfoSection = styled.section`
background-image: url(${infoPhoneImg});
  background-repeat: no-repeat;
  background-position: 80% bottom;
  background-size: 700px;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid black;
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1920px;
  padding: 150px 70px 150px 125px;
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

const InfoButton = styled.button`
  border: 1px solid yellow;
  border-radius: 10px;
  margin-right: auto;
  background-color: yellow;
  letter-spacing: 1px;
  padding: 10px 15px;
  font-size: 18px;
  -webkit-box-shadow: 4px 4px 59px 9px rgba(229, 255, 0, 0.38);
  -moz-box-shadow: 4px 4px 59px 9px rgba(229, 255, 0, 0.38);
  box-shadow: 4px 4px 59px 9px rgba(229, 255, 0, 0.38);
  scale: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

const InfoTitle = styled.h1`
  margin-bottom: 50px;
  font-weight: 700;
  line-height: 90px;
  font-size: 100px;
  color: ${(props) => props.theme.color};
  text-shadow: 5px 5px black;
  @media (max-width: 1040px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 35px;
  }
`;

const InfoName = styled.span`
  display: flex;
  filter: drop-shadow(12px 10px 30px rgba(255, 255, 0, 0.27));
  color: yellow;
`;

const InfoDescription = styled.p`
  max-width: 550px;
  line-height: 40px;
  font-size: 25px;
  margin-bottom: 60px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export {
  InfoSection,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  InfoName,
  InfoButton,
};
