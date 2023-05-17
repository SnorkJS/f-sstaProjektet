import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/rules">RULES</Link>
                <Link to="/teams">TEAMS</Link>
                <Link to="/standings">STANDINGS</Link>
                <Link id="login" to="/login">LOGIN</Link>
            </nav>
    )
   
}