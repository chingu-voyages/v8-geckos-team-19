import React, {Component} from "react";
import styled, {css} from "styled-components";
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
import {slideOutBlurredTop, vibrate} from "../../Shared/animations";

const GameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
`

const DrawingWindow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 371px;
    height: 500px;
    border: 4px solid ${props => props.color};
    /* border-radius: 20px; */
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    margin: 50px;
    box-sizing: border-box;
`

const GroupForAnim = styled.div`
    display: ${props => props.display};
    width: 371px;
    height: 500px;
    ${props => props.animAttention
        ? css`animation: ${vibrate} 0.5s linear infinite both;`
        : null}
    ${props => props.animationExit
        ? css`animation: ${slideOutBlurredTop} 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;`
        : null}
`

const KeybWordWindow = styled(DrawingWindow)`
    flex-flow: column;
    justify-content: space-evenly;
    width: 500px;
    padding: 15px;
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
        guessNumber: 0,
        animationExit: false,
        animAttention: false
    }

    btnHandler = () => {
        if (this.state.guessNumber < 9) {
            this.setState(prevState => ({guessNumber: prevState.guessNumber + 1}))
        } else {
            this.setState({guessNumber: 0})
        }
    }

    componentDidMount() {
        // Initial Animation
        setTimeout(() => {
            this.interval = setInterval(() => {
                if (this.state.guessNumber < 9) {
                    this.setState(prevState => ({guessNumber: prevState.guessNumber + 1}));
                } else {
                    clearInterval(this.interval);
                    setTimeout(() => this.setState({animationExit: true}), 2000); 
                    setTimeout(() => this.setState({guessNumber: 0, animationExit: false}), 3000);
                }
            }, 100)
        }, 1000)
    }

    render() {
        const {guessNumber, animationExit} = this.state;
        
        const imgSrcArray = [
            standSvg,
            nooseSvg,
            headSvg,
            bodySvg,
            leftArmSvg,
            rightArmSvg,
            leftLegSvg,
            rightLegSvg,
            eyesSvg
        ];

        return (
            <>
            <h1 style={{fontSize: '4rem', textDecoration: 'underline', color: '#0047ba', textAlign: 'center', width: '100%'}}>Hangman</h1>
            <GameWrapper>
                <DrawingWindow color={guessNumber === 9? "red": "#0047ba"}>
                    {guessNumber === 0 && <h2>Choose your first letter</h2>}
                    <GroupForAnim animationExit={animationExit} animAttention={guessNumber === 9} display={guessNumber === 0? "none": "block"}>
                        {imgSrcArray.map((part, idx) =>
                            <BodyPart key={idx} src={part} display={guessNumber >= idx + 1? "block": "none"}/>
                            )}
                    </GroupForAnim>
                </DrawingWindow>
                <KeybWordWindow color="#0047ba">
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