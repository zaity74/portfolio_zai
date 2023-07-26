import './navbar.scss';
import { Link } from 'react-router-dom';

// Redux import 

// Hooks
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function Navbar(props) {
    // State
    const [isWindowDown, setWindowDown] = useState(false);
    // New constantes
  
    // Events
   
    // Variables
  
    return (
      <>
        <div className={'login' }>
            <div className='container'>
                <div className='logo-container'>
                    <h1>Zaï Frédéric</h1>
                    <p>Développeur web</p>
                </div>
                <div className='login-container'>
                     <div className='register'>
                          <Link className='link' to={'/'}>
                              Accueil
                          </Link>
                    </div>
                    <div className='register'>
                          <a className='link' href='#skills'>
                              Compétences
                          </a>
                    </div>
                    <div className='connexion'>
                            <a className='link' href='#project'>
                                Portfolio
                            </a>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Navbar;