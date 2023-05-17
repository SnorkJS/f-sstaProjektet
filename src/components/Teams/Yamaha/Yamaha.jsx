import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import FQ20 from "../../../img/FQ20.png";
import FM21 from "../../../img/FM21.png";

export default function Yamaha() {
    return(
        <div>
            <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #3e00ff, #3206d8, #2708b2, #1e088d, #16076a, #0f0957, #0c0744, #0d0132, #0b0128, #07011e, #030113, #000001)'}} name="FABIO QUARTARARO" wins="20" podiums="44" poles="32" avatar={FQ20} /*||*/ name2="FM21" wins2="3" podium2="16" poles2="1" avatar2={FM21}/>
        </div>
        
    )
}