import React from "react";
import cssIcon from "../../img/cssIcon.svg";
import arch from "../../img/arch.svg";
import figmaIcon from "../../img/figmaIcon.svg";
import reactIcon from "../../img/reactIcon.svg";
import mysql from "../../img/mysql.svg";
import git from "../../img/git.svg";
import node from "../../img/node.svg";
import python from "../../img/python.svg";
import typescript from "../../img/typescript.svg";
import mongo from "../../img/mongo.svg";
import tux from "../../img/tux.svg";
import angular from "../../img/angular.svg";
import sass from "../../img/sass.svg";
import html from "../../img/html.svg";
import jsIcon from "../../img/jsIcon.svg";
import github from "../../img/github.svg";
import bootstrap from "../../img/bootstrap.svg";

import "./Carrousel.css";

function Carrousel() {
  return (
    <div className="slider" data-aos="fade-up" data-aos-duration="1800">
      <div className="tech">
        <div>
          <img src={cssIcon} alt="css icon" />
        </div>
        <div>
          <img src={arch} alt="javascript icon" />
        </div>
        <div>
          <img src={figmaIcon} alt="figma icon" />
        </div>
        <div>
          <img src={reactIcon} alt="react icon" />
        </div>
        <div>
          <img src={mysql} alt="react icon" />
        </div>
        <div>
          <img src={git} alt="react icon" />
        </div>
        <div>
          <img src={node} alt="react icon" />
        </div>
        <div>
          <img src={python} alt="react icon" />
        </div>
        <div>
          <img src={typescript} alt="react icon" />
        </div>
        <div>
          <img src={cssIcon} alt="css icon" />
        </div>
        <div>
          <img src={arch} alt="javascript icon" />
        </div>
        <div>
          <img src={figmaIcon} alt="figma icon" />
        </div>
        <div>
          <img src={reactIcon} alt="react icon" />
        </div>
        <div>
          <img src={mysql} alt="react icon" />
        </div>
        <div>
          <img src={git} alt="react icon" />
        </div>
        <div>
          <img src={node} alt="react icon" />
        </div>
        <div>
          <img src={python} alt="react icon" />
        </div>
        <div>
          <img src={typescript} alt="react icon" />
        </div>
      </div>
      <div className="tech tech2">
        <div>
          <img src={mongo} alt="css icon" />
        </div>
        <div>
          <img src={tux} alt="javascript icon" />
        </div>
        <div>
          <img src={angular} alt="javascript icon" />
        </div>
        <div>
          <img src={sass} alt="javascript icon" />
        </div>
        <div>
          <img src={html} alt="figma icon" />
        </div>
        <div>
          <img src={jsIcon} alt="react icon" />
        </div>
        <div>
          <img src={github} alt="react icon" />
        </div>
        <div>
          <img src={bootstrap} alt="react icon" />
        </div>
        <div>
          <img src={mongo} alt="css icon" />
        </div>
        <div>
          <img src={tux} alt="javascript icon" />
        </div>
        <div>
          <img src={angular} alt="javascript icon" />
        </div>
        <div>
          <img src={sass} alt="javascript icon" />
        </div>
        <div>
          <img src={html} alt="figma icon" />
        </div>
        <div>
          <img src={jsIcon} alt="react icon" />
        </div>
        <div>
          <img src={github} alt="react icon" />
        </div>
        <div>
          <img src={bootstrap} alt="react icon" />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
