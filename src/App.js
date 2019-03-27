import React, { Component } from "react";
import Hangman from "./Containers/Hangman/Hangman";
import { css, createGlobalStyle } from "styled-components";
import notepaperImg from "./Assets/Images/note-paper-optimised.svg";
import { fadeZoomIn } from './Shared/animations';

const GlobalStyle = createGlobalStyle`
    body {
        background: url(${notepaperImg}) no-repeat center;
        background-color: teal;
        background-size: 95%;
        font-family: 'Indie Flower', cursive;
        ${props => props.pageReady
            ? css`animation: ${fadeZoomIn} 0.3s ease-out;`
            : null}
    }
`;

class App extends Component {
    state = {
        activeDisplay: "hangman", // possible states: mainMenu / hangman / trivia / snake
        pageReady: false
    };

componentDidMount() {
    const img = new Image();
    img.src = notepaperImg;
    img.onload = () => this.setState({pageReady: true});
}

    render() {
        const { activeDisplay, pageReady } = this.state;

        if (pageReady) {
            return (
                <>
                <GlobalStyle pageReady={pageReady}/>
                {activeDisplay === "hangman" && <Hangman />}
                </>
            );
        } else {
            return <h1>Loading</h1>
        }
    }
}

export default App;
