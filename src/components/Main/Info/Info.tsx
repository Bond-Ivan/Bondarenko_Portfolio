import { ReactElement } from "react";
import { Element, Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import {
    InfoButton,
    InfoContainer, InfoDescription, InfoName, InfoSection,
    InfoTitle
} from "./Info.styled";

function Info(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="Home">
            <InfoSection>
                <InfoContainer>
                    <InfoTitle>
                        {t("info.title")}
                        <InfoName>{t("info.name")}</InfoName>
                    </InfoTitle>
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
