import criptoProjectImg from "../../public/img/Cripto-Project-ProjectCard.png";
import PrepareASleigh from "../../public/img/Prepare-a-sleigh-ProjectCard.png";
import Capico from "../../public/img/Capico-ProjectCard.png";
import { t } from "i18next";
import ProjectCardDataType from "../components/ProjectCard/ProjectCard.types";
import criptoProjectElem1 from "../../public/img/Cripto-Project-elem1.png";
import criptoProjectElem2 from "../../public/img/Cripto-Project-elem2.png";
import criptoProjectElem3 from "../../public/img/Cripto-Project-elem3.png";
import capicoElem1 from "../../public/img/Capico-elem1.png";
import capicoElem2 from "../../public/img/Capico-elem2.png";
import capicoElem3 from "../../public/img/Capico-elem3.png";
import prepareASleight1 from "../../public/img/Prepare-a-sleigh-elem1.png";
import prepareASleight2 from "../../public/img/Prepare-a-sleigh-elem2.png";

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
