import { ReactElement } from "react";
import {
    StyledProjectsSection as ProjectsSection, ProjectsDescription,
    ProjectsList, ProjectsTitle, ProjectsContainer,
} from "./Projects.styled";
import criptoProject from '../../../../public/img/Cripto-Project.jpg';
import PrepareASleigh from '../../../../public/img/Prepare-a-sleigh.jpg';
import Capico from '../../../../public/img/Capico.jpg';
import Advolatum from '../../../../public/img/Advolatum.png';
import BmPravo from '../../../../public/img/BM-Pravo.png';

import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";
import IProject from "./Projects.types";

function Projects(): ReactElement {
    const { t } = useTranslation();
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
        },
        {
            projectImage: Advolatum,
            projectTitle: t("projects.fourthItem.title"),
            projectDescription: t("projects.fourthItem.description"),
            projectLink: "/ProjectCard/advolatum",
            projectAlt: "Advolatum",
            projectCustom: 2,
        },
        {
            projectImage: BmPravo,
            projectTitle: t("projects.fifthItem.title"),
            projectDescription: t("projects.fifthItem.description"),
            projectLink: "/ProjectCard/bmPravo",
            projectAlt: "BM-Pravo",
            projectCustom: 2.5,
        }
    ];
    return (
        <Element name="Projects">
            <ProjectsSection
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
            >
                <ProjectsContainer>
                    <ProjectsTitle>{t("projects.title")}</ProjectsTitle>
                    <ProjectsDescription>{t("projects.description")}</ProjectsDescription>
                    <ProjectsList>
                        {projectsArray.map((project: IProject, index): ReactElement => {
                            return (
                                <Project
                                    key={index}
                                    projectImage={project.projectImage}
                                    projectDescription={project.projectDescription}
                                    projectLink={project.projectLink}
                                    projectAlt={project.projectAlt}
                                    projectTitle={project.projectTitle}
                                    projectCustom={project.projectCustom}
                                />
                            );
                        })}
                    </ProjectsList>
                </ProjectsContainer>
            </ProjectsSection>
        </Element>
    );
}

export default Projects;