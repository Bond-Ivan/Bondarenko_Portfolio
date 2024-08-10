import styled from "styled-components";

const ContactsSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 5px solid #ffb500;
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
  text-shadow: 4px 4px #a17d51bb;
  @media (max-width: 1040px) {
    font-size: 55px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ContactsText = styled.p`
  margin-bottom: 60px;
  max-width: 700px;
  font-size: 20px;
  line-height: 35px;
  text-indent: 35px;
  color: ${(props) => props.theme.color};
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-bottom: 50px;
  padding: 20px 15px;
  width: 100%;
  border: 5px solid orange;
  background-color: transparent;
  border-radius: 35px 0 35px 0;
`;

const FormTitle = styled.h3`
  margin-bottom: 35px;
  color: ${(props) => props.theme.color};
  font-size: 30px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const FormItemLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

const FormItemInput = styled.input`
  padding: 10px 15px;
  border: 3px solid orange;
  border-radius: 15px 0 15px 0;
  color: ${(props) => props.theme.color};
  -webkit-box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  -moz-box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 49px 19px rgba(253, 145, 0, 0.2);
  }
`;

const FormButton = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  border: 2px solid orange;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  background-color: transparent;
  scale: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: orange;
    scale: 1.1;
  }
`;


const ContactsSocialLink = styled.a`
  margin-bottom: 15px;
  display: inline-block;
`;

const ContactsSocial = styled.svg`
  width: 60px;
  height: 60px;
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
  FormItemLabel,
  FormItem,
  FormItemInput,
  FormButton,
};
