import React, { Component } from "react";
import styled from "styled-components";
import { fadeZoomIn } from "../../Shared/animations";

const GameWrapper = styled.div`
    display: flex;
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
    grid-template-columns: repeat(40, 1fr);
    grid-template-rows: repeat(40, 1fr);
    width: 500px;
    height: 500px;
    background-color: lightgrey;
`;
const GridBlock = styled.div`
    position: relative;
    background-color: ${props => props.bgColor || "transparent"};
    border-radius: 50%;
    grid-column: ${props => props.col + " / " + (props.col + 1)};
    grid-row: ${props => props.row + " / " + (props.row + 1)};
`;

const validKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class extends Component {
    state = {
        foodPos: [3, 3],
        snakeHeadPos: [[3, 35], [3, 36], [3, 37]],
        direction: null
    };

    getNextHeadPos = (direction, currentHeadPos) => {
        let nextInt = null;
        let currentHeadPosCopy = currentHeadPos.map(section => {
            return [...section];
        });
        const nextPos = currentHeadPosCopy
            .slice(0, -1)
            .map(section => section.slice());
        switch (direction) {
            case "ArrowUp":
                if (currentHeadPos[0][1] <= 1) {
                    nextInt = 40;
                } else nextInt = currentHeadPos[0][1] - 1;
                nextPos.unshift([currentHeadPos[0][0], nextInt]);
                if (
                    nextPos[0][0] === this.state.foodPos[0] &&
                    nextPos[0][1] === this.state.foodPos[1]
                ) {
                    nextPos.push(currentHeadPosCopy.slice(-1));
                    this.setState({
                        foodPos: [getRandomInt(1, 40), getRandomInt(1, 40)]
                    });
                }
                return nextPos;
            case "ArrowDown":
                if (currentHeadPos[0][1] >= 40) {
                    nextInt = 1;
                } else nextInt = currentHeadPos[0][1] + 1;
                nextPos.unshift([currentHeadPos[0][0], nextInt]);
                if (
                    nextPos[0][0] === this.state.foodPos[0] &&
                    nextPos[0][1] === this.state.foodPos[1]
                ) {
                    nextPos.push(currentHeadPosCopy.slice(-1));
                    this.setState({
                        foodPos: [getRandomInt(1, 40), getRandomInt(1, 40)]
                    });
                }
                return nextPos;
            case "ArrowLeft":
                if (currentHeadPos[0][0] <= 1) {
                    nextInt = 40;
                } else nextInt = currentHeadPos[0][0] - 1;
                nextPos.unshift([nextInt, currentHeadPos[0][1]]);
                if (
                    nextPos[0][0] === this.state.foodPos[0] &&
                    nextPos[0][1] === this.state.foodPos[1]
                ) {
                    nextPos.push(currentHeadPosCopy.slice(-1));
                    this.setState({
                        foodPos: [getRandomInt(1, 40), getRandomInt(1, 40)]
                    });
                }
                return nextPos;
            case "ArrowRight":
                if (currentHeadPos[0][0] >= 40) {
                    nextInt = 1;
                } else nextInt = currentHeadPos[0][0] + 1;
                nextPos.unshift([nextInt, currentHeadPos[0][1]]);
                if (
                    nextPos[0][0] === this.state.foodPos[0] &&
                    nextPos[0][1] === this.state.foodPos[1]
                ) {
                    nextPos.push(currentHeadPosCopy.slice(-1));
                    this.setState({
                        foodPos: [getRandomInt(1, 40), getRandomInt(1, 40)]
                    });
                }
                return nextPos;
            default:
                break;
        }
    };

    keyPressHandler = e => {
        if (validKeys.indexOf(e.key) === -1) return null;
        if (e.key === this.state.direction) return null;
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                snakeHeadPos: this.getNextHeadPos(e.key, prevState.snakeHeadPos)
            }));
        }, 100);
        this.setState({ direction: e.key });
    };

    componentDidMount() {
        window.addEventListener("keydown", this.keyPressHandler);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        window.removeEventListener("keydown", this.keyPressHandler);
    }

    render() {
        const { foodPos, snakeHeadPos } = this.state;
        return (
            <GameWrapper>
                <FixedWindow>
                    <GridBlock
                        col={foodPos[0]}
                        row={foodPos[1]}
                        bgColor="red"
                    />
                    {snakeHeadPos.map(pos => (
                        <GridBlock
                            key={`${pos[0]}-${pos[1]}`}
                            col={pos[0]}
                            row={pos[1]}
                            bgColor="green"
                        />
                    ))}
                </FixedWindow>
            </GameWrapper>
        );
    }
}
