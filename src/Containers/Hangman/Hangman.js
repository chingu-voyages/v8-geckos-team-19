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
import {slideOutBlurredTop, vibrate, spin360, fadeZoomIn, animateBorders} from "../../Shared/animations";
import axios from 'axios';
import WordComp from "../../Components/Hangman/WordComp";
import KeyboardComp from "../../Components/Hangman/KeyboardComp";


// This is the same css as for the Individual games containers. Should be shared - under layout component or something
const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
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
    /* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; */
    animation: ${animateBorders} 10s ease-in-out infinite;
    margin: 50px;
    box-sizing: border-box;
    background-color: ${props => props.bgColor};
    overflow: hidden;
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
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    animation: none;
    background-color: rgba(227, 255, 135, 0.5);
`

const LoadingAnim = styled.h1`
    animation: ${spin360} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both infinite;
`

const WonImg = styled.img`
    display: block;
    height: 100%;
    object-fit: cover;
    animation: ${fadeZoomIn} 0.3s ease-in;
`

export default class extends Component {
    state={
        wrongGuessNr: 1,
        rightGuessNr: 0,
        animExit: false,
        animAttention: false,
        introAnimating: true,
        randomWord: null,
        fetchError: null,
        rounds: 0,
        roundsWon: 0,
        lettersGuessed: new Set(),
        gameState: 'playing',
        loading: false,
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
        this.setState({loading: true, fetchError: false});
        const wordNikApi = process.env.REACT_APP_WORDNIK_API;
        const getWordObj = () => axios.get(`http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minLength=4&maxLength=10&api_key=${wordNikApi}`);
        const getWordDefObj = (wordObj) => axios.get(`https://api.wordnik.com/v4/word.json/${wordObj.data.word}/definitions?limit=200&includeRelated=false&useCanonical=true&includeTags=false&api_key=${wordNikApi}`);
        
        try {
            const wordObj = await getWordObj();
            const wordDefObj = await getWordDefObj(wordObj);
            this.setState({randomWord: wordDefObj.data[0]}, () => this.setState({loading: false}));
            // console.log(wordDefObj.data[0].word)
        } catch (error) {
            this.setState({fetchError: error}, () => this.setState({loading: false}))
        }
    }

    handleLetterClick = (letter) => {
        if (typeof letter === 'object') {
            const keyPressed = letter.key.toLowerCase()
            const possibleKeys = "qwertyuiopasdfghjklzxcvbnm";
            if (possibleKeys.indexOf(keyPressed) === -1) return null;
            if (this.state.lettersGuessed.has(keyPressed)) return null;
            letter = keyPressed;
        }
        this.setState(({lettersGuessed}) => ({lettersGuessed: new Set(lettersGuessed).add(letter)}));
        if (this.state.randomWord.word.indexOf(letter) === -1) {
            if (this.state.wrongGuessNr < 9) {
                this.setState(prevState => ({wrongGuessNr: prevState.wrongGuessNr + 1}), () => {
                    if (this.state.wrongGuessNr === 9) {
                        this.setState(({rounds}) => ({gameState: 'lost', rounds: rounds + 1}))
                    }
                })
            }
        } else {
            const nrOfOcurrances = this.state.randomWord.word.split(letter).length - 1;
            this.setState(({rightGuessNr}) => ({rightGuessNr: rightGuessNr + nrOfOcurrances}), () => {
                if (this.state.rightGuessNr === this.state.randomWord.word.length) {
                    this.setState(({roundsWon, rounds}) => ({gameState: 'won', roundsWon: roundsWon + 1, rounds: rounds + 1}))
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
        const {wrongGuessNr, animExit, randomWord, fetchError, rounds, roundsWon, lettersGuessed, gameState, introAnimating, loading} = this.state;
        
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

        let rightWindowDisplay = () => {
            if (loading) return <LoadingAnim>- Fetching Word -</LoadingAnim>
            if (fetchError) return (
            <>
                <h1>There was a problem in fetching a new word.</h1>
                <Button onClick={this.btnHandler}>Try Again?</Button>
            </>
            )
            if (randomWord) return (
                <>
                    <WordComp word={randomWord} lettersGuessed={lettersGuessed}/>
                    {gameState === 'playing'
                        ? <KeyboardComp letterClick={this.handleLetterClick} lettersGuessed={lettersGuessed} word={randomWord.word}/>
                        : <div>
                            <h1 style={{color: '#0047ba', textAlign: 'center'}}>{randomWord.word}</h1>
                            <h3><span style={{color: '#0047ba'}}>Defenition:&nbsp;</span>{randomWord.text}</h3>
                            <p>{randomWord.attributionText}</p>
                        </div>
                    }
                {gameState !== 'playing' &&
                    <Button
                        onClick={this.btnHandler}
                    >
                        Play Again?
                    </Button>}
                </>
            )
        }

        return (
            <>
            <h1 style={{fontSize: '4rem', textDecoration: 'underline', color: '#0047ba', textAlign: 'center', width: '100%'}}>Hangman</h1>
            <GameWrapper>
                <DrawingWindow color={wrongGuessNr === 9? "red": "#0047ba"} bgColor={wrongGuessNr === 9? "rgba(255, 0, 0, 0.5)": "rgba(233, 135, 255, 0.5)"}>
                    {wrongGuessNr === 0 && gameState === 'playing' && <h2>Choose your first letter</h2>}
                    {gameState === 'won' &&
                        <>
                            <WonImg alt="confetti" src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif" />
                            <h1 style={{position: 'absolute', textAlign: 'center', bottom: '5%', color: 'white', boxShadow: '2px 3px 15px 0px rgba(0,0,0,0.40)', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5'}}>Congratulations!</h1>
                        </>
                        }
                    {gameState !== 'won' &&
                        <GroupForAnim animExit={animExit} animAttention={wrongGuessNr === 9} display={wrongGuessNr === 0? "none": "block"}>
                            {imgSrcArray.map((part, idx) =>
                                <BodyPart
                                    key={idx}
                                    src={part}
                                    display={wrongGuessNr >= idx + 1? "block": "none"}
                                />
                                )}
                        </GroupForAnim>}
                </DrawingWindow>
                {!introAnimating &&
                    <KeybWordWindow color="#0047ba">
                        {rightWindowDisplay()}
                        <h1 style={{color: 'red'}}>Score:&nbsp;{`${roundsWon} / ${rounds}`}</h1>
                    </KeybWordWindow>}
            </GameWrapper>
            </>
        )
    }
}