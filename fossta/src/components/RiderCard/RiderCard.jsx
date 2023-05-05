import React from "react";
import "./RiderCard.css";

export default function RiderCard(props) {
    return(
        <div id="rider-card">
            <div className="card">
                <div className="rider">
                    <img className="avatar" src={props.avatar} />
                </div>
                <div className="information">
                    <h2>{props.name}</h2>
                </div>
            </div>
            <div className="card" id="card-2">
                <div className="rider">
                    <img id="avatar2" className="avatar" src={props.avatar2} />
                </div>
                <div className="information">
                    <h2>{props.name2}</h2>
                </div>
            </div>
        </div>
    )
}