// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function MyFunction() {
//     let links = document.getElementById("myLinks");
//     if (links.style.display === "block") {
//       links.style.display = "none";
//     } 
//     else {
//       links.style.display = "block";
//     }
// }

// export default function Navbar(props) {
//     return(
//         <nav id="navbar">
//             <div>
//                 <button class="icon" onclick="MyFunction()"></button>
//                 <Link to="/">HOME</Link>
//                 <Link to="/rules">RULES</Link>
//                 <Link to="/teams">TEAMS</Link>
//                 <Link to="/standings">STANDINGS</Link>
//                 <Link id="login" to="/login">LOGIN</Link>
//             </div>
//             <div id="myLinks">
//                 <Link to="/">HOME</Link>
//                 <Link to="/rules">RULES</Link>
//                 <Link to="/teams">TEAMS</Link>
//                 <Link to="/standings">STANDINGS</Link>
//             </div>
//         </nav>
//     ) 
// }

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav id="navbar">
      <div>
        <button className="icon" onClick={toggleLinks}></button>
        <Link to="/">HOME</Link>
        <Link to="/rules">RULES</Link>
        <Link to="/teams">TEAMS</Link>
        <Link to="/standings">STANDINGS</Link>
        <Link id="login" to="/login">
          LOGIN
        </Link>
      </div>
      <div id="myLinks" style={{ display: showLinks ? "block" : "none" }}>
        <Link to="/">HOME</Link>
        <Link to="/rules">RULES</Link>
        <Link to="/teams">TEAMS</Link>
        <Link to="/standings">STANDINGS</Link>
      </div>
    </nav>
  );
}
