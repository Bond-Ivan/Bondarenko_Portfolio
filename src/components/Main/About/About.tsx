import { ReactElement } from "react";
import { AboutSection, StyledAboutDescription as AboutDescription, AboutTitle, AboutContainer } from "./About.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { animationAbout } from "../../../unitls/animation";

function About(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="AboutMe">
            <AboutSection>
                <AboutContainer>
                    <AboutTitle>
                        {t("about.title")}
                    </AboutTitle>
                    <AboutDescription
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        variants={animationAbout}
                    >
                        {t("about.description")}
                    </AboutDescription>
                </AboutContainer>
            </AboutSection>
        </Element>
    );
}

export default About;