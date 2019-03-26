import { keyframes } from "styled-components";

export const fadeZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
        }
    to {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
        filter: blur(30px);
        }
    to {
        opacity: 1;
        filter: blur(0px);
        }
`;

export const boucneIn = keyframes`
    0% {
        transform: translateY(-500px);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        transform: translateY(0);
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        transform: translateY(-65px);
        animation-timing-function: ease-in;
    }
    72% {
            transform: translateY(0);
            animation-timing-function: ease-out;
    }
    81% {
        transform: translateY(-28px);
        animation-timing-function: ease-in;
    }
    90% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    95% {
        transform: translateY(-8px);
        animation-timing-function: ease-in;
    }
    100% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
`;

export const rollInTop = keyframes`
    0% {
        transform: translateY(-800px) rotate(-540deg) scale(0.1);
        opacity: 0;
    }
    100% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 1;
    }
`

export const rollInRight = keyframes`
    0% {
        transform: translateX(800px) rotate(540deg) scale(0.1);
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotate(0deg) scale(1);
        opacity: 1;
    }
`

export const rollInLeft = keyframes`
    0% {
        transform: translateX(-800px) rotate(-540deg) scale(0.1);
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotate(0deg) scale(1);
        opacity: 1;
    }
`

export const rollInBottom = keyframes`
    0% {
        transform: translateY(800px) rotate(540deg) scale(0.1);
        opacity: 0;
    }
    100% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 1;
    }
`

export const rollIn = keyframes`
    0% {
        transform: rotate(540deg) scale(0.1);
        opacity: 0;
    }
    100% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
`

export const scaleIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`
