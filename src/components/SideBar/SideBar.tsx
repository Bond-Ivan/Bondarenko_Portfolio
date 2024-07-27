import { ReactElement } from "react";
import { SideBarContainer, SideBarItem, SideBarItemText, SideBarList } from "./SideBar.styled";
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";

function SideBar(): ReactElement {
    const { t } = useTranslation();

    return (
        <SideBarContainer>
            <SideBarList>
                <SideBarItem>
                    <Link to="Home" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.home")}</SideBarItemText>
                    </Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="AboutMe" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.about")}</SideBarItemText>
                    </Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="Activity" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.activity")}</SideBarItemText>
                    </Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="Stack" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.stack")}</SideBarItemText>
                    </Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="Projects" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.projects")}</SideBarItemText>
                    </Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="contacts" smooth={true} duration={500} offset={-50}>
                        <SideBarItemText>{t("sideBar.contacts")}</SideBarItemText>
                    </Link>
                </SideBarItem>
            </SideBarList>
        </SideBarContainer>
    );
}

export default SideBar;