import React from 'react'
import styled from 'styled-components';

const Keyboard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: rgba(66, 134, 244, 0.5);
    padding: 10px;
    border-radius: 10px;
    /* grid-template-columns: repeat(9, 2rem); */
    /* grid-template-rows: repeat(3, 2rem); */
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const CharBtn = styled.button.attrs({
    type: "button"
})`
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    margin: 0px 5px;
    display: block;
    /* grid-row: ${props => props.row}; */
    /* grid-column: ${props => props.col}; */
    width: 2.1rem;
    height: 2.1rem;
    border: 1px solid #0047ba;
    border-radius: 3px;
    font-size: 1.3rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    /* background-color: ${props => props.bgcolor || 'inherit'}; */
`

const keys = [
    'qwertyuiop'.split(""),
    'asdfghjkl'.split(""),
    'zxcvbnm'.split("")
]

export default props => {

    // let keyboard = [];
    // let rowIdx = null;
    // let charIdx = null;
    // for (rowIdx=0; rowIdx < keys.length; rowIdx++) {
    //     for (charIdx=0; charIdx < keys[rowIdx].length; charIdx++) {
    //         keyboard.push(
    //             <CharBtn key={keys[rowIdx][charIdx]} row={`${rowIdx + 1} / ${rowIdx + 2}`} col={`${charIdx+1} / ${charIdx+2}`}>{keys[rowIdx][charIdx]}</CharBtn>)
    //     }
    // }

    return (
        <Keyboard>
            {keys.map((row, rowIdx) =>
                <Row key={rowIdx}>
                    {row.map((char) => <CharBtn key={char}>{char}</CharBtn>)}
                </Row>)}
            
        </Keyboard>
    )
}