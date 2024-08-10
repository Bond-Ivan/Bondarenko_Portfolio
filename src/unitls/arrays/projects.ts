import criptoProject from '../../../public/img/Cripto-Project.png';
import PrepareASleigh from '../../../public/img/Prepare-a-sleigh.png';
import Capico from '../../../public/img/Capico.png';
import IProject from '../../components/Main/Projects/Projects.types';
import { t } from "i18next";

const projectsArray: IProject[] = [
    {
        projectImage: criptoProject,
        projectTitle: t("projects.firstItem.title"),
        projectDescription: t("projects.firstItem.description"),
        projectLink: "/ProjectCard/criptoProject",
        projectAlt: "Cripto-Project",
        projectCustom: 0.5,
    },
    {
        projectImage: Capico,
        projectTitle: t("projects.secondItem.title"),
        projectDescription: t("projects.secondItem.description"),
        projectLink: "/ProjectCard/capico",
        projectAlt: "Capico",
        projectCustom: 1,
    },
    {
        projectImage: PrepareASleigh,
        projectTitle: t("projects.thirdItem.title"),
        projectDescription: t("projects.thirdItem.description"),
        projectLink: "/ProjectCard/prepareASleigh",
        projectAlt: "Prepare-a-Sleigh",
        projectCustom: 1.5,
    }
];

export default projectsArray;