import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// This is the same css as for the Individual games containers. Should be shared - under layout component or something
const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
`

class Simon extends React.Component {

    render() {
        console.log("Hey Laurent");
        return(
            'Simon Simon Simon Simon Simon Simon Simon Simon Simon Simon Simon Simon Simon Simon'
        );
    }
}

export default Simon;
