import { ReactElement, useEffect, useRef } from "react";
import { AboutSection, StyledAboutDescription as AboutDescription, AboutTitle, AboutContainer, AboutCard, AboutCardInner, AboutCardBox, AboutCardImage, AboutWrapper, AboutInner, AboutBoxTitle, AboutBoxSpan, CardText, CardTitle, CardDescription, CardList } from "./About.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { animationAbout } from "../../../unitls/animation";
import cardImg from "../../../../public/img/me.jpg";
import ParticlesBackgroundGrab from "../../Particular/ParticularGrab/ParticularGrab";

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
                <ParticlesBackgroundGrab id="particles-about" />

                <AboutContainer>
                    <AboutTitle>
                        {t("about.title")}
                    </AboutTitle>
                    <AboutWrapper>
                        <AboutCard ref={cardRef}>
                            <AboutCardInner ref={innerCardRef}>
                                <AboutCardBox ref={glareRef}></AboutCardBox>
                                <AboutCardImage src={cardImg} />
                                <CardText>
                                    <CardTitle>Ivan Bondarenko</CardTitle>
                                    <CardDescription>Web Developer</CardDescription>
                                    <CardList>
                                        <li>
                                            <a href="https://github.com/Bond-Ivan?tab=repositories" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <title>Github-fill SVG Icon</title>
                                                    <g fill="none">
                                                        <g clip-path="url(#akarIconsGithubFill0)">
                                                            <path fill="#ffffff" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="akarIconsGithubFill0">
                                                                <path fill="#fff" d="M0 0h24v24H0z" />
                                                            </clipPath>
                                                        </defs>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/frontendeeer" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                    <title>Telegram SVG Icon</title>
                                                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M40.83 8.48c1.14 0 2 1 1.54 2.86l-5.58 26.3c-.39 1.87-1.52 2.32-3.08 1.45L20.4 29.26a.4.4 0 0 1 0-.65l15.37-13.88c.7-.62-.15-.92-1.07-.36L15.41 26.54a.46.46 0 0 1-.4.05L6.82 24C5 23.47 5 22.22 7.23 21.33L40 8.69a2.2 2.2 0 0 1 .83-.21" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:bond.code@yandex.ru" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                    <title>Email SVG Icon</title>
                                                    <path fill="#ffffff" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </CardList>
                                </CardText>
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