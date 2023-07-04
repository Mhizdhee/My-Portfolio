import React from "react";
import Html from "../Images/html5.png";
import Css from "../Images/CSS.png";
import Js from "../Images/Javascript.png";
import ReactImg from "../Images/react.png";
import Tailwind from "../Images/Tailwind.png";
import Bootstrap from "../Images/logos_bootstrap.svg";
import Git from "../Images/gitt.png";
import GitHub from "../Images/git.png";
import MaterialUi from "../Images/MateriaUI.png";
// import Tailwind from "../Images/Tailwind.png";

import "../Styles/Skills.css";

const Skills = () => {
  return (
    <>
      <div>
        <h2>My Skills</h2>

        <div
          className="skill-section"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="skills">
            <img className="html" src={Html} alt="htmlimg" />
            <p>HTML5</p>
          </div>
          <div className="skills">
            <img className="css" src={Css} alt="cssimg" />
            <p>CSS3</p>
          </div>
          <div className="skills">
            <img className="js" src={Js} alt="jsimg" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skills">
            <img className="react" src={ReactImg} alt="rctimg" />
            <p>REACT</p>
          </div>
          <div className="skills">
            <img className="tailwind" src={Tailwind} alt="tailwimg" />
            <p>TAILWIND</p>
          </div>
          <div className="skills">
            <img className="boot" src={Bootstrap} alt="bootimg" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skills">
            <img className="git" src={Git} alt="gitimg" />
            <p>GIT</p>
          </div>
          <div className="skills">
            <img className="github" src={GitHub} alt="githubimg" />
            <p>GITHUB</p>
          </div>
          <div className="skills">
            <img className="mui" src={MaterialUi} alt="muiimg" />
            <p>MUI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
