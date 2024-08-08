import { ReactElement } from "react";
import {
    ProjectsCard, ProjectsCardImg,
    ProjectsCardInner, ProjectsCardText, ProjectsCardWrapper,
    StyledProjectsSection as ProjectsSection, ProjectsDescription, StyledProjectsItem as ProjectsItem,
    ProjectsItemTitle, ProjectsList, ProjectsTitle, ProjectsContainer, ProjectsCardLinkSpan
} from "./Projects.styled";
import criptoProjectImg from '../../../../public/img/Cripto-Project.png';
import PrepareASleigh from '../../../../public/img/Prepare-a-sleigh.png';
import Capico from '../../../../public/img/Capico.png';
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { animationProjects } from "../../../unitls/animation";

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
                        <ProjectsItem
                            variants={animationProjects}
                            custom={0.5}
                        >
                            <ProjectsCard>
                                <ProjectsCardWrapper>
                                    <ProjectsCardImg src={criptoProjectImg} alt="Cripto-Project" width={600} height={200} />
                                    <ProjectsCardInner>
                                        <ProjectsCardText>
                                            {t("projects.firstItem.description")}
                                        </ProjectsCardText>
                                        <Link to={"/ProjectCard/criptoProject"}>
                                            <ProjectsCardLinkSpan>{t("button.open")}</ProjectsCardLinkSpan>
                                        </Link>
                                    </ProjectsCardInner>
                                </ProjectsCardWrapper>
                            </ProjectsCard>
                            <ProjectsItemTitle>{t("projects.firstItem.title")}</ProjectsItemTitle>
                        </ProjectsItem>
                        <ProjectsItem
                            variants={animationProjects}
                            custom={1}
                        >
                            <ProjectsCard>
                                <ProjectsCardWrapper>
                                    <ProjectsCardImg src={Capico} alt="Cripto-Project" width={600} height={200} />
                                    <ProjectsCardInner>
                                        <ProjectsCardText>
                                            {t("projects.secondItem.description")}
                                        </ProjectsCardText>
                                        <Link to={"/ProjectCard/capico"}>
                                            <ProjectsCardLinkSpan>{t("button.open")}</ProjectsCardLinkSpan>
                                        </Link>
                                    </ProjectsCardInner>
                                </ProjectsCardWrapper>
                            </ProjectsCard>
                            <ProjectsItemTitle>{t("projects.secondItem.title")}</ProjectsItemTitle>
                        </ProjectsItem>
                        <ProjectsItem
                            variants={animationProjects}
                            custom={1.5}
                        >
                            <ProjectsCard>
                                <ProjectsCardWrapper>
                                    <ProjectsCardImg src={PrepareASleigh} alt="Cripto-Project" width={600} height={200} />
                                    <ProjectsCardInner>
                                        <ProjectsCardText>
                                            {t("projects.thirdItem.description")}
                                        </ProjectsCardText>
                                        <Link to={"/ProjectCard/prepareASleigh"}>
                                            <ProjectsCardLinkSpan>{t("button.open")}</ProjectsCardLinkSpan>
                                        </Link>
                                    </ProjectsCardInner>
                                </ProjectsCardWrapper>
                            </ProjectsCard>
                            <ProjectsItemTitle>{t("projects.thirdItem.title")}</ProjectsItemTitle>
                        </ProjectsItem>
                    </ProjectsList>
                </ProjectsContainer>
            </ProjectsSection>
        </Element>
    );
}

export default Projects;