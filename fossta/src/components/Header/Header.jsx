import React from "react";
import "./Header.css";
import MM93 from "../../img/MM93.jpg";
import KTM from "../../img/KTM.jpg";

export default function Header() {
    return(
        <div>
            <img className="header-img" src={KTM}/>
        </div>
    )
}