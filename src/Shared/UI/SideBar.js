import React from 'react';
import styled from 'styled-components';
import { rainbow } from '../animations';
import linedPaperImg from "../../Assets/Images/lined_paper.png";

const Container = styled.div`
    width: 300px;
    z-index: 1;
    height: 100vh;
    position: fixed;
    background: url(${linedPaperImg});
    right: 0px;
    top: 0px;
    transform: translateX(300px);
    border-radius: 500px 0px 0px 15px/15px 0px 15px 500px;
    border-left: 5px solid blue;
    box-shadow: -2px 0px 5px -1px rgba(0,0,0,0.75);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: translateX(0px);
    }
`
const Handle = styled.div`
    box-shadow: -2px 0px 5px -1px rgba(0,0,0,0.75);
    font-weight: bold;
    position: fixed;
    z-index: 10;
    top: 20%;
    left: -55px;
    display: block;
    width: 40px;
    font-size: 1.2rem;
    border-radius: 225px 0px 0px 50px/50px 0px 0px 225px;
    border-top: 5px solid blue;
    border-left: 5px solid blue;
    border-bottom: 5px solid blue;
    background-color: rgb(255, 248, 198);
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding: 5px 8px 5px 0px;
    box-sizing: border-box;
    animation: ${rainbow} 5s linear infinite;
`

export default ({children}) => {
    return (
        <Container>
            <Handle>More Games</Handle>
            <div style={{height: '100%', overflow: 'auto'}}>{children}</div>
        </Container>
    )
}