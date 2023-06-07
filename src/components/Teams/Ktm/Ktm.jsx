import React from "react";
import RiderCard from "../../RiderCard/RiderCard";
import BB33 from "../../../img/BB33.png";
import BB33Phone from "../../../img/BB33Phone.png";
import JM43 from "../../../img/JM43.png";
import JM43Phone from "../../../img/JM43Phone.png";

export default function Aprilia() {
    return(
        <RiderCard //style={{ backgroundImage: 'radial-gradient(circle, #ff6300, #ca5500, #994602, #6c3506, #432406, #341a09, #241208, #110603, #0e0405, #090306, #040204, #000001)' }} // 
        style={{ backgroundImage: 'radial-gradient(circle, #ff6300, #d54624, #a6302c, #75222a, #441820, #35121c, #270c16, #1b000e, #24001a, #270028, #22003b, #000652)' }}
        name="BRAD BINDER" wins="4" podiums="9" poles="0" avatar={BB33} phoneAvatar={BB33Phone} /* || */ name2="JACK MILLER" wins2="4" podiums2="24" poles2="2" avatar2={JM43} phoneAvatar2={JM43Phone} />
    )
}