import { ReactElement, useEffect, useRef } from "react";
import { AboutSection, StyledAboutDescription as AboutDescription, AboutTitle, AboutContainer, AboutCard, AboutCardInner, AboutCardBox, AboutCardImage, AboutWrapper, AboutInner, AboutBoxTitle, AboutBoxSpan } from "./About.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { animationAbout } from "../../../unitls/animation";
import cardImg from "../../../../public/img/cardAbout.gif";

function About(): ReactElement {
    const { t } = useTranslation();
    const cardRef = useRef<HTMLDivElement>(null);
    const innerCardRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const innerCard = innerCardRef.current;

        const calculateAngle = (e: MouseEvent) => {
            if (card && innerCard) {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                const halfWidth = card.clientWidth / 2;
                const halfHeight = card.clientHeight / 2;

                const calcAngleX = (y - halfHeight) / 22;
                const calcAngleY = (x - halfWidth) / 22;

                innerCard.style.transform = `rotateY(${calcAngleY}deg) rotateX(${-calcAngleX}deg) scale(1.05)`;
                glareRef.current!.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.103), transparent)`;
            }
        };

        const handleMouseLeave = () => {
            if (innerCard) {
                innerCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
                glareRef.current!.style.background = `none`;
            }
        };

        if (card) {
            card.addEventListener('mousemove', calculateAngle);
            card.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', calculateAngle);
                card.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);
    return (
        <Element name="AboutMe">
            <AboutSection>
                <AboutContainer>
                    <AboutTitle>
                        {t("about.title")}
                    </AboutTitle>
                    <AboutWrapper>
                        <AboutCard ref={cardRef}>
                            <AboutCardInner ref={innerCardRef}>
                                <AboutCardBox ref={glareRef}></AboutCardBox>
                                <AboutCardImage src={cardImg} />
                            </AboutCardInner>
                        </AboutCard>
                        <AboutInner>
                            <AboutBoxTitle>
                                {t("about.boxTitle")}
                                <AboutBoxSpan>{t("about.boxSpan")}</AboutBoxSpan>
                            </AboutBoxTitle>
                            <AboutDescription
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                variants={animationAbout}
                            >
                                {t("about.description")}
                            </AboutDescription>
                            <AboutDescription
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                variants={animationAbout}
                            >
                                {t("about.secondDescription")}
                            </AboutDescription>
                        </AboutInner>
                    </AboutWrapper>
                </AboutContainer>
            </AboutSection>
        </Element>
    );
}

export default About;