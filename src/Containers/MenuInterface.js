import React, { useState, useContext } from "react";
import styled, {css} from "styled-components";
import Card from "../Components/MenuInterface/Card";
import geckoImg from "../Assets/Images/Menu/gecko-top-view-shape.svg";
import menuData from '../Data/menuData';
import { fadeZoomOut, fadeZoomIn } from '../Shared/animations';
import { StateContext } from '../App';



// This is the same css as for the Individual games containers. Should be shared - under layout component or something
const MainWindow = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`
;
const GamesGridWrapper = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    max-width: 800px;
    justify-content: center;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
    ${props => props.animateOut
            ? css`animation: ${fadeZoomOut} 0.3s ease-in-out;`
            : null}
`;

export default ({cardSize}) => {
    const [animateOut, setAnimateOut] = useState(false);
    const { cardClickHandler } = useContext(StateContext);

    const selectCard = next => {
        setAnimateOut(true);
        setTimeout(() => {
            cardClickHandler(next);
            setAnimateOut(false);
            }, 280)
    }

    const cardColors = [
        '#e2ffc6',
        '#fff8c6',
        '#c6dcff',
        '#ffc6ff'
    ]

    return (
        <MainWindow>
            <div style ={{display: 'flex', maxWidth: '500px', justifyContent: 'center'}}>
                <img style={{display: 'block', width: "100px", height: "85px", marginBottom: '50px', transform: 'scaleX(-1)'}} src={geckoImg} alt="Gecko Logo"/>
                <h1 style={{margin: 'auto', fontSize: '2.5rem'}}>Game On Geckos</h1>
                <img style={{display: 'block', width: "100px", height: "85px", marginBottom: '50px'}} src={geckoImg} alt="Gecko Logo"/>
            </div>
            <GamesGridWrapper animateOut={animateOut}>
                {menuData.map((data, idx) => 
                <Card
                    cardSize={cardSize}
                    key={data.title}
                    heading={data.title}
                    description={data.descr}
                    coverImg={data.image}
                    clickHandler={() => selectCard(data.title)}
                    cardColor={idx < cardColors.length? cardColors[idx]: cardColors[0]}
                />)}
            </GamesGridWrapper>
        </MainWindow>
    )
}

