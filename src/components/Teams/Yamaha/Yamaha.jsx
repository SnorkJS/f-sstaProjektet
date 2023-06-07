import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import FQ20 from "../../../img/FQ20.png";
import FQ20Phone from "../../../img/FQ20Phone.png";
import FM21 from "../../../img/FM21.png";
import FM21Phone from "../../../img/FM21Phone.png";


export default function Yamaha() {
    return(
        <div>
            <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #3e00ff, #3206d8, #2708b2, #1e088d, #16076a, #0f0957, #0c0744, #0d0132, #0b0128, #07011e, #030113, #000001)'}} name="FABIO QUARTARARO" wins="11" podiums="29" poles="16" avatar={FQ20} phoneAvatar={FQ20Phone} /*||*/ name2="FRANCO MORBIDELLI" wins2="3" podiums2="6" poles2="2" avatar2={FM21} phoneAvatar2={FM21Phone}/>
        </div>
        
    )
}