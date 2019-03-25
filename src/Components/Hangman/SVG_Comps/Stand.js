import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import stand from "../../../Assets/Images/Hangman/stand.svg";
import {rollInLeft} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={stand} /* anim={rollInLeft} *//>
    );
};
