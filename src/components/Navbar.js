
import React from "react";

import { NavLink } from "react-router-dom";

import "./navbar.css"

function Navbar(){
    return(
        <div>
            <nav>
            <NavLink to="/" >About</NavLink>
            <NavLink to="/about" >Project</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar