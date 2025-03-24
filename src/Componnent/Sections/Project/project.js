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
            <p className="section-name">Mes projets</p>
            <ul className="project-list">
              {/* 6er position */}
              <li>
                <Link
                  target="blank"
                  to='https://socialmedy.netlify.app/'
                >
                  <div className="card">
                    <div className="top">
                      <span className="under">
                        Projet full stack : Social Media
                      </span>
                      <p>
                      SocialMedY est une application de réseau social interactive, 
                      permettant aux utilisateurs de se connecter, partager des contenus et échanger en temps réel. 
                      Ce projet combine des fonctionnalités modernes telles que le chat en temps réel, la gestion de profils et 
                      la création de publications. 
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
                        Projet Big data
                      </span>
                      <p>
                        Projet Apache Spark : Analyse des données climatiques mondiales 
                        de Global Surface Summary of the Day (GSOD) provenant de NOAA
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
                        Projet Data science
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
                      <span className="under"> Projet IA et Big data </span>
                      <p>Développement d’un Pipeline Big Data pour l’Analyse Prédictive du Bitcoin</p>
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
                      <p>Projet Front-end</p>
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
                      <p>Projet Front-end</p>
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
                      <p>Projet Front-end</p>
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
                      <p>Projet Front-end</p>
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
                        Projet d'entreprise visant à développer un site vitrine
                        pour le Dr. Bekri, un gynécologue basé à Meyrin. Ce site
                        a été construit à l'aide du système de gestion de
                        contenu (CMS) Odoo, avec l'intégration d'une maquette
                        graphique personnalisée.
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
                        Projet Bénévole en companie de Yotech, site vitrine et
                        e-commerce <br></br>
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
                        Projet front-end scolaire utilisant React et TypeScript,
                        qui consiste en une application de musique
                        personnalisée. Cette application offre une sélection de
                        musique ajoutée manuellement. Avec cette application,
                        vous pouvez démarrer, arrêter et changer les pistes de
                        musique à volonté. De plus, celle ci dispose d'une
                        fonctionnalité de lecture en boucle, permettant à
                        l'utilisateur d'écouter sa musique préférée de manière
                        répétée.
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
                        Création et intégration d'un site de bijoux en 4 jours
                      </span>
                      <p>Projet scolaire, challenge stack</p>
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
                      <h4>Description</h4>
                      <p>
                        Développement d'un module interne, dedié à la gestion
                        des formations client sur Odoo. <br></br>
                        Le module a été développer avec le framework Odoo
                        Python. Ce module permet de créer des formations et des
                        sessions de formations pour chaque clients. Il permet de
                        saisir les participants à chaque sessions, envoyer des
                        évaluations, saisir les présence de chaque participants.{" "}
                        <br></br>
                        Et envoyer des dossiers et mail relatifs à la formation.
                      </p>
                    </div>
                    <div className="top">
                      <p>Projet d'entreprise</p>
                      <span className="under">
                        Modules de gestion de formations
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
