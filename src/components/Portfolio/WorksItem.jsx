import React from 'react';
import '../../assets/styles/WorksItem.scss';
import githbub from '../../assets/static/github_tm.png';
import laptop from '../../assets/static/laptop.png';


const WorksItem = ({ encab, title, image, date, descrip }) => (
    
        <div className="carousel-item">
            {/* <div className="encabezado">{encab}</div> */}
            <div className="carousel-title">{title}</div>
            <div className="carousel-description">
                <p>{descrip}</p>
            </div>
            <div className="carousel-icon">
                <img src={image} alt="Plus Icon" /> 
            </div>
            {/* <div className="carousel-date"><h4>{date}</h4></div> */}
            
            <div className="content-icon">
                <div className="project-button">Demo
                    <div className="button-img-github"><img src={laptop} alt="Plus Icon" /></div>
                </div>
                <div className="project-button">Código
                    <div className="button-img-github"><img src={githbub} alt="Plus Icon" /></div>
                </div>
            
            </div>
                        
        </div>
        
    
    
)

export default WorksItem;