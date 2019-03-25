import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import rightLeg from "../../../Assets/Images/Hangman/right-leg.svg";
import {rollInRight} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={rightLeg} anim={rollInRight}/>
    );
};
