import React, { useState } from "react";
import MyPic from "../Images/Dheee.jpg";
import MyCv from "../Images/Mycv.pdf";
import "../Styles/About.css";

const About = () => {
  //to display an item
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    const url = MyCv;
    window.open(url, "_blank");
  };
  //   setShowItem(!showItem); // Toggle the showItem state value
  // };

  return (
    <div className="About-section">
      <img
        className="myimg"
        src={MyPic}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        alt="img"
      />
      <div
        className="paragraphs"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <p className="para">
          I am a driven and enthusiastic web developer with a strong passion for
          creating user-friendly, beautiful and responsive websites and web
          applications.
        </p>
        <br />
        <p className="para">
          I have excellent skills in HTML, CSS, JavaScript, React,
          Bootstrap,Tailwind,Chakra UI,Material UI,GIT and GITHUB and I derive
          satisfaction from collaborating with cross-functional teams to develop
          exceptional web applications, as I possess strong teamwork skills.
        </p>
        <br />
        <p className="para">
          I find great pleasure in learning and continually evolving, always
          committed to staying updated with the latest trends and best practices
          in software development. I have the ability to navigate through
          deadlines and overcome obstacles in order to deliver high-quality
          results, even under time constraints.
        </p>
        <br />
        <button className="btton" onClick={handleClick}>
          View CV
        </button>
      </div>
    </div>
  );
};

export default About;
