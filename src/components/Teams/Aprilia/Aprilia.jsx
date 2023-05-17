import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import AE41 from "../../../img/AE41.png";
import MV12 from "../../../img/MV12.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #29ff00, #1acb1e, #159923, #166920, #143d18, #192a0f, #151806, #010100, #010100, #010000, #010000, #000000)' }} name="AE41" avatar={AE41} /* || */ name2="MV12" avatar2={MV12}/>
    )
}