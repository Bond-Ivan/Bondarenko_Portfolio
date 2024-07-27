import { ReactElement } from "react";
import {
    ProjectCarGalleryTitle, ProjectCardGalleryContainer, ProjectCardGalleryList,
    ProjectCardListImg, ProjectCardGalleryListItem, ProjectCardGallerySection, ProjectCardLinkText, ProjectCardLinkContent
} from "./ProjectCardGallery.styled";
import { useParams } from "react-router-dom";
import ProjectCardDataType from "../ProjectCard.types";
import projectData from "../../../unitls/projectCardData";
import { t } from "i18next";

const ProjectCardGallery = (): ReactElement => {
    const { projectId } = useParams();
    const project = projectData[projectId as keyof ProjectCardDataType];

    return (
        <ProjectCardGallerySection>
            <ProjectCardGalleryContainer>
                <ProjectCarGalleryTitle>{t("projects.card.gallery")}</ProjectCarGalleryTitle>
                <ProjectCardGalleryList>
                    {project.elems.map((item, index) => {
                        return (
                            <ProjectCardGalleryListItem key={index}>
                                <ProjectCardListImg src={item} alt="Project Elem Img" />
                            </ProjectCardGalleryListItem>
                        )
                    })}
                </ProjectCardGalleryList>
                <ProjectCardLinkText>{t("projects.card.link.description")}</ProjectCardLinkText>
                <ProjectCardLinkContent href={project.link} target="_blank">{t("projects.card.link.content")}</ProjectCardLinkContent>
            </ProjectCardGalleryContainer>
        </ProjectCardGallerySection>
    )
};

export default ProjectCardGallery;