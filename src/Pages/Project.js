import React from "react";
import Udemy from "../Images/Udemy.png";
import Zuri from "../Images/Zuri.png";
import Sushi from "../Images/Sushi.png";
import Counter from "../Images/Counter.png";
import Todo from "../Images/Todo.png";
import Calculator from "../Images/Calculatorr.png";
import Form from "../Images/Form.png";
import ProfileSearch from "../Images/ProfileSearch.png";
import Starwars from "../Images/Starwars.png";
import ReactForm from "../Images/ReactForm.png";
import SmartLend from "../Images/Smartlend.png";
import "../Styles/Project.css";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <h2>What I Have Done</h2>
        <div className="cards">
          {/* card 1 */}
          <div
            className="card1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Sushi} alt="sushi" />
            <div>
              <h2 className="title">Sushi Restaurant</h2>
              <p>
                Tech tools used: <em>HTML, CSS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Sushi-Restaurant-SH-task2"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://sushi-restaurant-sh.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>

          {/* second card */}
          <div
            className="card2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Zuri} alt="Zuri" />
            <div>
              <h2 className="title">Zuri website Clone</h2>
              <p>
                Tech tools used: <em>HTML, CSS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Zuri-website-frontend"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://mhizdhee.github.io/Zuri-website-frontend/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>

          {/* third card */}

          <div
            className="card3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Udemy} alt="udemy" />
            <div>
              <h2 className="title">Udemy Landing page Clone</h2>
              <p>
                Tech tools used: <em>HTML, CSS, Bootstrap</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/stutern-udemyy-clonee"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://mhizdhee.github.io/stutern-udemyy-clonee/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
            {/* </div> */}
          </div>

          {/* Fourth card */}
          <div
            className="card4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Counter} alt="counter" />
            <div>
              <h2 className="title">Counter Program</h2>
              <p>
                Tech tools used: <em>HTML, CSS, JS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Counter-Program-Js"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://mhizdhee.github.io/Counter-Program-Js/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* fifth card */}
          <div
            className="card5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Todo} alt="todo" />
            <div>
              <h2 className="title">Todo List</h2>
              <p>
                Tech tools used: <em>HTML, CSS, JS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a href="https://github.com/Mhizdhee/ToDo-List" target="_blank">
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a href="https://dheee-todo-list.netlify.app/" target="_blank">
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* sixth card */}

          <div
            className="card6"
            data-aos="zoom-out-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Calculator} alt="calc" />
            <div>
              <h2 className="title">Calculator</h2>
              <p>
                Tech tools used: <em>HTML, CSS, JS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Calculator-proj"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://mhizdhee.github.io/Calculator-proj/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>

          {/* seventh card */}

          <div
            className="card7"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Form} alt="form" />
            <div>
              <h2 className="title">Whogohost clone-Form Validation</h2>
              <p>
                Tech tools used: <em>HTML, CSS, JS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Form-Validation"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://cwt-form-validation.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* eighth card */}

          <div
            className="card8"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={ProfileSearch} alt="profile" />
            <div>
              <h2 className="title">Profile Search App</h2>
              <p>
                Tech tools used: <em>React, CSS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/React-Profile-Search-App"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://react-profile-search-app.vercel.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* ninth card */}
          <div
            className="card9"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Starwars} alt="sw-movie" />
            <div>
              <h2 className="title">Starwars Movie App</h2>
              <p>
                Tech tools used: <em>React, CSS</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/Star-Wars-Movie-App"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a
                  href="https://starwars-readmore.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* tenth card */}

          <div
            className="card10"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <img src={ReactForm} alt="reactform" />
            <div>
              <h2 className="title">React Form</h2>
              <p>
                Tech tools used: <em>React, CSS,Chakra UI</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Mhizdhee/myReact-Form"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a href="https://mycontactus-form.netlify.app/" target="_blank">
                  Live Site
                </a>
              </button>
            </div>
          </div>
          {/* eleventh card */}
          <div
            className="card11"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={SmartLend} alt="smartlend" />
            <div>
              <h2 className="title">Smartlend</h2>
              <p>
                Tech tools used:
                <em>React, Tailwind CSS,Formik,Flowbite,Chart.js</em>
              </p>
            </div>
            <div className="links">
              <button>
                <a
                  href="https://github.com/Busybeebee11/smartlend-app.git"
                  target="_blank"
                >
                  GITHUB
                </a>
              </button>
              <button className="btttn">
                <a href="https://smartlend-app.netlify.app/" target="_blank">
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
