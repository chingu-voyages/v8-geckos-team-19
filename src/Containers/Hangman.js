import React, {Component} from "react";
import styled from "styled-components";
import Stand from "../Components/Hangman/SVG_Comps/Stand";
import Noose from "../Components/Hangman/SVG_Comps/Noose";
import Head from "../Components/Hangman/SVG_Comps/Head";
import Body from "../Components/Hangman/SVG_Comps/Body";
import LeftArm from "../Components/Hangman/SVG_Comps/LeftArm";
import RightArm from "../Components/Hangman/SVG_Comps/RightArm";
import LeftLeg from "../Components/Hangman/SVG_Comps/LeftLeg";
import RightLeg from "../Components/Hangman/SVG_Comps/RightLeg";
import Button from "../Shared/UI/Button";
import notepaperImg from "../Assets/Images/note-paper-optimised.svg";

const MainWindow = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(${notepaperImg}) no-repeat center;
    background-size: 90%;
`

export default class extends Component {
    state={
        guessNr: 0
    }

    btnHandler = () => {
        if (this.state.guessNr < 8) {
            this.setState(prevState => ({guessNr: prevState.guessNr + 1}))
        } else {
            this.setState({guessNr: 0})
        }
    }

    render() {
        const {guessNr} = this.state;
        return (
            <MainWindow>
                <div style={{position: 'relative', width: '371px', height: '500px'}}>
                    {guessNr >= 1 && <Stand />}
                    {guessNr >= 2 && <Noose />}
                    {guessNr >= 3 && <Head />}
                    {guessNr >= 4 && <Body />}
                    {guessNr >= 5 && <LeftArm />}
                    {guessNr >= 6 && <RightArm />}
                    {guessNr >= 7 && <LeftLeg/>}
                    {guessNr >= 8 && <RightLeg/>}
                </div>
                <Button
                    style={{marginTop: '50px'}}
                    onClick={this.btnHandler}
                >
                    Next
                </Button>
            </MainWindow>
        )
    }
}