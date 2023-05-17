import React from "react";
import "./Header.css";
import MM93 from "../../img/MM93.jpg";
import KTM from "../../img/KTM.jpg";

export default function Header() {
    return(
        <div>
            <link rel="preload" as="image" href="/static/media/KTM.dbca0db8aa61f0b9e671.jpg"></link>
            <img aria-label="picture of motorcycle" className="header-img" src={KTM}/>
        </div>
    )
}