import { ReactElement } from "react";
import { InfoContainer, InfoDescription, InfoSection, InfoTitle, InfoWrapper } from "./Info.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";


function Info(): ReactElement {
    const { t } = useTranslation();
    
    return (
        <Element name="Home">
            <InfoSection>
                <InfoContainer>
                    <InfoWrapper>
                        <InfoTitle>{t("info.title")}</InfoTitle>
                        <InfoDescription>
                            {t("info.description")}
                        </InfoDescription>
                    </InfoWrapper>
                </InfoContainer>
            </InfoSection>
        </Element>
    );
}

export default Info;