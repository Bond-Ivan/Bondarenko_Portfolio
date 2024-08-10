import { ReactElement } from "react";
import {
    StyledProjectsSection as ProjectsSection, ProjectsDescription,
    ProjectsList, ProjectsTitle, ProjectsContainer,
} from "./Projects.styled";

import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";
import IProject from "./Projects.types";
import projectsArray from "../../../unitls/arrays/projects";

function Projects(): ReactElement {
    const { t } = useTranslation();

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