import styled from "styled-components";

const ContactsSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
`;

const ContactsContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 110px 70px 80px 125px;
  @media (max-width: 1040px) {
    padding: 105px 25px 60px 105px;
  }
  @media (max-width: 768px) {
    padding: 60px 10px 40px 50px;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactsTitle = styled.h2`
  position: absolute;
  top: -40px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 60px;
  font-size: 60px;
  color: ${(props) => props.theme.color};
  text-shadow: 4px 4px black;

  @media (max-width: 1040px) {
    font-size: 55px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ContactsText = styled.p`
  font-size: 45px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 60px;
  max-width: 700px;
  line-height: 35px;
  text-indent: 35px;
  color: ${(props) => props.theme.color};

  @media (max-width: 950px) {
    font-size: 35px;
  }
`;

const FormList = styled.ul`
  margin-left: auto;
`;

const ContactsTextSpan = styled.span`
  color: yellow;
`;

const FormContainer = styled.div`
  border: 1px solid yellow;
  max-width: 700px;
  margin-bottom: 50px;
  background-color: #8080800a;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  border-radius: 35px;
`;

const FormTitle = styled.h3`
  margin-bottom: 35px;
  color: ${(props) => props.theme.color};
  font-size: 30px;
`;


const ContactsSocialLink = styled.a`
  margin-bottom: 15px;
  display: inline-block;
`;

const ContactsSocial = styled.svg`
  width: 60px;
  height: 60px;
  scale: 1;
  transition: all 0.3s ease-in-out;
`;

const ContactsSociaItem = styled.li`
  &:hover ${ContactsSocial} {
    scale: 1.2;
  }
`;

const ContactsSocialText = styled.p`
  font-size: 20px;
  color: white;
`;

export {
  ContactsSocialLink,
  ContactsSocialText,
  ContactsSocial,
  ContactsSection,
  ContactsContainer,
  ContactsWrapper,
  FormTitle,
  ContactsTitle,
  ContactsText,
  FormContainer,
  ContactsSociaItem,
  ContactsTextSpan,
  FormList,
};
