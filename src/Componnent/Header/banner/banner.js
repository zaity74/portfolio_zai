import "./banner.scss";
import { gsap } from "gsap";
import codeImage from "../../../images/net2.png";
import fred from "../../../images/fred.jpeg";

// Redux import
// Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Banner(props) {
  const { articles } = props;
  // State
  // New constantes
  // New constantes

  // Page load
  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { duration: 12 } });
  //   tl.from(".text-container", {opacity: 1, ease: "bounce" });
  // }, []);

  // Events

  // Variables

  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="text-container">
            <p className="section-name">A propos</p>
            <h2 className="title">
              <span>
                Hi, recruiter !<br></br>
              </span>
              I'm frederic Zaï
            </h2>
            <div className="social">
              <Link
                target="blank"
                to={"https://www.linkedin.com/in/frederic-zai-7a8078192/"}
              >
                <FaLinkedinIn className="icone" />
              </Link>
              <Link target="blank" to={"https://github.com/zaity74"}>
                <BsGithub className="icone" />
              </Link>
            </div>
            <h3>Junior data engineer & fullstack developer🧑🏾‍💻</h3>
            <p>
            With experience across various sectors, I’ve developed a strong curiosity for business challenges, driving me to solve both
            technical and business problems using AI, data, and software engineering. My calm, analytical nature enables me to
            approach issues with serenity and collaborate effectively with teams.
            Currently in my final year of a master’s program, I’m seeking an apprenticeship for September 2025
            </p>
          </div>
          <div className="image-hero">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/6318902/pexels-photo-6318902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner-image"
              />
            </div>
            {/* <img src={codeImage} alt='banner-image'  /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
