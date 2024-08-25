import styled from "styled-components";

const LoaderContactsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000b8;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  left: 0;
  z-index: 100;
  top: 0;
`;

const LoaderContactsSpinner = styled.div`
  width: 8vmax;
  height: 8vmax;
  border-right: 4px solid #ffffff;
  border-radius: 100%;
  animation: spinRight 800ms linear infinite;

  &:before,
  &:after {
    content: "";
    width: 6vmax;
    height: 6vmax;
    display: block;
    position: absolute;
    top: calc(50% - 3vmax);
    left: calc(50% - 3vmax);
    border-left: 3px solid #ffffff;
    border-radius: 100%;
    animation: spinLeft 800ms linear infinite;
  }

  &:after {
    width: 4vmax;
    height: 4vmax;
    top: calc(50% - 2vmax);
    left: calc(50% - 2vmax);
    border: 0;
    border-right: 2px solid #ffffff;
    animation: none;
  }

  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }

  @keyframes spinRight {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export { LoaderContactsContainer, LoaderContactsSpinner };
