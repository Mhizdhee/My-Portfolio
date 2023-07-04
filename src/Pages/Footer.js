import React from "react";
import Facebook from "../Images/facebook-brands.svg";
import Linkedln from "../Images/linkedin-brands.svg";
import Twitter from "../Images/twitter-brands.svg";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <p>Designed and Developed by Dorcas Olaniyan. </p>
        <p> All Rights Reserved.</p>
        <div class="social">
          <a href="#">
            <img src={Facebook} />
          </a>

          <a href="#">
            <img src={Linkedln} />
          </a>
          <a href="#">
            <img src={Twitter} />
          </a>
        </div>
        <p>
          Copyright &#169;Dhee 2023.
          <br />
        </p>
      </footer>
    </div>
  );
}

export default Footer;
