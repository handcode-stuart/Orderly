import React from "react";
import { Link } from "react-router-dom";
import "./GuestNav.scss";

const GuestNav = () => {
    return (
        <div className='c-guest-nav'>
            <div className='o-container  c-guest-nav__container'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/login'>Log in</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GuestNav;
