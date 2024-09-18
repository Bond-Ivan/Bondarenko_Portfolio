import { ReactElement, useEffect, useRef } from "react";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { animationInfo } from "../../../unitls/animation";
import {
    InfoContainer, InfoDescription, InfoEye, InfoEyes, InfoPupil, InfoSection,
    InfoTitle, StyledInfoWrapper as InfoWrapper
} from "./Info.styled";

function Info(): ReactElement {
    const { t } = useTranslation();
    const leftPupilRef = useRef<HTMLDivElement>(null);
    const rightPupilRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: { pageX: number; pageY: number; }) => {
            const pupils = [leftPupilRef.current, rightPupilRef.current];
            pupils.forEach((pupil) => {
                if (pupil) {
                    const rect = pupil.getBoundingClientRect();
                    const x = (e.pageX - rect.left) / 50;
                    const y = (e.pageY - rect.top) / 50;
                    if (Number(Math.round(y)) > 12) {
                        return;
                    } else {
                        pupil.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
                    }
                }
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <Element name="Home">
            <InfoSection>
                <InfoContainer>
                    <InfoEyes>
                        <InfoEye>
                            <InfoPupil ref={leftPupilRef}></InfoPupil>
                        </InfoEye>
                        <InfoEye>
                            <InfoPupil ref={rightPupilRef}></InfoPupil>
                        </InfoEye>
                    </InfoEyes>
                    <InfoWrapper
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                        variants={animationInfo}>
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
