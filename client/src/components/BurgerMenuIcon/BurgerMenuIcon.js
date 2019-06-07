import React from "react";
import "./BurgerMenuIcon.scss";

const BurgerMenuIcon = ({ handleClick }) => {
    return (
        <div className='burger-menu-icon' onClick={handleClick}>
            <span />
            <span />
            <span />
        </div>
    );
};

export default BurgerMenuIcon;
