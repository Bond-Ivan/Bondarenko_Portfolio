import styled from "styled-components";

interface FormButtonProps {
  $disabled: boolean;
}

const FormButton = styled.button<FormButtonProps>`
  border: 1px solid yellow;
  letter-spacing: 1px;
  padding: 10px 15px;
  font-size: 18px;
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
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

const FormItemInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-bottom: 0.5px solid yellow;
  color: ${(props) => props.theme.color};
  box-shadow: none;
  border-radius: none;
  transition: box-shadow 0.3s ease-in-out;
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
export { FormButton, FormItem, FormItemLabel, FormItemInput, FormIcon }