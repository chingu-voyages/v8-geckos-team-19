import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import leftLeg from "../../../Assets/Images/Hangman/left-leg.svg";
import {rollInLeft} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={leftLeg} anim={rollInLeft}/>
    );
};
