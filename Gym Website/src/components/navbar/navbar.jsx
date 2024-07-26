import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const NavBar = () => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-300px";
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="https://i.postimg.cc/QdR1bPct/logo2.png" alt="" />
                <div>Fitness Club</div>
            </div>
            <div className="navbar-middle">
                
                <ul ref={menuRef}>
                    <div onClick={closeMenu} className="nav-mob-close"><FontAwesomeIcon icon={faXmark} /></div>
                    <li>Home</li>
                    <li>Fitness Calculator</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="navbar-right">
                <button className="navbar-btn">Call Us Now</button>
                <button className="navbar-btn">Email Us</button>
            </div>
            <div onClick={openMenu} className="nav-mob-open"><FontAwesomeIcon icon={faBars} /></div>
        </nav>
    );
}

export default NavBar;