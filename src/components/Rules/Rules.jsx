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
                <RuleCard image={ChequeredFlag} name="Chequered Flag" description="lolololollol"/>
                <RuleCard image={YellowFlag} name="Yellow Flag" description="lolololollol"/>
                <RuleCard image={RedFlag} name="Red Flag" description="lolololollol"/>
                <RuleCard image={BlueFlag} name="Blue Flag" description="lolololollol"/>
                <RuleCard image={BlackFlag} name="Black Flag" description="lolololollol"/>
                <RuleCard image={GreenFlag} name="Green Flag" description="lolololollol"/>
                <RuleCard image={WhiteFlag} name="White Flag" description="lolololollol"/>
                <RuleCard image={SurfaceFlag} name="Surface Flag" description="lolololollol"/>
                <RuleCard image={RainFlag} name="Rain Flag" description="lolololollol"/>
                <RuleCard image={TechnicalFlag} name="Technical Flag" description="lolololollol"/>
            </div>
            <Footer />
        </div>
    )
}