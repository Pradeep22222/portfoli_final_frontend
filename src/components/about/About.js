import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../../style/about/AboutStyles";
import myImage from "../../assets/profile_about.png";
// import myImage from "../../assets/me2.jpeg";
import resume from "../../assets/PradeepKumarCVfinal.pdf";
import downloadIcon from "../../assets/icons/download-icon.svg";
import {
  SectionHeading,
  SectionTitle,
} from "../../style/projects/sectionHeading";
import { StyledParagraph } from "../../style/projects/TypographyStyle";

export const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer className="about_image-container">
          <AboutImage className="about_image" src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            I am Pradeep Kumar Dhital, a fresh IT graduate and a passionate
            MERN Stack developer based in Australia.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and develop responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS, Bootstrap, NodeJs
            with ExpressJs, MongoDb with mongoose, Git and GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I love programming and enjoy learning something new everyday.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              className=" button_resume"
              href={resume}
              icon={downloadIcon}
              download
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};
