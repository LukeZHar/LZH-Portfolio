import React, { useState } from 'react';
import '../styles/header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="heading" id="heading">
            <div className="logo">
                <NavLink to="/">
                    <img src={require("../assets/L.H.png")} alt="my logo" />
                </NavLink>
            </div>
            <div className="toggle-button" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`nav-bar ${isOpen ? 'active' : 'hidden'}`}>
                <NavLink
                    to={"/"}
                    className={({ isActive }) => { return isActive ? "active" : "inactive" }}>Home</NavLink>
                <NavLink
                    to={"/about"}
                    className={({ isActive }) => { return isActive ? "active" : "inactive" }}>About</NavLink>
                <NavLink
                    to={"/projects"}
                    className={({ isActive }) => { return isActive ? "active" : "inactive" }}>Projects</NavLink>
                <NavLink
                    to={"/contact"}
                    className={({ isActive }) => { return isActive ? "active" : "inactive" }}>Contact</NavLink>
            </nav>
        </header>
    )
}