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

export const fadeZoomOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
    to {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
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

export const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
}
`
export const slideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`
export const flipVertFwd = keyframes`
    0% {
        transform: translateZ(0) rotateY(0);
    } 
    100% {
        transform: translateZ(160px) rotateY(180deg);
    } 
`
// export const boucneIn = keyframes`
//     0% {
//         transform: translateY(-500px);
//         animation-timing-function: ease-in;
//         opacity: 0;
//     }
//     38% {
//         transform: translateY(0);
//         animation-timing-function: ease-out;
//         opacity: 1;
//     }
//     55% {
//         transform: translateY(-65px);
//         animation-timing-function: ease-in;
//     }
//     72% {
//             transform: translateY(0);
//             animation-timing-function: ease-out;
//     }
//     81% {
//         transform: translateY(-28px);
//         animation-timing-function: ease-in;
//     }
//     90% {
//         transform: translateY(0);
//         animation-timing-function: ease-out;
//     }
//     95% {
//         transform: translateY(-8px);
//         animation-timing-function: ease-in;
//     }
//     100% {
//         transform: translateY(0);
//         animation-timing-function: ease-out;
//     }
// `;

// export const rollInTop = keyframes`
//     0% {
//         transform: translateY(-800px) rotate(-540deg) scale(0.1);
//         opacity: 0;
//     }
//     100% {
//         transform: translateY(0) rotate(0deg) scale(1);
//         opacity: 1;
//     }
// `

// export const rollInRight = keyframes`
//     0% {
//         transform: translateX(800px) rotate(540deg) scale(0.1);
//         opacity: 0;
//     }
//     100% {
//         transform: translateX(0) rotate(0deg) scale(1);
//         opacity: 1;
//     }
// `

// export const rollInLeft = keyframes`
//     0% {
//         transform: translateX(-800px) rotate(-540deg) scale(0.1);
//         opacity: 0;
//     }
//     100% {
//         transform: translateX(0) rotate(0deg) scale(1);
//         opacity: 1;
//     }
// `

// export const rollInBottom = keyframes`
//     0% {
//         transform: translateY(800px) rotate(540deg) scale(0.1);
//         opacity: 0;
//     }
//     100% {
//         transform: translateY(0) rotate(0deg) scale(1);
//         opacity: 1;
//     }
// `

// export const rollIn = keyframes`
//     0% {
//         transform: rotate(540deg) scale(0.1);
//         opacity: 0;
//     }
//     100% {
//         transform: rotate(0deg) scale(1);
//         opacity: 1;
//     }
// `

export const scaleIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`
// export const puffOut = keyframes`
//     0% {
//         transform: scale(1);
//         filter: blur(0px);
//         opacity: 1;
//     }
//     100% {
//         transform: scale(2);
//         filter: blur(2px);
//         opacity: 0;
//     }
// `

export const slideOutBlurredTop = keyframes`
    0% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 0%;
        filter: blur(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-1000px) scaleY(2) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(40px);
        opacity: 0;
    }
`
export const vibrate = keyframes`
    0% {
        transform: translate(0);
    }
    10% {
        transform: translate(-2px, -2px);
    }
    20% {
        transform: translate(2px, -2px);
    }
    30% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(2px, 2px);
    }
    50% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, -2px);
    }
    70% {
        transform: translate(-2px, 2px);
    }
    80% {
        transform: translate(-2px, -2px);
    }
    90% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
    `
export const flip = keyframes`
from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
}

40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
    rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
}

50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
    rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
}

80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
    rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
}

to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
}
`;

export const spin360 = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
`;
//animation: ${spin360} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

export const rainbow = keyframes`
    0% {
        color: rgb(255, 79, 79);
    }
    33% {
        color: rgb(79, 255, 79);
    }
    66% {
        color: rgb(79, 79, 255);
    }
    100% {
        color: rgb(255, 79, 79);
    }
`

export const animateBorders = keyframes`
    0% {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    }
    50% {
        border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
    }
    100% {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    }
`