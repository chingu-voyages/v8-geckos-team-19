import React, {Component} from "react";
import styled from "styled-components";
import Stand from "../../Components/Hangman/SVG_Comps/Stand";
import Noose from "../../Components/Hangman/SVG_Comps/Noose";
import Head from "../../Components/Hangman/SVG_Comps/Head";
import Body from "../../Components/Hangman/SVG_Comps/Body";
import LeftArm from "../../Components/Hangman/SVG_Comps/LeftArm";
import RightArm from "../../Components/Hangman/SVG_Comps/RightArm";
import LeftLeg from "../../Components/Hangman/SVG_Comps/LeftLeg";
import RightLeg from "../../Components/Hangman/SVG_Comps/RightLeg";

const MainWindow = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export default class extends Component {
    state={
        guessNr: 0
    }

    render() {
        return (
            <MainWindow>
                <div style={{position: 'relative', border: '1px solid red'}}>
                    <Stand />
                    <Noose />
                    <Head />
                    <Body />
                    <LeftArm />
                    <RightArm />
                    <LeftLeg/>
                    <RightLeg/>
                </div>
            </MainWindow>
        )
    }
}