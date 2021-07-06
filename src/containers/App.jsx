import React, {useState, useEffect} from 'react';
import '../assets/styles/Apps.scss';
import Navbar from '../components/Nav/Navbar';
import Contact from '../components/Portfolio/Contact';
import Introduccion from '../components/Portfolio/Introduccion';
import Works from '../components/Portfolio/Works';
import Particles from 'react-particles-js';

const App = () => {
    return(
        <div className="App">
            <Navbar />
            <div className="container">
                <Particles

                /** Formasssssssssssssssss */ 
                    // params={{
                    //     "particles": {
                    //         "number": {
                    //             "value": 30
                    //         },
                    //         "size": {
                    //             "value": 2
                    //         },
                    //         "color": {
                    //             "value": '#e4aa48'
                    //         },
                    //         "line_linked": {
                    //             "opacity": 1
                    //         },
                    //     },
                        
                    //     "interactivity": {
                    //         "events": {
                    //             "onhover": {
                    //                 "enable": true,
                    //                 "mode": "repulse"
                    //             }
                    //         }
                    //     }
                    // }}  

                    /** Bolassssssssssssssssssssssssssssssssssss */
                    params={{
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: '#fff'
                            },
                            opacity: {
                                value: 0.5,
                                anim: {
                                    enable: true
                                }
                            },
                            size: {
                                value: 7,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 3
                                }
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                speed: 0.2
                            }
                        },
                        interactivity: {
                            events: {
                              onresize: {
                                enable: true,
                                density_auto: true,
                                density_area: 600 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                              }
                            }
                        }    
                    }}


                    // params={{
                    //     "particles": {
                    //         "number": {
                    //           "value": 80,
                    //           "density": {
                    //             "enable": true,
                    //             "value_area": 800
                    //           }
                    //         },
                    //         "color": {
                    //           "value": "#ffffff"
                    //         },
                    //         "shape": {
                    //           "type": "circle",
                    //           "stroke": {
                    //             "width": 0,
                    //             "color": "#000000"
                    //           },
                    //           "polygon": {
                    //             "nb_sides": 5
                    //           },
                    //           "image": {
                    //             "src": "img/github.svg",
                    //             "width": 100,
                    //             "height": 100
                    //           }
                    //         },
                    //         "opacity": {
                    //           "value": 0.5,
                    //           "random": false,
                    //           "anim": {
                    //             "enable": false,
                    //             "speed": 1,
                    //             "opacity_min": 0.1,
                    //             "sync": false
                    //           }
                    //         },
                    //         "size": {
                    //           "value": 2,
                    //           "random": true,
                    //           "anim": {
                    //             "enable": false,
                    //             "speed": 40,
                    //             "size_min": 0.1,
                    //             "sync": false
                    //           }
                    //         },
                    //         "line_linked": {
                    //           "enable": true,
                    //           "distance": 150,
                    //           "color": "#ffffff",
                    //           "opacity": 0.4,
                    //           "width": 1
                    //         },
                    //         "move": {
                    //           "enable": true,
                    //           "speed": 2,
                    //           "direction": "none",
                    //           "random": false,
                    //           "straight": false,
                    //           "out_mode": "out",
                    //           "bounce": false,
                    //           "attract": {
                    //             "enable": false,
                    //             "rotateX": 600,
                    //             "rotateY": 1200
                    //           }
                    //         }
                    //       },
                    //       "interactivity": {
                    //         "detect_on": "canvas",
                    //         "events": {
                    //           "onhover": {
                    //             "enable": true,
                    //             "mode": "grab"
                    //           },
                    //           "onclick": {
                    //             "enable": true,
                    //             "mode": "push"
                    //           },
                    //           "resize": true
                    //         },
                    //         "modes": {
                    //           "grab": {
                    //             "distance": 150,
                    //             "line_linked": {
                    //               "opacity": 1
                    //             }
                    //           },
                    //           "bubble": {
                    //             "distance": 400,
                    //             "size": 40,
                    //             "duration": 2,
                    //             "opacity": 8,
                    //             "speed": 3
                    //           },
                    //           "repulse": {
                    //             "distance": 200,
                    //             "duration": 0.4
                    //           },
                    //           "push": {
                    //             "particles_nb": 4
                    //           },
                    //           "remove": {
                    //             "particles_nb": 2
                    //           }
                    //         }
                    //       },
                    //       "retina_detect": true
                    // }}
                />
                <Introduccion />
                <Works /> 
                <Contact />
                
            </div>
            
        </div>
    );

};

export default App;