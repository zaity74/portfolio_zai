import Navbar from "../../Componnent/Header/navbar/navbar";
import Banner from "../../Componnent/Header/banner/banner";
import Skills from "../../Componnent/Sections/Skills/skills";
import Project from "../../Componnent/Sections/Project/project";
import { Link, useParams } from 'react-router-dom';
import cvFred from '../../images/Cv_FZaï_versionFr.pdf';
import CV from '../../images/Cv-Zai-Frederic-internship-data-engineer-2025.pdf';
import "./index.scss";
import BackgroundBody from "../../Componnent/Background/background";
// Redux import 

// Hooks
import React, { useState, useEffect } from "react";

function Home(props) {
    // State
    // New constantes

    
  
    // Page load
    
    // Events
   
    // Variables
  
    return (
      <>
      <BackgroundBody />
      <div className='home-section'>
        <Navbar />
        <Banner />
        <div className="info">
          <div className="container">
            <ul>
              <li>
                <a className="link" href={CV} download>
                  Télécharger mon cv
                </a>
              </li>
              <li>
                <a className="link" href='#project' >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Skills />
        <Project />
        <div className="footer">
          ©Copyright Frédéric Zaï 2023
        </div>
      </div>

      </>
    );
  }
  
  export default Home;