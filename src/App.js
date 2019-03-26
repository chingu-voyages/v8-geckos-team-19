import React, { Component } from "react";
import Hangman from "./Containers/Hangman/Hangman";
import { createGlobalStyle } from "styled-components";
import notepaperImg from "./Assets/Images/note-paper-optimised.svg";
// import logo from './logo.svg';
// import './App.css';

const GlobalStyle = createGlobalStyle`
    body {
        background: url(${notepaperImg}) no-repeat center;
        background-color: teal;
        background-size: 95%;
        font-family: 'Indie Flower', cursive;
    }
`;

class App extends Component {
    state = {
        activeDisplay: "hangman" // possible states: mainMenu / hangman / trivia / snake
    };

    render() {
        const { activeDisplay } = this.state;

        return (
            <>
            <GlobalStyle/>
            {activeDisplay === "hangman" && <Hangman />}
            </>
        );
    }
}

export default App;
