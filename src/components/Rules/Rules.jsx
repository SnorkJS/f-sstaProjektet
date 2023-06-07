import React from "react";
import "./Rules.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import RuleCard from "./RulesCard/RuleCard";
import ChequeredFlag from "../../img/ChequeredFlag.png";
import YellowFlag from "../../img/YellowFlag.png";
import RedFlag from "../../img/RedFlag.png";
import BlueFlag from "../../img/BlueFlag.jpg";
import BlackFlag from "../../img/BlackFlag.png";
import GreenFlag from "../../img/GreenFlag.png";
import WhiteFlag from "../../img/WhiteFlag.png";
import SurfaceFlag from "../../img/SurfaceFlag.png";
import RainFlag from "../../img/RainFlag.png";
import TechnicalFlag from "../../img/TechnicalFlag.png";

export default function Rules() {
    return (
        <div>
            <Navbar />
            <div id="stibidi">
                <RuleCard image={ChequeredFlag} name="Chequered Flag" description="The MotoGP chequered flag signals the end of the race with its black and white checkerboard pattern"/>
                <RuleCard image={YellowFlag} name="Yellow Flag" description="The yellow MotoGP flag warns riders of potential hazards such as crashes or objects on the track"/>
                <RuleCard image={RedFlag} name="Red Flag" description="The red MotoGP flag signifies the immediate stoppage of the session due to a significant safety concern or track conditions"/>
                <RuleCard image={BlueFlag} name="Blue Flag" description="The blue MotoGP flag signals slower riders to make way for faster riders approaching to overtake"/>
                <RuleCard image={BlackFlag} name="Black Flag" description="MotoGP black flag signals the disqualification of a rider from the race due to a serious rule violation or safety concern"/>
                <RuleCard image={GreenFlag} name="Green Flag" description=" The green MotoGP flag signifies the resumption of the race after a caution period or stoppage"/>
                <RuleCard image={WhiteFlag} name="White Flag" description="The white MotoGP flag allows riders to swap bikes during changing track conditions"/>
                <RuleCard image={SurfaceFlag} name="Surface Flag" description="The MotoGP surface flag signals that there could be debris, oil or something unatural that "/>
                <RuleCard image={RainFlag} name="Rain Flag" description="The MotoGP rain flag alerts riders to the presence of rain or wet track conditions"/>
                <RuleCard image={TechnicalFlag} name="Technical Flag" description="The MotoGP technical flag indicates a technical issue or problem with a rider's motorcycle"/>
            </div>
            <Footer />
        </div>
    )
}