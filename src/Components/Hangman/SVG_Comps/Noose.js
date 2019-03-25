import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import noose from "../../../Assets/Images/Hangman/noose.svg";
import {rollInTop} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={noose} anim={rollInTop}/>
    );
};
