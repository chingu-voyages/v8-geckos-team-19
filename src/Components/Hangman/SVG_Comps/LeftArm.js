import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import leftArm from "../../../Assets/Images/Hangman/left-arm.svg";
import {rollInLeft} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={leftArm} anim={rollInLeft}/>
    );
};
