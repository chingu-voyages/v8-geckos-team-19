import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const GameBoard = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 4px solid blue;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    transition: background-color 0.3s ease-out 0s;
`


class Game extends React.Component {
    render() {
        return(
            <GameDiv>
                <GameBoard>
                    <Board />
                </GameBoard>
            </GameDiv>
        );
    }
}

export default Game;