import React from 'react';
import styled from 'styled-components';
import { rainbow } from '../animations';
import linedPaperImg from "../../Assets/Images/lined_paper.png";

const Container = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* flex-wrap: nowrap; */
    /* align-items: center; */
    /* justify-content: center; */
    width: 300px;
    z-index: 1;
    height: 100vh;
    position: fixed;
    /* background-color: rgba(0, 0, 0, 0.3); */
    background: url(${linedPaperImg});
    right: 0px;
    top: 0px;
    transform: translateX(300px);
    border-radius: 500px 0px 0px 15px/15px 0px 15px 500px;
    border-left: 5px solid blue;
    box-shadow: -2px 0px 5px -1px rgba(0,0,0,0.75);
    /* box-sizing: border-box; */
    /* overflow-x: visible; */
    /* overflow-y: auto; */
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: translateX(0px);
    }
    /* &:before {
        content: 'more';
        position: fixed;
        z-index: 10;
        left: -15px;
        margin-left: -15px;
        display: block;
        width: 30px;
        height: 70px;
        background-color: red;
    } */
`
const Handle = styled.div`
    /* color: white; */
    box-shadow: -2px 0px 5px -1px rgba(0,0,0,0.75);
    font-weight: bold;
    position: fixed;
    z-index: 10;
    top: 20%;
    left: -55px;
    /* margin-left: -15px; */
    display: block;
    width: 40px;
    font-size: 1.2rem;
    /* height: 70px; */
    border-radius: 225px 0px 0px 50px/50px 0px 0px 225px;
    border-top: 5px solid blue;
    border-left: 5px solid blue;
    border-bottom: 5px solid blue;
    background-color: rgb(255, 248, 198);
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-right: 8px;
    box-sizing: border-box;
    animation: ${rainbow} 5s linear infinite;
    /* margin: auto; */
    /* text-align: left; */
`

export default ({children}) => {
    return (
        <Container>
            <Handle>More Games</Handle>
            <div style={{height: '100%', overflow: 'auto'}}>{children}</div>
        </Container>
    )
}