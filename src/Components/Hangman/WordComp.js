import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 8px;
`

const CharBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    width: 2rem;
    height: 2rem;
    border-bottom: 4px solid #0047ba;
    font-size: 1.5rem;
    font-weight: bold;
`

const Char = styled.span`
    display: ${props => props.display};
`

export default ({word, lettersGuessed}) => {

    const charArray = word.word.split("")

    return (
        <Container>
            {charArray.map((char, idx) => (
                <CharBox key={idx} bgcolor="black">
                    <Char display={lettersGuessed.has(char)? 'show': 'none'}>{char}</Char>
                </CharBox>
            ))}
        </Container>
        )
}