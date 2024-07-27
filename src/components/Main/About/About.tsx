import { ReactElement } from "react";
import { AboutSection, AboutDescription, AboutTitle, AboutContainer } from "./About.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";

function About(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="AboutMe">
            <AboutSection>
                <AboutContainer>
                    <AboutTitle>
                        {t("about.title")}
                    </AboutTitle>
                    <AboutDescription>
                        {t("about.description")}
                    </AboutDescription>
                </AboutContainer>
            </AboutSection>
        </Element>
    );
}

export default About;