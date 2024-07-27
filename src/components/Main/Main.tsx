import { ReactElement } from "react";
import Info from "./Info";
import About from "./About";
import Activity from "./Activity";
import Stack from "./Stack";
import Projects from "./Projects";
import Contacts from "./Contacts";
import ProjectWrapper from "./Main.styled";
import SideBar from "../SideBar";

function Main(): ReactElement {
    return (
        <>
            <SideBar />
            <ProjectWrapper>
                <Info />
                <About />
                <Activity />
                <Stack />
                <Projects />
                <Contacts />
            </ProjectWrapper>
        </>
    );
}

export default Main;