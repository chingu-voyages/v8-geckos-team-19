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
    /* border-radius: 3px; */
    font-size: 1.5rem;
    font-weight: bold;
    /* background-color: ${props => props.bgcolor || 'inherit'}; */
`

const Char = styled.span`
    /* visibility: ${props => props.visibility || 'show'}; */
    display: ${props => props.display};
`

export default ({word}) => {

    const charArray = word.word.split("")

    return (
        <Container>
            {charArray.map((char, idx) => (
                <CharBox key={idx} bgcolor="black">
                    <Char display="show">{char}</Char>
                </CharBox>
            ))}
        </Container>
        )
}