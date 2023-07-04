import React from "react";
import About from "../Pages/About";
import "../Styles/Home.css";
import Skills from "../Pages/Skills";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="contn">
          <div className="hero-bg" />
          <div
            className="text"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p>Hi, I'm</p>
            <h1>Dorcas Olaniyan</h1>

            <h3 className="role">A Frontend Developer</h3>
          </div>
          <div
            class="buttons"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <button className="btn">Projects</button>
            <button className="bttn">Contact Me</button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
