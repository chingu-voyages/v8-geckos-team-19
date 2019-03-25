import React from "react";
import AnimSVG from "../../../Shared/Hangman/AnimSVG";
import head from "../../../Assets/Images/Hangman/head.svg";
import {rollInTop} from "../../../Shared/animations";

export default () => {
    return (
        <AnimSVG src={head} anim={rollInTop}/>
    );
};
