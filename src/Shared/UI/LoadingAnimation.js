import React from 'react';
import styled from 'styled-components';
import {jelloVert} from '../animations';

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: ${props => props.fullHeight? '100vh': '100%'};
    align-items: center;
    justify-content: center;
`
const LoadingAnim = styled.h1`
    animation: ${jelloVert} 0.9s both infinite;
`

export default ({fullHeight, children}) =>
    <FlexContainer fullHeight={fullHeight}>
        <LoadingAnim>{children}</LoadingAnim>
    </FlexContainer>
