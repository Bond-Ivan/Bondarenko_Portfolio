import { ReactElement, useState } from "react";
import {
    AccordionBottom, ActivitySection, ActivityElem,
    ActivityList, StyledActivityTime as ActivityTime, ActivityTitle, ActivityContainer,
    ActivityCampanyLogo, CompanyLink,
    CompanyText,
    CompanyItem,
    CompanyList,
    AccordionTop,
    AccordionTitle
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
                                <AccordionTitle>{item.title}</AccordionTitle>
                                <ActivityTime variants={animationActivity} custom={index + 1.5}>
                                    {t(`activity.${item.timeKey}`)}
                                </ActivityTime>
                            </AccordionTop>
                            <AccordionBottom isOpen={openIndex === index}>
                                <ActivityList>
                                    <ActivityCampanyLogo src={item.logo} alt={item.alt} />
                                    <CompanyLink href={item.link}>
                                        {item.svg}
                                        {item.linkText}
                                    </CompanyLink>
                                    <CompanyText>{item.description}</CompanyText>
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
