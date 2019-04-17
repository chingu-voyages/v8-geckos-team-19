import React from 'react';
import styled from 'styled-components';
import Square from '../../Components/TicTacToe/Square';
import Board from '../../Components/TicTacToe/Board';
import Game from '../../Components/TicTacToe/Game';

// This is the same css as for the Individual games containers. Should be shared - under layout component or something
const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`

class TicTacToe extends React.Component {
    render() {
        return(
            <GameWrapper>
                <Game />
            </GameWrapper>
        );
    }
}

export default TicTacToe;