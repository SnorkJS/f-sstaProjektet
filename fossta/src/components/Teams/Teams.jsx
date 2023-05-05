import React from "react";
import { Link } from "react-router-dom";
import "./Teams.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Ducati from "../../img/DucatiLogo.svg";
import Yamaha from "../../img/YamahaLogo.svg";
import Ktm from "../../img/KtmLogo.svg";
import Honda from "../../img/HondaLogo.svg";
import Aprilia from "../../img/ApriliaLogo.svg";
import TeamCard from "../TeamCards/TeamCard";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Teams() {
    return(
        <div>
            <ScrollToTop />
            <Navbar />
            <div className="team-container">
                <Link to="/ducati">
                    <TeamCard style={{ backgroundColor: "#b00e0a" }} img={Ducati}/>
                </Link>
                <Link to="/yamaha">
                    <TeamCard style={{ backgroundColor: "#000190" }} img={Yamaha}/>
                </Link>
                <Link to="/ktm">
                    <TeamCard style={{ backgroundColor: "#001d46" }} img={Ktm}/>
                </Link>
                <Link to="/aprilia">
                    <TeamCard style={{ backgroundImage: "radial-gradient(circle, #e20714, #e20714, #e20714, #e20714, #e20714, #ac0025, #730b25, #3b101b, #000000)" }} img={Aprilia}/>
                </Link>
                <Link to="/honda">
                    <TeamCard style={{ backgroundColor: "#f6a60e" }} img={Honda}/>
                </Link> 
            </div>
            <Footer />
        </div>
    )
}