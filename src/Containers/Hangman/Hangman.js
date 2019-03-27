import React, {Component} from "react";
import styled from "styled-components";
import standSvg from "../../Assets/Images/Hangman/stand.svg";
import nooseSvg from "../../Assets/Images/Hangman/noose.svg";
import headSvg from "../../Assets/Images/Hangman/head.svg";
import bodySvg from "../../Assets/Images/Hangman/body.svg";
import leftArmSvg from "../../Assets/Images/Hangman/left-arm.svg";
import rightArmSvg from "../../Assets/Images/Hangman/right-arm.svg";
import leftLegSvg from "../../Assets/Images/Hangman/left-leg.svg";
import rightLegSvg from "../../Assets/Images/Hangman/right-leg.svg";
import eyesSvg from "../../Assets/Images/Hangman/eyes.svg";
import BodyPart from "../../Components/Hangman/SVG_Comps/BodyPart"
import Button from "../../Shared/UI/Button";
// import notepaperImg from "../../Assets/Images/note-paper-optimised.svg";

const GameWrapper = styled.div`
    display: flex;
    /* flex-flow: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 100vh; */
    /* padding: 50px; */
    box-sizing: border-box;
`

const DrawingWindow = styled.div`
    position: relative;
    width: 371px;
    height: 500px;
    border: 2px solid #0047ba;
    border-radius: 20px;
    margin: 50px;
`

const KeybWordWindow = styled(DrawingWindow)`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    padding: 15px;
    box-sizing: border-box;
`

// This is just a temporary component to
// show the stubs and will be deleted later
const Stub = styled.h1`
    padding: 20px;
    background-color: rgba(255, 81, 98, 0.5);
    border-radius: 20px;
`

export default class extends Component {
    state={
        guessNr: 0
    }

    btnHandler = () => {
        if (this.state.guessNr < 9) {
            this.setState(prevState => ({guessNr: prevState.guessNr + 1}))
        } else {
            this.setState({guessNr: 0})
        }
    }

    componentDidMount() {
        // Pre-loading svg images
        let imgArray = [];
        const imgSrcArray = [
            standSvg,
            nooseSvg,
            headSvg,
            bodySvg,
            leftLegSvg,
            leftArmSvg,
            rightArmSvg,
            leftLegSvg,
            rightLegSvg,
            eyesSvg
        ];
        let i = 0;
        for (i = 0; i < imgSrcArray.length; i++) {
            imgArray[i] = new Image();
            imgArray[i].src = imgSrcArray[i];
        }
        // Initial Animation
        setTimeout(() => {
            this.interval = setInterval(() => {
                if (this.state.guessNr < 9) {
                    this.setState(prevState => ({guessNr: prevState.guessNr + 1}));
                } else {
                    clearInterval(this.interval);
                    setTimeout(() => this.setState({guessNr: 0}), 1000);
                }
            }, 100)
        }, 1000)
    }

    render() {
        const {guessNr} = this.state;
        return (
            <>
            <h1 style={{fontSize: '4rem', textDecoration: 'underline', color: '#0047ba', textAlign: 'center'}}>Hangman</h1>
            <GameWrapper>
                <DrawingWindow>
                    {guessNr >= 1 && <BodyPart src={standSvg} />}
                    {guessNr >= 2 && <BodyPart src={nooseSvg} />}
                    {guessNr >= 3 && <BodyPart src={headSvg} />}
                    {guessNr >= 4 && <BodyPart src={bodySvg} />}
                    {guessNr >= 5 && <BodyPart src={leftArmSvg} />}
                    {guessNr >= 6 && <BodyPart src={rightArmSvg} />}
                    {guessNr >= 7 && <BodyPart src={leftLegSvg} />}
                    {guessNr >= 8 && <BodyPart src={rightLegSvg} />}
                    {guessNr >= 9 && <BodyPart src={eyesSvg} />}
                </DrawingWindow>
                <KeybWordWindow>
                    <Stub>Word Component - Stub</Stub>
                    <Stub>Diana's Keyboard Component - Stub</Stub>
                <Button
                    onClick={this.btnHandler}
                >
                    Next Guess
                </Button>
                </KeybWordWindow>
            </GameWrapper>
            </>
        )
    }
}