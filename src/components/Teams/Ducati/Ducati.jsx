import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import FB63 from "../../../img/FB63.png";
import FB63Phone from "../../../img/FB63Phone.png";
import EB23 from "../../../img/EB23.png";
import EB23Phone from "../../../img/EB23Phone.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #b00e0a, #9f090b, #8e050a, #7d0209, #6d0106, #610012, #540017, #46001a, #340720, #210b1f, #100716, #000001)' }} name="FRANCESCO BAGNAIA" wins="15" podiums="26" poles="15" avatar={FB63} phoneAvatar={FB63Phone} /* || */ name2="ENEA BASTIANINI" wins2="4" podiums2="8" poles2="1" avatar2={EB23} phoneAvatar2={EB23Phone}/>
    )
}