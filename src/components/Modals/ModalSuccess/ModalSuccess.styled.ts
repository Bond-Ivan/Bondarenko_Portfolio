import styled from "styled-components";

const ModalSuccessContainer = styled.div`
  position: fixed;
  -webkit-box-shadow: 2px 3px 56px 68px rgba(193, 108, 11, 0.2);
  -moz-box-shadow: 2px 3px 56px 68px rgba(193, 108, 11, 0.2);
  box-shadow: 2px 3px 56px 68px rgba(193, 108, 11, 0.2);
  max-width: 400px;
  top: 150px;
  right: 10px;
  background-color: white;
  border-radius: 50px;
  padding: 15px 20px;
  animation: slideIn 2s forwards, shake 1s 2s forwards, fadeOut 1s 3s forwards;
  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 520px) {
    max-width: 250px;
  }

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

const ModalSuccessText = styled.p`
  font-size: 20px;
  color: black;
  font-family: "Handjet", sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;

export { ModalSuccessContainer, ModalSuccessText };
