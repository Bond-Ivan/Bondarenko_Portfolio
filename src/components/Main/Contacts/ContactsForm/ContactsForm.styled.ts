import styled from "styled-components";

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

export {FormButton, FormItem, FormItemLabel, FormItemInput}