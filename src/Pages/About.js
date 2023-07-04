import React, { useState } from "react";
import MyPic from "../Images/myimg.jpg";
import MyCv from "../Images/Mycv.pdf";
// import { Document, Page } from "react-pdf";
// import { Document, Page } from "react-pdf/dist/esm/entry.noworker";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "../Styles/About.css";

const About = () => {
  //to display an item
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem); // Toggle the showItem state value
  };

  //To display pdf as image

  // const pdfUrl = { MyCv };
  // const [numPages, setNumPages] = useState(null);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
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
        {showItem && (
          <div>
            <object
              width="100%"
              height="400"
              data={MyCv}
              type="application/pdf"
            ></object>
            {/* <Document file={MyCv} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={1} />
            </Document> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
