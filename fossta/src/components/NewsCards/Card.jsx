import React from "react";
import "./Card.css";


export default function Card(props) {
    return(
        <div className="card">
            <span className="card-source">motogp.com</span>
            <img className="card-img" src={props.img}/>
            <h2 className="card-name">
                {props.name}
            </h2>
            {props.children}
        </div>
    )
}