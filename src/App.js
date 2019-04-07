import React, { Component, createContext } from "react";
import Hangman from "./Containers/Hangman/Hangman";
import styled, { css, createGlobalStyle } from "styled-components";
// import notepaperImg from "./Assets/Images/note-paper-optimised.svg";
import notepaperImg from "./Assets/Images/old_mathematics.png";
import { fadeZoomIn } from './Shared/animations';
import MenuInterface from "./Containers/MenuInterface";
import SideBar from "./Shared/UI/SideBar";
import HomeIcon from "./Assets/Images/Menu/home_icon_2.svg";

const GlobalStyle = createGlobalStyle`
    body {
        /* background: url(${notepaperImg}) no-repeat center; */
        background: url(${notepaperImg});
        background-color: teal;
        /* background-size: 95%; */
        font-family: 'Indie Flower', cursive;
        ${props => props.pageReady
            ? css`animation: ${fadeZoomIn} 0.3s ease-out;`
            : null}
    }
`;

const HomeIcn = styled.button`
    /* display: flex; */
    /* align-items: flex-start; */
    /* justify-content: center; */
    outline: none;
    border: none;
    width: 80px;
    height: 80px;
    background-color: transparent;
    /* border-radius: 50%; */
    /* background-color: salmon; */
    /* opacity: 0.5; */
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
`

export const StateContext = createContext(null);

class App extends Component {
    state = {
        activeDisplay: "menuInterface", // possible states: mainMenu / hangman / trivia / snake
        pageReady: false,
    };

    // animToNext = next => {
    //     this.setState({animateDisplayOut: true}, () => {
    //         setTimeout(() => {
    //             this.setState({activeDisplay: next, animateDisplayOut: false})
    //         }, 280)
    //     })
    // }

    cardClickHandler = next => {
        this.setState({activeDisplay: next})
    }

    componentDidMount() {
        const img = new Image();
        img.src = notepaperImg;
        img.onload = () => this.setState({pageReady: true});
}

    render() {
        const { activeDisplay, pageReady } = this.state;
        const {cardClickHandler} = this;

        if (pageReady) {
            return (
                <>
                <GlobalStyle pageReady={pageReady}/>
                <StateContext.Provider value={{activeDisplay, cardClickHandler}}>
                    {activeDisplay !== 'menuInterface' &&
                        <>
                        <HomeIcn type="button" onClick={() => cardClickHandler("menuInterface")}>
                            <img
                                src={HomeIcon} alt="Home"
                                style={{width: '100%', objectFit: 'contain'}}/>
                            </HomeIcn>
                        <SideBar><MenuInterface cardSize="250px"/></SideBar>
                        </>}
                    {activeDisplay === "menuInterface" && <MenuInterface />}
                    {activeDisplay === "Hangman" && <Hangman />}
                </StateContext.Provider>
                </>
            );
        } else {
            return <h1>Loading</h1>
        }
    }
}

export default App;
