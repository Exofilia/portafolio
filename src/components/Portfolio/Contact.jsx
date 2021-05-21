import React from 'react';
import '../../assets/styles/Contact.scss';
import email from '../../assets/static/email.png';
import githbub from '../../assets/static/github.png';
import linkedin from '../../assets/static/linkedin.png';
import codepen from '../../assets/static/codepen.png';


const Contact = () => {
    return (
        <div className="contentContact">
            <div className="title">
                 <h3 className="section-name">Contactame</h3>
            </div> 
            <div className="contact__container">

                <div className="contact-item">
                    <h4 className="contact-text">Gmail</h4>
                    <div className="contact-icon">
                        <a href="mailto:lpaocastrillon@gmail.com"><img src={email} alt="Email" /></a>
                    </div>
                </div>

                <div className="contact-item">
                    <h4 className="contact-text">Github</h4>
                    <div className="contact-icon">
                        <a href="https://github.com/lPaoCastrillon"><img src={githbub} alt="GitHub" /></a>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <h4 className="contact-text">Linkedin</h4>
                    <div className="contact-icon">
                        <a href="https://www.linkedin.com/in/paolacastrillon/"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <h4 className="contact-text">Codepen</h4>
                    <div className="contact-icon">
                        <a href="https://codepen.io/lpaocastrillon"><img src={codepen} alt="Codepen" /></a>
                    </div>
                    
                </div>
            </div>
            <div className="contentFooter">
                <div className="lineFooter"></div>
                <h4 className="textFooter">Hecho con 🤍</h4>    
            </div>
        </div>
        
       
    );
};

export default Contact;