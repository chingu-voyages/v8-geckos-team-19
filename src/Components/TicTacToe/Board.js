import React from 'react';
import styled from 'styled-components';
import Square from './Square';
import '../../index.css';

const Status = styled.div`
    margin-bottom: 10px;
    position: absolute;
    top: -80px;
    font-size: 50px;
`

const BoardRow = styled.div`
    width: 100%;
    display: flex;

    &:after {
        clear: both;
        content: '';
    }
`
const BoardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };

    handleClick(i) {
        const squares = this.state.squares.slice();

        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    
        return (
            <BoardWrapper>
                <Status>
                    {status}
                </Status>
                <BoardRow className="noBrdTop">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BoardRow>
                <BoardRow className="noBrdBtm">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BoardRow>
            </BoardWrapper>
        );
    }
}

export default Board;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}