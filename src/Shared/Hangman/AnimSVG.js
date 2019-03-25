import React from "react";
import styled from "styled-components";
import { rollIn } from '../animations';

const AnimImg = styled.img`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    animation: ${props => props.anim} 0.6s ease-out both;
`;

export default ({src}) => <AnimImg src={src} anim={rollIn} />