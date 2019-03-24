import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
    position: absolute;
    top: 0%;
    left: 0%;
`;

export default props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="479"
            height="646"
            version="1"
        >
            <g fill="none" fill-rule="nonzero">
                <path fill="none" d="M0 0h479v646H0z" />
                <path
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="8"
                    d="M324 117V37M323 37H80"
                />
            </g>
        </Svg>
    );
};
