import styled from "styled-components";

const ModalErrorContainer = styled.div`
  position: fixed;
  -webkit-box-shadow: 2px 3px 56px 68px rgba(202, 0, 0, 0.2);
  -moz-box-shadow: 2px 3px 56px 68px rgba(202, 0, 0, 0.2);
  box-shadow: 2px 3px 56px 68px rgba(202, 0, 0, 0.2);
  max-width: 400px;
  top: 150px;
  right: 50px;
  background-color: red;
  border-radius: 10px;
  padding: 15px 20px;
  animation: slideIn 2s forwards, shake 1s 2s forwards, fadeOut 1s 3s forwards;

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ModalErrorText = styled.p`
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;

export { ModalErrorContainer, ModalErrorText };
