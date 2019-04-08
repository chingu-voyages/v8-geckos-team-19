import React, { Component, createContext } from "react";
import Hangman from "./Containers/Hangman/Hangman";
import styled from "styled-components";
// import notepaperImg from "./Assets/Images/note-paper-optimised.svg";
import notepaperImg from "./Assets/Images/old_mathematics.png";
// import { fadeZoomIn } from './Shared/animations';
import MenuInterface from "./Containers/MenuInterface";
import SideBar from "./Shared/UI/SideBar";
import HomeIcon from "./Assets/Images/Menu/home_icon_2.svg";
import LoadingAnimation from "./Shared/UI/LoadingAnimation";
import menuData from "./Data/menuData";

// const GlobalStyle = createGlobalStyle`
//     body {
//         background: url(${notepaperImg});
//         background-color: teal;
//         font-family: 'Indie Flower', cursive;
//     }
// `;

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
        // imagesLoaded: [],
        imagesLoaded: 0,
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
        // Pre load images before render
        const bgImg = new Image();
        bgImg.src = notepaperImg;
        bgImg.onload = () => this.setState(({imagesLoaded}) => ({imagesLoaded: imagesLoaded + 1}));
        let menuImg = null;
        for (const item of menuData) {
            menuImg = new Image();
            menuImg.src = item.image;
            menuImg.onload = () =>
                this.setState(({imagesLoaded}) =>
                    ({imagesLoaded: imagesLoaded + 1}), () => {
                        if (this.state.imagesLoaded >= menuData.length + 1) {
                            this.setState({pageReady: true})
                        }
                    }
                );
        }
}

    render() {
        const { activeDisplay, pageReady } = this.state;
        const {cardClickHandler} = this;

        let content = null;
        if (pageReady) {
            content =
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
        } else content =
        <LoadingAnimation fullHeight>Loading...</LoadingAnimation>

        return content;
    }
}

export default App;
