import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
    /* position: absolute; */
    /* left: -500%; */
    /* top: -500%; */
    /* margin-left: -25%; */
    /* margin-top: -50%; */
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
                    d="M80 602V44M19 604h123"
                />
            </g>
        </Svg>
    );
};
