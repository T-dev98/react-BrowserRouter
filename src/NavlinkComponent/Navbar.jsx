import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navmenu">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/About"}>About</NavLink>
            <NavLink to={"/Education"}>Education</NavLink>
            <NavLink to={"/Work"}>Work</NavLink>
            <NavLink to={"/Projects"}>Projects</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
            <NavLink to={"/Signup"}>Signup</NavLink>         
        </div>
    )
}
export default Navbar;