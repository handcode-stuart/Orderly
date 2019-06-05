import React from "react";
import { Link } from "react-router-dom";

const GuestNav = () => {
    return (
        <div className='c-nav'>
            <div className='o-container  c-nav__container'>
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
