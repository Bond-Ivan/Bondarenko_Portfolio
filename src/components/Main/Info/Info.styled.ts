import styled from "styled-components";
import infoPhoneImg from "../../../../public/img/info-phone.png";

const InfoSection = styled.section`
  background-image: url(${infoPhoneImg});
  background-repeat: no-repeat;
  background-position: 55% 15%;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
  @media (max-width: 768px) {
    background-position: 52% 18%;
    background-size: 325px;
  }

  @media (max-width: 576px) {
    background-position: 25% 13%;
    background-size: 250px;
  }
`;

const InfoContainer = styled.div`
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

const InfoTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 90px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 70px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
  }
`;

const InfoDescription = styled.p`
  text-indent: 35px;
  line-height: 40px;
  font-size: 30px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export { InfoSection, InfoContainer, InfoWrapper, InfoTitle, InfoDescription };
