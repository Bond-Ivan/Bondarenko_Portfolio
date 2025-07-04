import Raiffeisenbank from "../../../public/img/raiffeisenbank_logo.png";
import Domrf from "../../../public/img/domrfbank_logo.png";
import Gubkin from "../../../public/img/gubkin_logo.png";

const accordionElems = [{
    title: "raiffeisen.position",
    timeKey: "raiffeisen.time",
    logo: Raiffeisenbank,
    alt: "Логотип кампании Райфайзенбанк",
    link: "https://www.raiffeisen.ru/",
    linkText: "Raiffeisen.ru",
    description: "raiffeisen.description",
    skills: ["React", "TypeScript", "Redux", "Jest", "Figma"]
},
{
    title: "domRf.position",
    timeKey: "domRf.time",
    logo: Domrf,
    alt: "Логотип кампании Дом РФ",
    link: "https://domrfbank.ru/",
    linkText: "Дом.рф",
    description: "domRf.description",
    skills: ["Postman", "SQL", "DevTools", "Bugzilla"]
},
{
    title: "tutorSQL.position",
    timeKey: "tutorSQL.time",
    logo: Gubkin,
    alt: "Логотип Губкинского университета",
    link: "https://bond-ivan.github.io/Bondarenko_Portfolio/",
    linkText: "Bond-Ivan",
    description: "tutorSQL.description",
    skills: ["SQL", "Oracle", "DBeaver"]
}]

export default accordionElems;