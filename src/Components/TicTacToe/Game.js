import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const GameInfo = styled.div`
    margin-left: 20px;
`


class Game extends React.Component {
    render() {
        return(
            <GameDiv>
                <div className="game-board">
                    <Board />
                </div>
                <GameInfo>
                    <div>{/* status */}</div>
                    <ol> {/* TO DO */} </ol>
                </GameInfo>
            </GameDiv>
        );
    }
}

export default Game;