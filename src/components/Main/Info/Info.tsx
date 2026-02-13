import { ReactElement } from "react";
import { Element, Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import {
    InfoButton,
    InfoContainer, InfoDescription, InfoName, InfoSection,
    StyledInfoTitle
} from "./Info.styled";
import { animationInfo } from "../../../unitls/animation";
import ParticlesBackgroundGrab from "../../Particular/ParticularGrab";

function Info(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="Home">
            <InfoSection>
                <ParticlesBackgroundGrab id="particles-info"/>
                <InfoContainer>
                    <StyledInfoTitle
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        variants={animationInfo}
                    >
                        {t("info.title")}
                        <InfoName>{t("info.name")}</InfoName>
                    </StyledInfoTitle>
                    <InfoDescription>
                        {t("info.description")}
                    </InfoDescription>
                    <Link to="contacts" smooth={true} duration={500} offset={-120}>
                        <InfoButton>{t("info.button")}</InfoButton>
                    </Link>
                </InfoContainer>
            </InfoSection>
        </Element>
    );
}

export default Info;
