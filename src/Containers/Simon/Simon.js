import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './Simon.css';

// This is the same css as for the Individual games containers. Should be shared - under layout component or something
// const GameWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     box-sizing: border-box;
// `

class Simon extends React.Component {

    render() {
        return(
          <div className="grid-container">
            <div className="grid-item"><button>Green</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button>Red</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><div className="centerButton"> Simon </div></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button>Yellow</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button>Blue</button></div>
          </div>
        );
    }
}

export default Simon;
