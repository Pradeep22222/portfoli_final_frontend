import React from "react";
import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectTransitionImage,
} from "../../style/projects/ProjectStyles";

const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  codeLink,
  liveLink,
  content
}) => {
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <ProjectCard >
        <ProjectImage src={image} alt={title} />
        <ProjectTransitionImage src={transitionImage} alt={title} />
        <ProjectDetails>
          <ProjectTitle className="project_title">{title}</ProjectTitle>
          <ProjectCodeLink
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
            <LinkName>Github Code</LinkName>
          </ProjectCodeLink>
          <ProjectLiveLink
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal />
            <LinkName>Live</LinkName>
          </ProjectLiveLink>
          <p>{ content}</p>
        </ProjectDetails>
      </ProjectCard>
    </IconContext.Provider>
  );
};

export default ProjectCardComponent;
