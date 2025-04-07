import styled from "styled-components";

interface FormButtonProps {
  $disabled: boolean;
}

const FormButton = styled.button<FormButtonProps>`
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  background-color: transparent;
  scale: 1;
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$disabled ? 'none': 'all')};
  filter: ${(props) => (props.$disabled ? 'contrast(20%)' : 'contrast(1)')};

  &:hover {
    background-color: black;
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
  border: 3px solid black;
  border-radius: 15px 0 15px 0;
  color: ${(props) => props.theme.color};
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
`;

export {FormButton, FormItem, FormItemLabel, FormItemInput}