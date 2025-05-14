import "./project.scss";
import drbekri from "../../../images/drbekri2.jpeg";
import valorum from "../../../images/valorum2.jpeg";
import basketball from "../../../images/swissCentralScreen2.png";
import formation from "../../../images/formations.png";
import emma from "../../../images/emma3.jpeg";
import basket2 from "../../../images/Basket3.jpeg";
import mabonneetoile from "../../../images/yotech.jpeg";
import musicApp from "../../../images/musicAppScreen.png";
import pokeAPI from "../../../images/pokeAPIscreen.png";
import JOPredictionApp from "../../../images/screenJO2024.png";
import YoutubeApp from "../../../images/screenYoutubeApp.png";
import CV from "../../../images/Cv_ZaiFrederic2024.pdf";
import VueApp from "../../../images/screenAnnonce.png";
import jardins from  "../../../images/1001Jardins.png";
import Appnal from "../../../images/Appnal.png";
import Elezov from "../../../images/Elezov.png";
import Annecy from "../../../images/Annecy.jpeg";
import Plan from "../../../images/planO.png";
import PLO from "../../../images/PLO.png";
import Autour from "../../../images/Autour.png";
import Bitcoin from "../../../images/Bitcoin.jpg";
import Spark from "../../../images/Spark.ipynb";
import Meteo from "../../../images/meteo.jpg";
import Social from "../../../images/socialMedia.png";
import Bitcoin2 from '../../../images/file/LSTM_Bitcoin_price_prediction.ipynb';
import Bitcoin3 from '../../../images/bitcoin-image.jpg';

// Redux import
// Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaDocker,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSass,
  SiJavascript,
  SiDjango,
  SiExpress,
  SiMysql,
} from "react-icons/si";

function Project(props) {
  const { articles } = props;
  // State
  const [filter, setFilter] = useState("Front-end");

  // Events
  const handleFilterClick = (content) => {
    setFilter(content);
    console.log(filter, "ICI");
  };

  return (
    <>
      <section id="project">
        <div className="container">
          <div className="text-container">
            <p className="section-name">My projects</p>
            <ul className="project-list">
              {/* 2ème position */}
              <li>
                <Link
                  target="blank"
                  to={Bitcoin2}
                  download={Bitcoin2}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">  Predictive Bitcoin Forecasting with Deep Learning</span>
                      <p>Developed a time-series forecasting solution using LSTM networks to anticipate Bitcoin price trends. The project enables short-term prediction of market behavior by analyzing historical OHLCV data, helping anticipate potential fluctuations and support informed trading decisions.</p>
                    </div>
                    <div className="image">
                      <img src={Bitcoin3} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Python, TensorFlow/keras, Pandas, matplotlib, Scikit-learn, Google Colab, LSTM, TQDM</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 6er position */}
              <li>
                <Link
                  target="blank"
                  to='https://socialmedy.netlify.app/'
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">
                        Fullstack developement : Social Media
                      </span>
                      <p>
                      SocialMedY is an interactive social networking application, 
                      , enabling users to connect, share content and exchange ideas in real time. 
                      This project combines modern functionalities such as real-time chat, profile management and 
                      the creation of publications.
                      </p>
                    </div>
                    <div className="image">
                      <img src={Social} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>ReactJs, ViteJs, NodeJs, Express, MangoDB </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 6er position */}
              <li>
                <Link
                  target="blank"
                  to={Spark}
                  download={Spark}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">
                        Big data project
                      </span>
                      <p>
                      Apache Spark project: Analysis of global climate data 
                      from NOAA's Global Surface Summary of the Day (GSOD)
                      </p>
                    </div>
                    <div className="image">
                      <img src={Meteo} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Python, Spark, pandas, matplotlib, </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 6er position */}
              <li>
                <Link
                  target="blank"
                  to={"https://predictjo2024.netlify.app/predictions"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">
                        Data science project
                      </span>
                      <p>
                        Olympics games 2024 Prediction 
                      </p>
                    </div>
                    <div className="image">
                      <img src={JOPredictionApp} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, Flask, Python, TensorFlow, Scikit-learn, Pandas, NumPy...</span>
                    </div>
                  </div>
                </Link>
              </li>
               {/* 2ème position */}
               <li>
                <Link
                  target="blank"
                  to={"https://basketball-demo.netlify.app/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Basketball e-commerce demo </span>
                      <p>Projet Full Stack</p>
                    </div>
                    <div className="image">
                      <img src={Annecy} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, NodeJs</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 2ème position */}
              <li>
                <Link
                  target="blank"
                  to={"https://github.com/zaity74/Cours-bitcoin-Analyses-DL-Python-2"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under"> Development of a Real-Time ETL Pipeline for Predictive Bitcoin Analysis</span>
                      <p>Developed a real-time ETL pipeline that streams Binance API data into Kafka, processes it with Spark, and stores it in HDFS as Parquet files.
                      The data powers LSTM models for Bitcoin price prediction.</p>
                    </div>
                    <div className="image">
                      <img src={Bitcoin} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Docker, Python, Kafka, Spark, Hadoop, Scikit-learn, TensorFlow</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 2ème position */}
              <li>
                <Link
                  target="blank"
                  to={"https://www.autourdutemps.ch/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Autourdutemps.ch </span>
                      <p>Frontend project</p>
                    </div>
                    <div className="image">
                      <img src={Autour} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Wordpress, PHP, Elementor</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 2ème position */}
              <li>
                <Link
                  target="blank"
                  to={"https://elezov-renovation.ch/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Elezov rennovation </span>
                      <p>Frontend project</p>
                    </div>
                    <div className="image">
                      <img src={Elezov} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Wordpress, PHP, Elementor</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 1ère position */}
              <li>
                <Link
                  target="blank"
                  to={"https://amenagementplo.ch/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Aménagement Plan-les-ouates </span>
                      <p>Frontend project</p>
                    </div>
                    <div className="image">
                      <img src={PLO} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Wordpress, PHP, Elementor</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 1ère position */}
              <li>
                <Link
                  target="blank"
                  to={"https://1001jardins.ch/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">1001Jardins </span>
                      <p>Projet Front-end</p>
                    </div>
                    <div className="image">
                      <img src={jardins} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Wordpress, PHP, Elementor</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 2ème position */}
              <li>
                <Link
                  target="blank"
                  to={"https://www.appnal.ch/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Appnal </span>
                      <p>Frontend project</p>
                    </div>
                    <div className="image">
                      <img src={Appnal} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Wordpress, PHP, Elementor</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 4eme position */}
              <li>
                <Link target="blank" to={"https://www.drbekri-gynecologue.ch/"}>
                  <div className="card">
                    <div className="top">
                      <span className="under">Dr BEKRI</span>
                      <p>
                      Business project to develop a showcase site
                      for Dr. Bekri, a gynaecologist based in Meyrin. The
                      website was built using the Odoo
                      content management system (CMS), with the integration of a customised
                      graphic model.
                      </p>
                    </div>
                    <div className="image">
                      <img src={drbekri} alt="dr-bekri photo" />
                    </div>
                    <div className="bottom">
                      <span>Odoo</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 5eme position */}
              <li>
                <Link target="blank" to={"https://www.123goldexpert.ch/"}>
                  <div className="card">
                    <div className="top">
                      <span className="under">Valorum</span>
                      <p>
                        Volunteer project with Yotech, showcase site and
                        e-commerce
                        <br></br>
                      </p>
                    </div>
                    <div className="image">
                      <img src={valorum} alt="" />
                    </div>
                    <div className="bottom">
                      <span>Odoo, Python</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 7er position */}
              <li>
                <Link
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Full stack Project </span>
                      <p>
                        Online courses Wep App <br></br>
                        <Link target="blank" 
                        to={"https://github.com/zaity74/Vuejs_onlline_courses_backend/tree/main"}>Code Backend
                        </Link>
                        <br></br>
                        <Link target="blank" 
                        to={"https://github.com/zaity74/Vuejs_online_courses_app_frontend/tree/main"}>Code Frontend
                        </Link>
                      </p>
                    </div>
                    <div className="image">
                      <img src={VueApp} alt="vuejsapp-photo" />
                    </div>
                    <div className="bottom">
                      <span>Vuejs, Nodejs, Express, MangoDB</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 1er position */}
              <li>
                <Link
                  target="blank"
                  to={"https://pokemonschoolapp.netlify.app/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">PokeAPi app demo </span>
                      <p>
                        Projet scolaire front-end, création d'une une
                        application web React qui interagit avec une API
                        Pokémons, fournissant des détails sur les différentes
                        espèces de Pokémon, y compris leurs noms, types,
                        descriptions et statistiques.
                      </p>
                    </div>
                    <div className="image">
                      <img src={pokeAPI} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, PokeAPI restful API</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 3eme position */}
              <li>
                <Link
                  target="blank"
                  to={"https://youtubetoplaylist.netlify.app/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Youtube vidéo scrapper </span>
                      <p>
                        Projet d'école Full stack : Création d'une application
                        web permettant de récupérer des fichiers audio MP3 à
                        partir de vidéos YouTube via leur URL, écouter des
                        listes de lecture, et créer des playlists
                        personnalisées.
                      </p>
                    </div>
                    <div className="image">
                      <img src={YoutubeApp} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, NodeJs, Express, Mangodb</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 5eme position */}
              <li>
                <Link target="blank" to={"http://www.mabonneetoile.eco/squiz"}>
                  <div className="card">
                    <div className="top">
                      <span className="under">MaBonneEtoile </span>
                      <p>
                        {" "}
                        J'ai participé à un projet d'entreprise consistant à
                        développer un site e-commerce pour la société
                        MaBonneEtoile. Ce site a été construit en utilisant le
                        système de gestion de contenu (CMS) Odoo, avec
                        l'intégration d'une maquette graphique. Les
                        fonctionnalités de ce site comprennent la création d'une
                        boutique en ligne, la gestion des paiements, ainsi que
                        la mise en place d'un système de connexion pour les
                        utilisateurs.
                      </p>
                    </div>
                    <div className="image">
                      <img src={mabonneetoile} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>Odoo</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 6eme position */}
              <li>
                <Link target="blank" to={"https://fredmusicapp.netlify.app/"}>
                  <div className="card">
                    <div className="top">
                      <span className="under">Music App demo </span>
                      <p>
                      School front-end project using React and TypeScript,
                      which consists of a customised
                      music application. This application offers a selection of
                      music added manually. With this application,
                      you can start, stop and change tracks of
                      music at will. What's more, it has a
                      loop playback feature, allowing
                      users to listen to their favourite music over and over again
                      </p>
                    </div>
                    <div className="image">
                      <img src={musicApp} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, Typescript</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 7eme position */}
              <li>
                <Link target="blank" to={"https://emma-pierre.netlify.app/"}>
                  <div className="card card-info">
                    <div className="top">
                      <span className="under">
                      Creating and integrating a jewellery website in 4 days
                      </span>
                      <p>School project, stack challenge</p>
                    </div>
                    <div className="image">
                      <img src={emma} alt="" />
                    </div>
                    <div className="bottom">
                      <span>React, Sass</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 8eme position */}
              <li>
                <Link
                  target="blank"
                  to={"https://swissbasketdemo.netlify.app/"}
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">Basketball website demo </span>
                      <p>
                        Création d'un projet front-end en utilisant React, qui
                        est une landing page axée sur le basketball et inspirée
                        du club de basket SwissCentral Basket afin d'ameliorer
                        l'existant :{" "}
                        <Link to={"https://www.swisscentralbasketball.ch/"}>
                          Ici
                        </Link>
                        . Cette page d'accueil comprend plusieurs éléments,
                        notamment un carrousel automatique, des sections pour
                        les articles, les matchs, les classements, des cartes
                        des joueurs et une section dédiée aux sponsors.
                      </p>
                    </div>
                    <div className="image">
                      <img src={basket2} alt="basket-photo" />
                    </div>
                    <div className="bottom">
                      <span>React, Sass</span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* 9eme position */}
              <li>
                <Link to={"#"}>
                  <div className="card">
                    <div className="overlay">
                      <h4>Odoo module for customer training</h4>
                      <p>
                      Development of an internal module, dedicated to the management
                      of customer training courses on Odoo. <br></br>
                      The module was developed using the Odoo framework
                      Python. This module can be used to create training courses and
                      training sessions for each customer. It can be used to
                      enter the participants for each session, send
                      evaluations and enter the attendance of each participant.{" "}
                        <br></br>
                        And send files and emails relating to training.
                      </p>
                    </div>
                    <div className="top">
                      <p>Internship project</p>
                      <span className="under">
                        Module for formation management
                      </span>
                    </div>
                    <div className="image">
                      <img src={formation} alt="" />
                    </div>
                    <div className="bottom">
                      <span>Odoo, Python</span>
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
