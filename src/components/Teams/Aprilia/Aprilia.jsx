import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import AE41 from "../../../img/AE41.png";
import AE41Phone from "../../../img/AE41Phone.png";
import MV12 from "../../../img/MV12.png";
import MV12Phone from "../../../img/MV12Phone.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #29ff00, #1acb1e, #159923, #166920, #143d18, #192a0f, #151806, #010100, #010100, #010000, #010000, #000000)' }} name="ALEIX ESPARGARO" wins="1" podiums="8" poles="6" avatar={AE41} phoneAvatar={AE41Phone} /* || */ name2="MAVERICK VINALES" wins2="9" podiums2="32" poles2="13" avatar2={MV12} phoneAvatar2={MV12Phone}/>
    )
}