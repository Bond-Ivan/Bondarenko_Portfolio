import { ReactElement, useState } from "react";
import {
    AccordionBottom, ActivitySection, ActivityElem,
    ActivityList, StyledActivityTime as ActivityTime, ActivityTitle, ActivityContainer,
    ActivityCampanyLogo, CompanyLink,
    CompanyText,
    CompanyItem,
    CompanyList,
    AccordionTop,
    AccordionTitle,
    AccordionButtonIcon
} from "./Activity.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { animationActivity } from "../../../unitls/animation";
import accordionElems from "../../../unitls/constants/accordion";

function Activity(): ReactElement {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Element name="Activity">
            <ActivitySection>
                <ActivityContainer>
                    <ActivityTitle>{t("activity.title")}</ActivityTitle>
                    {accordionElems.map((item, index) => (
                        <ActivityElem key={index}>
                            <AccordionTop onClick={() => toggleAccordion(index)} aria-expanded={openIndex === index}>
                                <AccordionTitle>{t(item.title)}</AccordionTitle>
                                <ActivityTime variants={animationActivity} custom={index + 1.5}>
                                    {t(item.timeKey)}
                                </ActivityTime>
                                <AccordionButtonIcon
                                    isOpen={openIndex === index}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="yellow"></path> </g>
                                </AccordionButtonIcon>
                            </AccordionTop>
                            <AccordionBottom isOpen={openIndex === index}>
                                <ActivityList>
                                    <ActivityCampanyLogo src={item.logo} alt={item.alt} />
                                    <CompanyLink href={item.link}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z" fill="yellow"></path>
                                                <path d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z" fill="yellow"></path>
                                                <path d="M14.6928 9.30707C14.9857 9.59997 14.9857 10.0748 14.6928 10.3677L10.3677 14.6928C10.0748 14.9857 9.59997 14.9857 9.30707 14.6928C9.01418 14.3999 9.01418 13.9251 9.30707 13.6322L13.6322 9.30707C13.9251 9.01418 14.3999 9.01418 14.6928 9.30707Z" fill="yellow"></path> </g>
                                        </svg>
                                        {item.linkText}
                                    </CompanyLink>
                                    <CompanyText>{t(item.description)}</CompanyText>
                                    <CompanyList>
                                        {item.skills.map((skill, i) => <CompanyItem key={i}>{skill}</CompanyItem>)}
                                    </CompanyList>
                                </ActivityList>
                            </AccordionBottom>
                        </ActivityElem>
                    ))}
                </ActivityContainer>
            </ActivitySection>
        </Element>
    );
}

export default Activity;
