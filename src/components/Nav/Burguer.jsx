import React, {useState} from 'react';
import RightNav from './RightNav';
import '../../assets/styles/Burguer.scss';

const Burger = () => {
    
    const [open, setOpen] = useState(false) 

    return(
        <>
            <div className="burguer" open={open} onClick={() => setOpen(!open)}>
                <div className={`hamburger-top ${open == true ? "active" : ""}`} />
                <div className={`hamburger-center ${open == true ? "active" : ""}`} />
                <div className={`hamburger-bottom ${open == true ? "active" : ""}`} />
            </div>
            <RightNav open={open}/>
        </>
        
    );
};

export default Burger;