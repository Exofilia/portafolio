import React from 'react';
import Burger from './Burguer';
import logo from '../../assets/static/logo.png';
import '../../assets/styles/Navbar.scss';

const Navbar = ({open}) => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <Burger />
        </nav>
    );
};

export default Navbar;