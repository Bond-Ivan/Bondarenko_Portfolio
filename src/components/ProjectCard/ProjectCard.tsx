import { ReactElement } from "react";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCardTechnology from "./ProjectCardTechnology/ProjectCardTechnology";
import ProjectCardGallery from "./ProjectCardGallery";

function ProjectCard(): ReactElement {
  return (
    <main>
      <ProjectCardInfo />
      <ProjectCardTechnology />
      <ProjectCardGallery />
    </main>
  );
}

export default ProjectCard;