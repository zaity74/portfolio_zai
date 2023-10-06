import './banner.scss';
import codeImage from '../../../images/codeImage.png'
import fred from '../../../images/fred.jpeg'

// Redux import 
// Hooks
import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function Banner(props) {
    const { articles } = props;
    // State
    // New constantes
     // New constantes

    // Page load
  
    // Events
   
    // Variables

  
    return (
      <>
          <section id="banner">
            <div className='container'>
                <div className='text-container'>
                    <p className='section-name'>A propos</p>
                    <h2 className='title'>
                        Zaï Frédéric
                    </h2>
                    <div className='social'>
                        <Link target='blank' to={'https://www.linkedin.com/in/frederic-zai-7a8078192/'}><FaLinkedinIn className='icone' /></Link>
                        <Link target='blank' to={'https://github.com/zaity74'}><BsGithub className='icone' /></Link>
                    </div>
                    <h3>Développeur full-stack Junior</h3>
                    <p>Récemment dimplômé d'un bachelor 3 en informatique, je suis actuellement à la recherche d'un stage de 12 mois en tant 
                        que développeur full-stack 
                    </p>
                </div>
                <div className='image-hero'>
                <img className='avatar' src={fred} alt='banner-image'  />
                <img src={codeImage} alt='banner-image'  />
                </div>

            </div>
          </section>
      </>
    );
  }
  
  export default Banner;