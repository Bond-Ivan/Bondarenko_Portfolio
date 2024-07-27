import { ReactElement } from "react";
import {
    ProjectCardInfoBack,
    ProjectCardInfoBackSpan,
    ProjectCardInfoContainer, ProjectCardInfoDescription, ProjectCardInfoImg,
    ProjectCardInfoSection, PrpjectCardInfoTitle
} from "./ProjectCardInfo.styled";
import ProjectCardDataType from "../ProjectCard.types";
import projectData from "../../../unitls/projectCardData";
import { Link, useParams } from "react-router-dom";
import { t } from "i18next";

const ProjectCardInfo = (): ReactElement => {
    const { projectId } = useParams();
    const project = projectData[projectId as keyof ProjectCardDataType];

    return (
        <ProjectCardInfoSection>
            <ProjectCardInfoBack>
                <Link to={"/"}>
                    <ProjectCardInfoBackSpan>
                        {t("button.back")}
                    </ProjectCardInfoBackSpan>
                </Link>
            </ProjectCardInfoBack>
            <ProjectCardInfoContainer>
                <PrpjectCardInfoTitle>{project.title}</PrpjectCardInfoTitle>
                <ProjectCardInfoImg src={project.img} alt="Project Image" />
                <ProjectCardInfoDescription>{project.description}</ProjectCardInfoDescription>
            </ProjectCardInfoContainer>
        </ProjectCardInfoSection>
    )
};

export default ProjectCardInfo;