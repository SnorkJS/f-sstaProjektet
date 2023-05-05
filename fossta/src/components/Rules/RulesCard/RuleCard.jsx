import React from "react";
import "./RuleCard.css";

export default function RuleCard(props) {
    return(

            <div id="rule-card">
                <img  src={props.image}/>
                <div class="card-content">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>

    )
}