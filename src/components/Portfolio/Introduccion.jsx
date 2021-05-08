import React, {useState} from 'react';

import '../../assets/styles/Introduccion.scss';
// import react from '../../assets/static/react.png';
import atom from '../../assets/static/atom.png';
import php from '../../assets/static/php.png';
import css from '../../assets/static/css.png';
import js from '../../assets/static/javascript.png';
import wordpress from '../../assets/static/wordpress.png';
import html from '../../assets/static/html.png';
import bg from '../../assets/static/coffee.jpg';
import Particles from 'react-particles-js';



const Introduccion = () => {
    //Utiliza el hook useState
    // const [buttonClicked, setButtonClicked] = useState(false);

    // handleButtonClick = () => {
    //     setButtonClicked(true)
    // }
    
    // handleClick(e) {
    //     message.info('Click on menu item.');
    //     console.log('click', e);
    // }
    

    return(
        <div className="contenedorIntroduction" >
            <div className='introduccion'>
                <div className="introduccion__item">
                    <div className="name">
                        <h1>Paola <br />Castrillón<span className="punto">.</span></h1>
                    </div>
                    <div className="containerLine">
                        <div className="line"></div>
                    </div>
                    <div className="sc_rs">
                        <a href="mailto:lpaocastrillon@gmail.com"> Gmail</a> |
                        <a href="https://www.linkedin.com/in/paolacastrillon/"> LinkedIn</a> |
                        <a href="https://codepen.io/lpaocastrillon"> CodePen</a> |
                        <a href="https://github.com/lPaoCastrillon"> GitHub</a> 
                        
                    </div>
                    <div className="container_btn_intro">
                        <button className="btn_intro">Let's do It !</button>
                    </div>
                    
                </div>
                <div className="introduccion__item">
                    <div className="name color_font">
                        <h1>Software <br /> Developer</h1>
                    </div>
                    
                    <div className="text-intro">
                        <p>"Hola, soy Ingeniera de sistemas con pasión por el desarrollo web y mobile, me especializo en construir  ' y ocasionalmente diseñar' ".</p>
                    </div>
                    <div className="intro-button">
                        <a className="btn_animation mr-btn"><b>Tecnologías</b>
                            <i><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" 
                                    height="1em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg>
                            </i>
                        </a>
                    </div>
                    <div className="tech__container">
                        <div className="tech-carousel">
                            <h5>React JS</h5>
                            <img className="tech-img" src={atom} alt="Plus Icon" title="React Js"/>
                        </div>
                        <div className="tech-carousel">
                            <h5>JavaScript</h5>
                            <img className="tech-img" src={js} alt="Plus Icon" />
                        </div>
                        <div className="tech-carousel">
                            <h5>HTML</h5>
                            <img className="tech-img" src={html} alt="Plus Icon" />
                        </div>
                    
                        <div className="tech-carousel">
                            <h5>CSS</h5>
                            <img className="tech-img" src={css} alt="Plus Icon" />
                        </div>
                        <div className="tech-carousel">
                            <h5>PHP</h5>
                            <img className="tech-img" src={php} alt="Plus Icon" />
                        </div>
                        <div className="tech-carousel">
                            <h5>WordPress</h5>
                            <img className="tech-img" src={wordpress} alt="Plus Icon" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>        
        
    );
}

export default Introduccion;