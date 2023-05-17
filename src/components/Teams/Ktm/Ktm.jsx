import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import BB33 from "../../../img/BB33.png";
import JM43 from "../../../img/JM43.png";

export default function Aprilia() {
    return(
        <RiderCard //style={{ backgroundImage: 'radial-gradient(circle, #ff6300, #ca5500, #994602, #6c3506, #432406, #341a09, #241208, #110603, #0e0405, #090306, #040204, #000001)' }} // 
        style={{ backgroundImage: 'radial-gradient(circle, #ff6300, #d54624, #a6302c, #75222a, #441820, #35121c, #270c16, #1b000e, #24001a, #270028, #22003b, #000652)' }}
        name="BB33" avatar={BB33} /* || */ name2="JM43" avatar2={JM43} />
    )
}