import React from "react";
import "./RiderCard.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function RiderCard(props) {
    return(
        <div id="rider-card">
            <Navbar />
            <div className="container">
                <div className="card">
                    <div className="rider" style={props.style}>
                        <img className="avatar" src={props.avatar} />
                        <img className="phone-avatar" src={props.phoneAvatar} />
                    </div>
                    <div className="information">
                        <h2>{props.name}</h2>
                        <h3>Wins: {props.wins}</h3>
                        <h3>Podiums: {props.podiums}</h3>
                        <h3>Pole: {props.poles}</h3>
                    </div>
                </div>
                <div className="card" id="card2">
                    <div className="rider" style={props.style}>
                        <img className="avatar" src={props.avatar2} />
                        <img className="phone-avatar" src={props.phoneAvatar2} />
                    </div>
                    <div className="information">
                        <h2>{props.name2}</h2>
                        <h3>Wins: {props.wins2}</h3>
                        <h3>Podiums: {props.podiums2}</h3>
                        <h3>Pole: {props.poles2}</h3>
                    </div>
                </div>
            </div>
        </div> 
    )
}