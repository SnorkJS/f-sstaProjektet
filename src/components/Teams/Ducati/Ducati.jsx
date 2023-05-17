import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import FB63 from "../../../img/FB63.png";
import EB23 from "../../../img/EB23.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #b00e0a, #9f090b, #8e050a, #7d0209, #6d0106, #610012, #540017, #46001a, #340720, #210b1f, #100716, #000001)' }} name="FB63" avatar={FB63} /* || */ name2="EB23" avatar2={EB23}/>
    )
}