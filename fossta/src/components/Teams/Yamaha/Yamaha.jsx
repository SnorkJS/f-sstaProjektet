import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import FQ20 from "../../../img/FQ20.png";
import FM21 from "../../../img/FM21.png";

export default function Yamaha() {
    return(
        <div>
            <RiderCard name="FQ20" avatar={FQ20} /*||*/ name2="FM21" avatar2={FM21}/>
        </div>
        
    )
}