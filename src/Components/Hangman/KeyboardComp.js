import React from 'react'
import styled from 'styled-components';

const Keyboard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: rgba(66, 134, 244, 0.5);
    padding: 10px;
    border-radius: 10px;
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
    margin: 0px 5px;
    display: block;
    width: 2.1rem;
    height: 2.1rem;
    border: 1px solid #0047ba;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    color: #0047ba;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        color: red;
        border: 1px solid red;
        ${props => props.green
            ? `border: 1px solid green
            color: green`
            : null}
    }
`

const keys = [
    'qwertyuiop'.split(""),
    'asdfghjkl'.split(""),
    'zxcvbnm'.split("")
]

export default ({letterClick, lettersGuessed, word}) => {

    return (
        <Keyboard>
            {keys.map((row, rowIdx) =>
                <Row key={rowIdx}>
                    {row.map((char) => 
                        <CharBtn 
                            key={char}
                            onClick={() => letterClick(char)}
                            disabled={lettersGuessed.has(char)}
                            green={word.indexOf(char) !== -1}
                        >
                            {char}
                        </CharBtn>)}
                </Row>)}
            
        </Keyboard>
    )
}