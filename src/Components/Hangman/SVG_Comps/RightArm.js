import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import rightArm from "../../../Assets/Images/Hangman/right-arm.svg";
import {rollInRight} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={rightArm} anim={rollInRight}/>
    );
};
