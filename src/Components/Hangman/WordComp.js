import React from 'react'
import styled from 'styled-components';
import {slideDown} from '../../Shared/animations';

const Container = styled.div`
    display: flex;
    padding: 8px;
`

const CharBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 5px;
    width: 2rem;
    height: 2rem;
    border-bottom: 4px solid #0047ba;
    font-size: 1.5rem;
    font-weight: bold;
`

const Char = styled.span`
    display: block;
    margin: auto;
    animation: ${slideDown} 0.3s ease-out;
`

export default ({word, lettersGuessed}) => {

    const charArray = word.word.split("")

    return (
        <Container>
            {charArray.map((char, idx) => (
                <CharBox key={idx} bgcolor="black">
                    {lettersGuessed.has(char)? <Char>{char}</Char>: null}
                </CharBox>
            ))}
        </Container>
        )
}