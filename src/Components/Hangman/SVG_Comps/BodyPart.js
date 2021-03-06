import React from "react";
import styled from "styled-components";
import { scaleIn } from '../../../Shared/animations';

const AnimImg = styled.img`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    animation: ${props => props.anim} 0.3s ease-out both;
    display: ${props => props.display};
`;

export default ({src, display}) => <AnimImg src={src} anim={scaleIn} display={display} />