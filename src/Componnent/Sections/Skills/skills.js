import './skills.scss';

// Redux import 
// Hooks
import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaVuejs, FaPython, FaPhp, FaNodeJs, FaDocker,
    FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiSass, SiJavascript, SiDjango, SiExpress, SiMysql } from 'react-icons/si';

function Skills(props) {
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
        <section id="skills">
          <div className="container">
            <div className="text-container">
              <p className="section-name">Mes compétences</p>
              <p>
                Récemment diplômé d'un bachelor 3 en informatique, je suis actuellement à la recherche d'un stage de 12 mois en tant que développeur full-stack
              </p>
              <ul className="skills-filter">
                <li className={`filter ${filter === 'Front-end' ? 'selected' : ''}`} onClick={() => handleFilterClick('Front-end')}>
                  <p>Front-end</p>
                </li>
                <li className={`filter ${filter === 'Back-end' ? 'selected' : ''}`} onClick={() => handleFilterClick('Back-end')}>
                  <p>Back-end</p>
                </li>
                <li className={`filter ${filter === 'Autres' ? 'selected' : ''}`} onClick={() => handleFilterClick('Autres')}>
                  <p>Autres</p>
                </li>
              </ul>
            </div>
            <div className='image-hero'>
            <ul className='skills-list'>
                {filter === 'Front-end' ? (
                    <>
                    {/* Your Front-end skills */}
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                html
                            </div>
                            <div className='card-icon'>
                                <AiFillHtml5 className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Css
                            </div>
                            <div className='card-icon'>
                                <FaCss3Alt className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Sass
                            </div>
                            <div className='card-icon'>
                                <SiSass className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Javascript
                            </div>
                            <div className='card-icon'>
                                <SiJavascript className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                React
                            </div>
                            <div className='card-icon'>
                                <FaReact className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Vuejs
                            </div>
                            <div className='card-icon'>
                                <FaVuejs className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Django
                            </div>
                            <div className='card-icon'>
                                <SiDjango className='icone' />
                            </div>
                        </div>
                    </li> 
                    </>
                ) 
                : 
                filter === 'Back-end' ?
                (
                    <>
                         {/* Your Front-end skills */}
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                python
                            </div>
                            <div className='card-icon'>
                                <FaPython className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Nodejs
                            </div>
                            <div className='card-icon'>
                                <FaNodeJs className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Php
                            </div>
                            <div className='card-icon'>
                                <FaPhp className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Express
                            </div>
                            <div className='card-icon'>
                                <SiExpress className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Mangodb
                            </div>
                            <div className='card-icon'>
                                <img src='https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png'
                                alt='mangodb-logo' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                MySql
                            </div>
                            <div className='card-icon'>
                                <SiMysql className='icone' />
                            </div>
                        </div>
                    </li>
                    </>
                )
                : 
                filter === 'Autres' ?
                (
                <>
                    {/* Your Front-end skills */}
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Docker
                            </div>
                            <div className='card-icon'>
                                <FaDocker className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Git
                            </div>
                            <div className='card-icon'>
                                <FaGitAlt className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Wordpress
                            </div>
                            <div className='card-icon'>
                                <FaWordpress className='icone' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='skills-card'>
                            <div className='info'>
                                Odoo
                            </div>
                            <div className='card-icon'>
                                <img src='https://www.cogitime.fr/wp-content/uploads/2018/02/odoo_logo-1170x585-1024x512.png' 
                                alt='logo-odoo' />
                            </div>
                        </div>
                    </li>
                </>
                ): null
                }
            </ul>
            </div>

            </div>
          </section>
      </>
    );
  }
  
  export default Skills;