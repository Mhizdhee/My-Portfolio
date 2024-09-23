


import React from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of projects to show at once
    slidesToScroll: 1,
    autoplay: true, // Optional: to make it slide automatically
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="project-container">
        <h2>What I Have Done</h2>
        <Slider {...settings} className="cards-slider">
         

     {/* <div className="cards"> */}
          {/* card 1 */}
           <div
            className="card1">
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

          <div
            className="card2"
          
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

          <div
            className="card3"
         
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
          </div>

          <div
            className="card4"
        
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

          <div
            className="card5"
          
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

          <div
            className="card6"
        
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

          <div
            className="card7"
          
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

          <div
            className="card8"
          
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

          <div
            className="card9"
          
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

          <div
            className="card11"
           
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

          
        </Slider>
      </div>
      
    </>
  );
};

export default Project;
