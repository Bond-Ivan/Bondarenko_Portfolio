import styled from "styled-components";

interface FormButtonProps {
  $disabled: boolean;
}

const FormButton = styled.button<FormButtonProps>`
  border: 1px solid yellow;
  letter-spacing: 1px;
  padding: 10px 15px;
  font-size: 12px;
  -webkit-box-shadow: 4px 4px 25px 9px rgba(229, 255, 0, 0.38);
  -moz-box-shadow: 4px 25px 59px 9px rgba(229, 255, 0, 0.38);
  box-shadow: ${(props) => (props.$disabled ? 'none' : '4px 4px 25px 9px rgba(229, 255, 0, 0.38)')};
  margin: 0 auto;
  display: flex;
  border-radius: 10px;
  color: black;
  scale: 1;
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'all')};
  background-color: ${(props) => (props.$disabled ? 'none' : 'yellow')};
  filter: ${(props) => (props.$disabled ? 'contrast(20%)' : 'contrast(1)')};

  &:hover {
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
  font-size: 16px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

const FormItemInput = styled.input`
  padding: 6px 4px;
  border: none;
  font-size: 12px;
  border-bottom: 0.5px solid #ffff0045;
  color: ${(props) => props.theme.color};
  box-shadow: none;
  border-radius: none;
  transition: box-shadow 0.3s ease-in-out;

  @media (max-width: 1040px) {
    font-size: 10px;
  }
`;

const FormIcon = styled.svg`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px auto;
  display: block;
  transform-style: preserve-3d;
  animation: floatUpDown 2s ease-in-out infinite;

  @keyframes floatUpDown {
    0% {
      transform: translateY(-30) rotateX(10deg);
    }
    50% {
      transform: translateY(-10px) rotateX(10deg);
    }
    100% {
      transform: translateY(-30) rotateX(10deg);
    }
  }
`;

const ContactsDescription = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 60px;
  max-width: 700px;
  line-height: 25px;
  text-indent: 35px;
  color: white;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;
export { FormButton, ContactsDescription, FormItem, FormItemLabel, FormItemInput, FormIcon }