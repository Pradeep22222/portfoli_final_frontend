import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
} from "../../style/technologies/technologyStyle";
import rest from "../../assets/icons/restapi.png";
import adobe from "../../assets/icons/adobe.png";
import mongo from "../../assets/icons/mongodb.png";

const Technologies = () => {
  return (
    <TechnologiesContainer id="technologies">
      <TechnologiesHeader className="mb-5">
        Technologies I am familiar with
      </TechnologiesHeader>

      <div className="icons fw-bolder d-flex flex-wrap justify-content-around">
        <div className="skill_div">
          <i className="fa-brands fa-html5 text-warning"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-css3-alt text-primary"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-js-square text-warning"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-bootstrap text-primary"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-sass  color_pink"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-github-square"></i>
        </div>

        <div className="skill_div">
          <i className="fa-brands fa-react text-info"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-node text-success skill_div_item"></i>
        </div>
        <div className="skill_div">
          <img src={rest} alt="" className="skills_pic rest_pic" />
        </div>
        <div className="skill_div">
          <img src={mongo} alt="" className="skills_pic mongo_pic" />
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-git-alt color_git"></i>
        </div>
        <div className="skill_div">
          <i className="fa-brands fa-npm color_npm"></i>
        </div>
        <div className="skill_div">
          <img src={adobe} alt="" className="skills_pic adobe_pic" />
        </div>
      </div>
    </TechnologiesContainer>
  );
};

export default Technologies;
