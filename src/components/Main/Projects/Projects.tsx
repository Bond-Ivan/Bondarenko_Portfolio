import { ReactElement, useState } from "react";
import {
    StyledProjectsSection as ProjectsSection, ProjectsTitle,
    ProjectsContainer, SwiperProjects, StyledSwiperSlide,
    ProjectTab,
    ProjectsWrapper,
    ProjectTabTitle,
    ProjectTabButton,
    ProjectTabText,
    ProjectTabTitleSpan,
    ProjectTabWrapper,
    ProjectTabLink,
} from "./Projects.styled";

import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Swiper from "swiper";
import ParticlesBackgroundGrab from "../../Particular/ParticularGrab";

function Projects(): ReactElement {
    const { t } = useTranslation();
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper: Swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    return (
        <Element name="Projects">
            <ProjectsSection
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
            >
                <ParticlesBackgroundGrab id="particles-projects" />
                <ProjectsContainer>
                    <ProjectsTitle>{t("projects.title")}</ProjectsTitle>
                    <ProjectsWrapper>
                        <SwiperProjects
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                        >
                            <StyledSwiperSlide></StyledSwiperSlide>
                            <StyledSwiperSlide></StyledSwiperSlide>
                            <StyledSwiperSlide></StyledSwiperSlide>
                            <StyledSwiperSlide></StyledSwiperSlide>
                            <StyledSwiperSlide></StyledSwiperSlide>
                        </SwiperProjects>
                        <ProjectTabWrapper>
                            {activeSlide === 0 &&
                                <ProjectTab>
                                    <ProjectTabTitle>
                                        {t("projects.tab.title.firstItem.text")}
                                        <ProjectTabTitleSpan>{t("projects.tab.title.firstItem.name")}</ProjectTabTitleSpan>
                                    </ProjectTabTitle>
                                    <ProjectTabText>
                                        {t("projects.tab.text.firstItem")}
                                    </ProjectTabText>
                                    <ProjectTabButton>
                                        <ProjectTabLink href="https://bond-ivan.github.io/Advolatum/" target="_blank">
                                            {t("projects.tab.button")}
                                        </ProjectTabLink>
                                    </ProjectTabButton>
                                </ProjectTab>}
                            {activeSlide === 1 &&
                                <ProjectTab>
                                    <ProjectTabTitle>
                                        {t("projects.tab.title.secondItem.text")}
                                        <ProjectTabTitleSpan>{t("projects.tab.title.secondItem.name")}</ProjectTabTitleSpan>
                                    </ProjectTabTitle>
                                    <ProjectTabText>
                                        {t("projects.tab.text.secondItem")}
                                    </ProjectTabText>
                                    <ProjectTabButton>
                                        <ProjectTabLink href="https://bond-ivan.github.io/Prepare-a-sleigh/" target="_blank">
                                            {t("projects.tab.button")}
                                        </ProjectTabLink>
                                    </ProjectTabButton>
                                </ProjectTab>}
                            {activeSlide === 2 &&
                                <ProjectTab>
                                    <ProjectTabTitle>
                                        {t("projects.tab.title.thirdItem.text")}
                                        <ProjectTabTitleSpan>{t("projects.tab.title.thirdItem.name")}</ProjectTabTitleSpan>
                                    </ProjectTabTitle>
                                    <ProjectTabText>
                                        {t("projects.tab.text.thirdItem")}
                                    </ProjectTabText>
                                    <ProjectTabButton>
                                        <ProjectTabLink href="https://bond-ivan.github.io/Capico/" target="_blank">
                                            {t("projects.tab.button")}
                                        </ProjectTabLink>
                                    </ProjectTabButton>
                                </ProjectTab>}
                            {activeSlide === 3 &&
                                <ProjectTab>
                                    <ProjectTabTitle>
                                        {t("projects.tab.title.fourthItem.text")}
                                        <ProjectTabTitleSpan>{t("projects.tab.title.fourthItem.name")}</ProjectTabTitleSpan>
                                    </ProjectTabTitle>
                                    <ProjectTabText>
                                        {t("projects.tab.text.fourthItem")}
                                    </ProjectTabText>
                                    <ProjectTabButton>
                                        <ProjectTabLink href="https://bond-ivan.github.io/Cripto-Project/" target="_blank">
                                            {t("projects.tab.button")}
                                        </ProjectTabLink>
                                    </ProjectTabButton>
                                </ProjectTab>}
                            {activeSlide === 4 &&
                                <ProjectTab>
                                    <ProjectTabTitle>
                                        {t("projects.tab.title.fifthItem.text")}
                                        <ProjectTabTitleSpan>{t("projects.tab.title.fifthItem.name")}</ProjectTabTitleSpan>
                                    </ProjectTabTitle>
                                    <ProjectTabText>
                                        {t("projects.tab.text.fifthItem")}
                                    </ProjectTabText>
                                    <ProjectTabButton>
                                        <ProjectTabLink href="https://bond-ivan.github.io/bm-pravo/" target="_blank">
                                            {t("projects.tab.button")}
                                        </ProjectTabLink>
                                    </ProjectTabButton>
                                </ProjectTab>}
                        </ProjectTabWrapper>
                    </ProjectsWrapper>
                </ProjectsContainer>
            </ProjectsSection>
        </Element>
    );
}

export default Projects;