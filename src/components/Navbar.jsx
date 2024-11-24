import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <NavLink
                to={"/"}
                className={({ isActive }) => { return isActive ? "active" : "inactive"}}>Home</NavLink>
            <NavLink
                to={"/about"}
                className={({ isActive }) => { return isActive ? "active" : "inactive"}}>About</NavLink>
            <NavLink
                to={"/projects"}
                className={({ isActive }) => { return isActive ? "active" : "inactive"}}>Projects</NavLink>
            <NavLink
                to={"/contact"}
                className={({ isActive }) => { return isActive ? "active" : "inactive"}}>Contact</NavLink>
        </nav>
    )
}