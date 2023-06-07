import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import MM93 from "../../../img/MM93.png";
import MM93Phone from "../../../img/MM93Phone.png";
import JM36 from "../../../img/JM36.png";
import JM36Phone from "../../../img/JM36Phone.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #f6a60e, #f89f08, #fa9804, #fb9103, #fd8904, #fe8000, #fe7600, #ff6c00, #ff5d00, #ff4b00, #ff3401, #ff0707)' }} name="MARC MARQUEZ" wins="59" podiums="101" poles="65" avatar={MM93} phoneAvatar={MM93Phone} /* || */ name2="JOAN MIR" wins2="1" podiums2="13" poles2="0" avatar2={JM36} phoneAvatar2={JM36Phone}/>
    )
}