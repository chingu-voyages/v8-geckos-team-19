import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import body from "../../../Assets/Images/Hangman/body.svg";
import {rollInRight} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={body} anim={rollInRight}/>
    );
};
