import React from 'react';
import "./Header.css";

const Header = ({blackHeader}) =>{
    return(
        <header className={blackHeader ? "black" : ""}>
            <div className="header-logo">
                <a href="localhost:3000">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                     alt="Netflix"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Eu"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
