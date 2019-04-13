import React, { Component } from "react";
import styled, {css} from "styled-components";
import { fadeZoomIn, pulsate } from "../../Shared/animations";
import { vibrate } from "../../Shared/animations";
import appleImg from "../../Assets/Images/Snake/apple2.svg";
import keysImg from "../../Assets/Images/Snake/keys.svg";
import Button from "../../Shared/UI/Button";

const GameWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
`;
const FixedWindow = styled.div`
    margin-top: 100px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, 1fr);
    grid-template-rows: repeat(${props => props.gridSize}, 1fr);
    width: 500px;
    height: 500px;
    border: 4px solid blue;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    background-color: ${props => props.collision? 'salmon': 'transparent'};
    transition: background-color 0.3s ease-out;
    ${props => props.collision? css`animation: ${vibrate} 0.4s linear both;`: null}
`;

const Apple = styled.img`
    display: block;
    animation: ${pulsate} 1s ease-in-out infinite both;
`

const SnakeSection = styled.div`
    border-radius: 50px 15px 30px 15px/15px 30px 15px 50px;
    border: 2px solid blue;
    box-sizing: border-box;
    background-image: linear-gradient(135deg, blue 25%, transparent 25%, transparent 50%, blue 50%, blue 75%, transparent 75%, transparent 100%);
    background-size: 3.8px 3.8px;
    align-self: center;
    justify-self: center;
`;

const ModalBg = styled.div`
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgba(0,0,0, 0.5);
`

const validKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", " "];

// const bgColors = [
//     '#e2ffc6',
//     '#fff8c6',
//     '#c6dcff',
//     '#ffc6ff'
// ]

const calcScaleArray = () => {
    let scale = 100;
    let i = null;
    const array = [scale];
    for(i=0; i < 200; i++ ) {
        array.push(
            (scale *= 0.99).toFixed(2)
        )
    }
    return array;
}

const scaleArray = calcScaleArray();

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class extends Component {
    state = {
        gridSize: 25,
        foodPos: [3, 3],
        snakePosition: [[10, 10], [11, 10]],
        direction: null,
        collision: false,
        bgColor: '#e2ffc6',
        score: 0,
        highScore: 0,
        showInstructions: true
    };

    // getNextColor = () => {
    //     const {bgColor} = this.state;
    //     const currentColorIdx = bgColors.indexOf(bgColor);
    //     if (currentColorIdx < bgColors.length - 1) {
    //         return bgColors[currentColorIdx + 1];
    //     }
    //     return bgColors[0];
    // }

    interval = true;

    getNextSnakePos = (direction, currentSnakePos) => {
        let nextInt = null;
        let nextHeadPos = null;
        let currentSnakePosCopy = currentSnakePos.map(section => {
            return [...section];
        });
        const nextSnakePos = currentSnakePosCopy
            .slice(0, -1)
            .map(section => section.slice());
        switch (direction) {
            case "ArrowUp":
                if (currentSnakePos[0][1] <= 1) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                nextInt = currentSnakePos[0][1] - 1;
                nextHeadPos = [currentSnakePos[0][0], nextInt];
                if (nextSnakePos.map(coord => `${coord[0]}-${coord[1]}`).includes(`${nextHeadPos[0]}-${nextHeadPos[1]}`)) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                nextSnakePos.unshift(nextHeadPos);
                if (
                    nextHeadPos[0] === this.state.foodPos[0] &&
                    nextHeadPos[1] === this.state.foodPos[1]
                ) {
                    nextSnakePos.push(currentSnakePosCopy.slice(-1));
                }
                return nextSnakePos;
            case "ArrowDown":
                if (currentSnakePos[0][1] >= this.state.gridSize) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                nextInt = currentSnakePos[0][1] + 1;
                nextHeadPos = [currentSnakePos[0][0], nextInt];
                if (nextSnakePos.map(coord => `${coord[0]}-${coord[1]}`).includes(`${nextHeadPos[0]}-${nextHeadPos[1]}`)) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                if (`${nextHeadPos[0]}${nextHeadPos[1]}`)
                nextSnakePos.unshift(nextHeadPos);
                if (
                    nextHeadPos[0] === this.state.foodPos[0] &&
                    nextHeadPos[1] === this.state.foodPos[1]
                ) {
                    nextSnakePos.push(currentSnakePosCopy.slice(-1));
                }
                return nextSnakePos;
            case "ArrowLeft":
                if (currentSnakePos[0][0] <= 1) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                nextInt = currentSnakePos[0][0] - 1;
                nextHeadPos = [nextInt, currentSnakePos[0][1]];
                if (nextSnakePos.map(coord => `${coord[0]}-${coord[1]}`).includes(`${nextHeadPos[0]}-${nextHeadPos[1]}`)) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                if (`${nextHeadPos[0]}${nextHeadPos[1]}`)
                nextSnakePos.unshift(nextHeadPos);
                if (
                    nextHeadPos[0] === this.state.foodPos[0] &&
                    nextHeadPos[1] === this.state.foodPos[1]
                ) {
                    nextSnakePos.push(currentSnakePosCopy.slice(-1));
                }
                return nextSnakePos;
            case "ArrowRight":
                if (currentSnakePos[0][0] >= this.state.gridSize) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                nextInt = currentSnakePos[0][0] + 1;
                nextHeadPos = [nextInt, currentSnakePos[0][1]];
                if (nextSnakePos.map(coord => `${coord[0]}-${coord[1]}`).includes(`${nextHeadPos[0]}-${nextHeadPos[1]}`)) {
                    this.interval = clearInterval(this.interval);
                    return currentSnakePos;
                }
                if (`${nextHeadPos[0]}${nextHeadPos[1]}`)
                nextSnakePos.unshift(nextHeadPos);
                if (
                    nextHeadPos[0] === this.state.foodPos[0] &&
                    nextHeadPos[1] === this.state.foodPos[1]
                ) {
                    nextSnakePos.push(currentSnakePosCopy.slice(-1));
                }
                return nextSnakePos;
            default:
                break;
        }
    };

    handlePlayAgain = () => {
        let highScore = this.state.highScore;
        if (this.state.score > highScore) {
            highScore = this.state.score;
        }
        this.interval = true;
        this.setState({
            // gridSize: 30,
            foodPos: [getRandomInt(2, this.state.gridSize - 1), getRandomInt(2, this.state.gridSize - 1)],
            snakePosition: [[getRandomInt(2, this.state.gridSize - 1), getRandomInt(2, this.state.gridSize - 1)]],
            direction: null,
            collision: false,
            highScore: highScore,
            showInstructions: true,
            // bgColor: '#e2ffc6',
            score: 0
        })
    }

    keyPressHandler = e => {
        if (this.state.showInstructions) {
            this.setState({showInstructions: false});
        }
        if (validKeys.indexOf(e.key) === -1) return null;
        if (e.key === this.state.direction) return null;
        if (this.interval) clearInterval(this.interval);
        if ((e.key) === ' ') {
            this.interval = true;
            this.setState({direction: ' '}) 
            return null;
        }
        if (!this.state.collision) {
            this.interval = setInterval(() => {
                this.setState(prevState => ({
                    snakePosition: this.getNextSnakePos(
                        e.key,
                        prevState.snakePosition
                    )
                }));
            }, 120);
            this.setState({ direction: e.key });
        }
    };

    componentDidMount() {
        // console.log(this.interval);
        window.addEventListener("keydown", this.keyPressHandler);
    }

    componentDidUpdate() {
        if (!this.interval) {
            if (!this.state.collision) this.setState({ collision: true });
        }
        const { foodPos, snakePosition } = this.state;
        if (this.interval) {
            if (
                foodPos[0] === snakePosition[0][0] &&
                foodPos[1] === snakePosition[0][1]
            ) {
                this.setState(prevState => ({
                    foodPos: [getRandomInt(2, this.state.gridSize - 1), getRandomInt(2, this.state.gridSize - 1)],
                    // bgColor: this.getNextColor(),
                    score: prevState.score + 1
                }));
            }
        }
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        window.removeEventListener("keydown", this.keyPressHandler);
    }

    render() {
        const { foodPos, snakePosition, collision, gridSize, bgColor, score, highScore, showInstructions } = this.state;
        const imgHeight = Math.floor(500 / gridSize);
        return (
            <GameWrapper>
                <FixedWindow gridSize={gridSize} collision={collision} bgColor={bgColor}>
                    <Apple
                        src={appleImg}
                        alt="apple"
                        style={{
                            // backgroundColor: "red",
                            gridColumn: `${foodPos[0]}`,
                            gridRow: `${foodPos[1]}`,
                            height: `${imgHeight}px`
                        }}
                    />
                    {snakePosition.map((section, idx) => {
                        return <SnakeSection
                            key={`${section[0]}-${section[1]}`}
                            style={{
                                // backgroundColor: "rgba(0, 0, 255, 0.5)",
                                gridColumn: `${section[0]}`,
                                gridRow: `${section[1]}`,
                                transform: idx%2 === 0? 'scaleX(-1)': 'scaleX(1)',
                                width: `${scaleArray[idx]}%`,
                                height: `${scaleArray[idx]}%`
                            }}
                        />
                    })}
                    {collision && (
                        <h1
                            style={{
                                gridRow: " 1/ -1",
                                gridColumn: "1 / -1",
                                margin: "auto",
                                textAlign: "center"
                            }}
                        >
                            Game Over !
                        </h1>
                    )}
                </FixedWindow>
                <div style={{display: 'flex', width: '500px', justifyContent: 'space-evenly'}}>
                    <h1 style={{color: 'red'}}>Score:&nbsp;{`${score}`}</h1>
                    {highScore !== 0 &&
                    <h1 style={{color: 'blue'}}>Highscore:&nbsp;{`${highScore}`}</h1>}
                </div>
                    {collision && <Button onClick={this.handlePlayAgain}>Play Again?</Button>}
                {showInstructions &&
                    <ModalBg onClick={() => this.setState({showInstructions: false})}>
                        <Modal><img src={keysImg} alt=""/></Modal>
                    </ModalBg>}
            </GameWrapper>
        );
    }
}
