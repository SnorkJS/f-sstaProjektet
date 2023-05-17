import React from "react";
import "./TeamCard.css";

export default function TeamCard(props) {
    return(
        <div style={props.style} className="team-card">
                <img src={props.img}/>
        </div>
    )
}