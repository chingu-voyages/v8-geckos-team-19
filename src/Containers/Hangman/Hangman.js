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
import KeyboardComp from "../../Components/Hangman/KeyboardComp";

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
    background-color: ${props => props.bgColor};
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
    background-color: rgba(227, 255, 135, 0.5);
`
export default class extends Component {
    state={
        wrongGuessNr: 0,
        rightGuessNr: 0,
        animExit: false,
        animAttention: false,
        introAnimating: true,
        randomWord: null,
        fetchError: null,
        round: 1,
        lettersGuessed: new Set(),
        gameState: 'playing'
    }

    btnHandler = () => {
        this.setState({
            wrongGuessNr: 0,
            rightGuessNr: 0,
            randomWord: null,
            fetchError: null,
            lettersGuessed: new Set(),
            gameState: 'playing'
        }, this.fetchRandomWord)
    }

    fetchRandomWord = async () => {
        const wordObj =
            await axios.get('http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minLength=4&maxLength=10&api_key=b58be748b0cd0e255900b0e5b2a0bb941838def7258c93a0b')
            .catch(err => this.setState({fetchError: err}));
        const wordDefObj =
            await axios.get(`https://api.wordnik.com/v4/word.json/${wordObj.data.word}/definitions?limit=200&includeRelated=false&useCanonical=true&includeTags=false&api_key=b58be748b0cd0e255900b0e5b2a0bb941838def7258c93a0b`)
            .catch(err => this.setState({fetchError: err}));
        this.setState({randomWord: wordDefObj.data[0]});
    }

    handleLetterClick = (letter) => {
        this.setState(({lettersGuessed}) => this.setState({lettersGuessed: new Set(lettersGuessed).add(letter)}));
        if (this.state.randomWord.word.indexOf(letter) === -1) {
            if (this.state.wrongGuessNr < 9) {
                this.setState(prevState => ({wrongGuessNr: prevState.wrongGuessNr + 1}), () => {
                    if (this.state.wrongGuessNr === 9) {
                        this.setState({gameState: 'lost'})
                    }
                })
            }
        } else {
            const nrOfOcurrances = this.state.randomWord.word.split(letter).length - 1;
            this.setState(({rightGuessNr}) => ({rightGuessNr: rightGuessNr + nrOfOcurrances}), () => {
                if (this.state.rightGuessNr === this.state.randomWord.word.length) {
                    this.setState({gameState: 'won'})
                }
            })
        }
    }

    componentDidMount() {
        // Initial Animation
        setTimeout(() => {
            this.interval = setInterval(() => {
                if (this.state.wrongGuessNr < 9) {
                    this.setState(prevState => ({wrongGuessNr: prevState.wrongGuessNr + 1}));
                } else {
                    clearInterval(this.interval);
                    setTimeout(() => this.setState({animExit: true, introAnimating: false}), 2000); 
                    setTimeout(() => this.setState({wrongGuessNr: 0, animExit: false}), 3000);
                }
            }, 100)
        }, 1000)
        this.fetchRandomWord();
    }

    render() {
        const {wrongGuessNr, animExit, randomWord, fetchError, round, lettersGuessed, gameState, introAnimating} = this.state;
        
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
                <DrawingWindow color={wrongGuessNr === 9? "red": "#0047ba"} bgColor={wrongGuessNr === 9? "rgba(255, 0, 0, 0.5)": "rgba(233, 135, 255, 0.5)"}>
                    {wrongGuessNr === 0 && gameState === 'playing' && <h2>Choose your first letter</h2>}
                    {gameState === 'won' && <h1>Congratulations! You Won !</h1>}
                    {gameState !== 'won' &&
                        <GroupForAnim animExit={animExit} animAttention={wrongGuessNr === 9} display={wrongGuessNr === 0? "none": "block"}>
                            {imgSrcArray.map((part, idx) =>
                                <BodyPart key={idx} src={part} display={wrongGuessNr >= idx + 1? "block": "none"}/>
                                )}
                        </GroupForAnim>}
                </DrawingWindow>
                {!introAnimating && <KeybWordWindow color="#0047ba">
                    {randomWord &&
                        <>
                            <WordComp word={randomWord} lettersGuessed={lettersGuessed}/>
                            {gameState === 'playing'
                                ? <KeyboardComp letterClick={this.handleLetterClick} lettersGuessed={lettersGuessed} word={randomWord.word}/>
                                : <div>
                                    <h1 style={{color: '#0047ba', textAlign: 'center'}}>{randomWord.word}</h1>
                                    <h3><span style={{color: '#0047ba'}}>Defenition:&nbsp;</span>{randomWord.text}</h3>
                                    <p>{`(${randomWord.attributionText})`}</p>
                                </div>
                            }
                        </>
                    }
                {gameState !== 'playing' &&
                    <Button
                        onClick={this.btnHandler}
                    >
                        Play Again?
                    </Button>}
                </KeybWordWindow>}
            </GameWrapper>
            </>
        )
    }
}