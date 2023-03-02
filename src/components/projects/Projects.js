import React from "react";
import {
  ProjectsContainer,
  StyledProjects,
} from "../../style/projects/ProjectStyles";
import {
  SectionHeading,
  SectionTitle,
} from "../../style/projects/sectionHeading";
import {
  StyledParagraph,
} from "../../style/projects/TypographyStyle";
import ProjectCardComponent from "./projectCard";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    // =========== projects =============
    <StyledProjects id="projects">
      {/* ========== Heading =============== */}
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      {/* =========== paragraph ============= */}
      <StyledParagraph dark="true" textAlign="center">
        <>
          Selected projects I recently worked on.
          <a
            href="https://github.com/Pradeep22222"
            target="_blank"
            rel="noopener noreferrer"
            id="link"
          >
            &nbsp; Want to see more?
          </a>
        </>
      </StyledParagraph>
      {/* ========== Projects ========== */}
      <ProjectsContainer className="project_card">
        {projectsData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};
