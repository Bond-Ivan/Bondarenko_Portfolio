import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    StyledProjectItem as ProjectItem, ProjectCard, ProjectCardWrapper,
    ProjectCardImg, ProjectCardInner, ProjectCardText,
    ProjectCardLinkSpan, ProjectItemTitle
} from "./Project.styled";
import IProject from "../Projects.types";
import { animationProjects } from "../../../../unitls/animation";

const Project = ({ projectImage, projectDescription, projectLink,
    projectAlt, projectTitle, projectCustom }: IProject): ReactElement => {
    const { t } = useTranslation();
    console.log(projectLink);
    return (
        <ProjectItem
            variants={animationProjects}
            custom={projectCustom}
        >
            <ProjectCard>
                <ProjectCardWrapper>
                    <ProjectCardImg src={projectImage} alt={projectAlt} width={600} height={200} />
                    <ProjectCardInner>
                        <ProjectCardText>
                            {projectDescription}
                        </ProjectCardText>
                        <Link to={projectLink}>
                            <ProjectCardLinkSpan>{t("button.open")}</ProjectCardLinkSpan>
                        </Link>
                    </ProjectCardInner>
                </ProjectCardWrapper>
            </ProjectCard>
            <ProjectItemTitle>{projectTitle}</ProjectItemTitle>
        </ProjectItem>
    )
}

export default Project;