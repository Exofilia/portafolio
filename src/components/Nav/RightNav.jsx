import React from 'react';
import '../../assets/styles/RightNav.scss';

const RightNav = ({open}) => {
    
    // console.log('open', open);
    return(
        <ul className={`transform-nav ${open == true ? "active" : ""}`} open={open}>
            <li className="color_menu">{open}Inicio</li>
            <li className="color_menu">Acerca de Mi</li>
            <li className="color_menu">Trabajos</li>
            <li className="color_menu">Contactame</li>
        </ul>
    );
};

export default RightNav;