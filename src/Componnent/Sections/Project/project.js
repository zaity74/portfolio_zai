import './project.scss';
import drbekri from '../../../images/drbekri.png';
import valorum from '../../../images/valorum.png';
import basketball from '../../../images/basketball.png';
import formation from '../../../images/formations.png';
import emma from '../../../images/emma.png';
import basket2 from '../../../images/Basket2.jpeg';

// Redux import 
// Hooks
import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaVuejs, FaPython, FaPhp, FaNodeJs, FaDocker,
    FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiSass, SiJavascript, SiDjango, SiExpress, SiMysql } from 'react-icons/si';

function Project(props) {
    const { articles } = props;
    // State
    const [filter, setFilter] = useState("Front-end");
  
    // Events
    const handleFilterClick = (content) => {
        setFilter(content);
        console.log(filter, 'ICI');
    };
  
  
    return (
      <>
        <section id="project">
          <div className="container">
            <div className="text-container">
              <p className="section-name">Mes projets</p>
              <ul className='project-list'>
                <li>
                    <Link target='blank' to={'https://swissbasketdemo.netlify.app/'}>
                        <div className='card'>
                            <div className='top'>
                                <span className='under'>Basketball website demo 2 </span>
                                <p>Project front-end
                                </p>
                            </div>
                            <div className='image'>
                                <img src={basket2} alt='basket-photo' />
                            </div>
                            <div className='bottom'>
                                <span>React, Sass</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link target='blank' to={'https://www.drbekri-gynecologue.ch/'}>
                        <div className='card'>
                            <div className='top'>
                                <span className='under'>
                                Dr BEKRI
                                </span>
                                <p>Project entreprise, site vitrine</p>
                            </div>
                            <div className='image'>
                                <img src={drbekri} alt='dr-bekri photo' />
                            </div>
                            <div className='bottom'>
                                <span>Odoo</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link target='blank' to={'https://www.123goldexpert.ch/'}>
                        <div className='card'>
                            <div className='top'>
                                <span className='under'>
                                    Valorum
                                </span>
                                <p>Project Bénévole en companie de Yotech, site vitrine et e-commerce <br></br>
                                </p>
                            </div>
                            <div className='image'>
                                <img src={valorum} alt='' />
                            </div>
                            <div className='bottom'>
                                <span>Odoo, Python</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        <div className='card'>
                            <div className='overlay'>
                                <h4>Description</h4>
                                <p>
                                    Développement d'un module interne, dedié à la gestion des formations client sur Odoo. <br></br>
                                    Le module a été développer avec le framework Odoo Python. 
                                    Ce module permet de créer des formations et des sessions de formations pour chaque clients. 
                                    Il permet de saisir les participants à chaque sessions, envoyer des évaluations, saisir les présence de chaque participants. <br></br>
                                    Et envoyer des dossiers et mail relatifs à la formation.

                                </p>
                            </div>
                            <div className='top'>
                                <p>Project d'entreprise</p>
                                <span className='under'>Modules de gestion de formations</span>
                            </div>
                            <div className='image'>
                                <img src={formation} alt='' />
                            </div>
                            <div className='bottom'>
                                <span>Odoo, Python</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link target='blank' to={'https://emma-pierre-demo.netlify.app/'}>
                        <div className='card card-info'>
                            <div className='top'>
                            <span className='under'>Création et intégration d'un site de bijoux en 4 jours</span>
                                <p>Project scolaire, challenge stack</p>
                            </div>
                            <div className='image'>
                                <img src={emma} alt='' />
                            </div>
                            <div className='bottom'>
                                <span>Html, Css, Javascript</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link target='blank' to={'https://basketball-demo.netlify.app/'}>
                        <div className='card'>
                            <div className='top'>
                                <span className='under'>Basketball website demo </span>
                                <p>Project full stack e-commerce
                                </p>
                            </div>
                            <div className='image'>
                                <img src={basketball} alt='basket-photo' />
                            </div>
                            <div className='bottom'>
                                <span>React, NodeJs, Express, Mangodb</span>
                            </div>
                        </div>
                    </Link>
                </li>
              </ul>
            </div>
            </div>
          </section>
      </>
    );
  }
  
  export default Project;