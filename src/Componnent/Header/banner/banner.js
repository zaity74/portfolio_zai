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
            <h3>Développeur full-stack Junior 🧑🏾‍💻</h3>
            <p>
              Récemment diplômé d'un Bachelor en informatique, je suis
              actuellement à la recherche d'un stage de 12 mois en tant que
              développeur full-stack pour finaliser mon master. Passionné par le
              code, je suis particulièrement motivé par la création
              d'applications fonctionnelles répondant à des besoins métiers
              spécifiques. Mon ambition est de devenir un développeur confirmé,
              et je suis déterminé à acquérir les compétences et l'expérience
              nécessaires pour y parvenir. Coder est pour moi bien plus qu'une
              simple activité professionnelle, c'est une véritable passion
              quotidienne qui me pousse à m'améliorer constamment et à innover.
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
