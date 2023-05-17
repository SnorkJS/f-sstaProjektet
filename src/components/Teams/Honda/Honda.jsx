import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import MM93 from "../../../img/MM93.png";
import JM36 from "../../../img/JM36.png";

export default function Aprilia() {
    return(
        <RiderCard style={{ backgroundImage: 'radial-gradient(circle, #f6a60e, #f89f08, #fa9804, #fb9103, #fd8904, #fe8000, #fe7600, #ff6c00, #ff5d00, #ff4b00, #ff3401, #ff0707)' }} name="MM93" avatar={MM93} /* || */ name2="JM36" avatar2={JM36}/>
    )
}