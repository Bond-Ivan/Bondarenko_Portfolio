import styled from "styled-components";

const ProjectCardGallerySection = styled.section`
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: 3px solid yellow;
`;

const ProjectCardGalleryContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 150px 10px 70px 10px;
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 60px;
  }
`;

const ProjectCarGalleryTitle = styled.h2`
  position: absolute;
  top: -40px;
  left: 40%;
  left: 20%;
  z-index: 10;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 60px;
  font-size: 60px;
  color: white;
  text-shadow: 4px 4px blackd9;
  @media (max-width: 1040px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ProjectCardGalleryList = styled.ul`
  padding-bottom: 120px;
  padding-left: 50px;
  padding-right: 50px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 80px;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ProjectCardGalleryListItem = styled.li`
  display: flex;
  scale: 1;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.05;
  }
  &:not(:last-child) {
    margin-bottom: 75px;
  }

  &:nth-child(2n) {
    justify-content: end;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 45px;
    }
  }

  @media (max-width: 576px) {
    &:hover {
      scale: 1;
    }
  }
`;

const ProjectCardListImg = styled.img`
  border: 1px solid black;
  width: 60%;
  border-radius: 10px;
  filter: drop-shadow(12px 10px 30px rgba(255, 255, 255, 0.27));
  @media (max-width: 1040px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ProjectCardLinkText = styled.p`
  margin-bottom: 25px;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  color: white;
`;

const ProjectCardLinkContent = styled.a`
  display: inline-block;
  border: 2px solid black;
  color: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 200px;
  padding: 10px 20px;
  background-color: transparent;
  scale: 1;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    scale: 1.1;
  }
`;

export {
  ProjectCardLinkContent,
  ProjectCardGallerySection,
  ProjectCardLinkText,
  ProjectCardGalleryContainer,
  ProjectCardGalleryListItem,
  ProjectCardListImg,
  ProjectCarGalleryTitle,
  ProjectCardGalleryList,
};
