import React, { useState } from "react";
import styled, { css } from "styled-components";
import { flipVertFwd, fadeIn, slideUp, slideDown } from '../../Shared/animations';

const TriggerBox = styled.div`
    transform: scale(1);
    &:hover {
        transform: scale(1.05);
    }
    transition: transform 0.3s ease-in-out;
`

export const CardContainer = styled.div`
    position: relative;
    width: ${props => props.size || '300px'};
    height: ${props => props.size || '300px'};
    background-color: ${props => props.cardColor};
    z-index: -2;
    padding: 15px;
    /* text-align: center; */
    margin: auto;
    /* border-radius: 20px; */
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    /* border: 4px solid #0047ba; */
    overflow: hidden;
    box-sizing: border-box;
    /* background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 95%; */
    cursor: pointer;
    box-shadow: 1px 1px 10px -3px;
    transition: box-shadow 0.5s ease-in-out;
    ${props =>
        props.active
            ? css`
            animation: ${flipVertFwd} 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            box-shadow: -3px 5px 13px 0px rgba(0,0,0,0.60);`
            : null} 
`;

const BgImg = styled.img`
    /* ${props => props.active
        ? 'position: absolute;'
        : null} */
    /* position: absolute; */
    /* top: 5%;
    left: 5%; */
    z-index: -1;
    display:block;
    margin: auto;
    height: 100%;
    opacity: ${props => props.active?  '0.1': '1'};
    transition: opacity 0.4s ease-in-out;
`

const DescrContainer = styled.div`
    color: black;
    /* border-radius: 20px; */
    padding: 10px;
    box-sizing: border-box;
    /* background-color: rgba(0, 0, 0, 0.7); */
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    animation: ${fadeIn} 0.5s ease-in-out;
    transform: scaleX(-1) translateY(-100%);
`

const DescrHeading = styled.h2`
    animation: ${slideDown} 0.5s ease-in-out;
`

const Descr = styled.p`
    animation: ${slideUp} 0.5s ease-in-out;
`

export default ({heading, description, coverImg, clickHandler, cardSize, cardColor}) => {
    const [cardActive, setCardActive] = useState(false);

    return (
        <TriggerBox
            onMouseEnter={() => setCardActive(true)}
            onMouseLeave={() => setCardActive(false)}
        >
            <CardContainer
                size={cardSize}
                active={cardActive}
                cardColor={cardColor}
                // bg={light}
                // bgImg={coverImg}
            >
                <BgImg src={coverImg} alt={heading} active={cardActive}/>
                {cardActive &&
                    <DescrContainer onClick={clickHandler}>
                        <DescrHeading>{heading}</DescrHeading>
                        <Descr>
                            {description}
                        </Descr>
                    </DescrContainer>}
            </CardContainer>
        </TriggerBox>
    );
};
