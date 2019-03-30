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
import axios from 'axios';
import WordComp from "../../Components/Hangman/WordComp";

const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
`

const DrawingWindow = styled.div`
    position: relative;
    display: flex;
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
    ${props => props.animExit
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
        guessNr: 0,
        animExit: false,
        animAttention: false,
        randomWord: null,
        fetchError: null,
        round: 1,
    }

    btnHandler = () => {
        if (this.state.guessNr < 9) {
            this.setState(prevState => ({guessNr: prevState.guessNr + 1}))
        } else {
            this.setState({guessNr: 0})
        }
    }

    fetchRandomWord = () => {
        axios.get(
            'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minLength=4'+
            '&maxLength=10&api_key=b58be748b0cd0e255900b0e5b2a0bb941838def7258c93a0b'
            )
            .then(res => this.setState({randomWord: res.data}))
            // .then(res => console.log(res.data))
            .catch(err => this.setState({fetchError: err}))
    }

    componentDidMount() {
        // Initial Animation
        setTimeout(() => {
            this.interval = setInterval(() => {
                if (this.state.guessNr < 9) {
                    this.setState(prevState => ({guessNr: prevState.guessNr + 1}));
                } else {
                    clearInterval(this.interval);
                    setTimeout(() => this.setState({animExit: true}), 2000); 
                    setTimeout(() => this.setState({guessNr: 0, animExit: false}), 3000);
                }
            }, 100)
        }, 1000)
        this.fetchRandomWord();
    }

    render() {
        const {guessNr, animExit, randomWord, fetchError, round} = this.state;
        
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
                <DrawingWindow color={guessNr === 9? "red": "#0047ba"}>
                    {guessNr === 0 && <h2>Choose your first letter</h2>}
                    <GroupForAnim animExit={animExit} animAttention={guessNr === 9} display={guessNr === 0? "none": "block"}>
                        {imgSrcArray.map((part, idx) =>
                            <BodyPart key={idx} src={part} display={guessNr >= idx + 1? "block": "none"}/>
                            )}
                    </GroupForAnim>
                </DrawingWindow>
                <KeybWordWindow color="#0047ba">
                    {randomWord && <WordComp word={randomWord} />}
                    {/* <Stub>Word Component - Stub</Stub> */}
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