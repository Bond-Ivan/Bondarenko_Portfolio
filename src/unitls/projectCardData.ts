import criptoProjectImg from "../../public/img/Cripto-Project-ProjectCard.jpg";
import PrepareASleigh from "../../public/img/Prepare-a-sleigh-ProjectCard.jpg";
import Capico from "../../public/img/Capico-ProjectCard.jpg";
import { t } from "i18next";
import ProjectCardDataType from "../components/ProjectCard/ProjectCard.types";
import criptoProjectElem1 from "../../public/img/Cripto-Project-elem1.jpg";
import criptoProjectElem2 from "../../public/img/Cripto-Project-elem2.jpg";
import criptoProjectElem3 from "../../public/img/Cripto-Project-elem3.jpg";
import capicoElem1 from "../../public/img/Capico-elem1.jpg";
import capicoElem2 from "../../public/img/Capico-elem2.jpg";
import capicoElem3 from "../../public/img/Capico-elem3.jpg";
import prepareASleight1 from "../../public/img/Prepare-a-sleigh-elem1.jpg";
import prepareASleight2 from "../../public/img/Prepare-a-sleigh-elem2.jpg";

const projectData: ProjectCardDataType = {
  criptoProject: {
    title: "Cripto-Project",
    description: t("projects.card.firstItem.description"),
    img: criptoProjectImg,
    elems: [criptoProjectElem1, criptoProjectElem2, criptoProjectElem3],
    link: "https://bond-ivan.github.io/Cripto-Project/",
  },
  capico: {
    title: 'Capioco',
    description: t("projects.card.secondItem.description"),
    img: Capico,
    elems: [capicoElem1, capicoElem2, capicoElem3],
    link: "https://bond-ivan.github.io/Capico/",
  },
  prepareASleigh: {
    title: 'Prepare-a-sleigh',
    description: t("projects.card.thirdItem.description"),
    img: PrepareASleigh,
    elems: [prepareASleight1, prepareASleight2],
    link: "https://bond-ivan.github.io/Prepare-a-sleigh/",
  },
};

export default projectData;
