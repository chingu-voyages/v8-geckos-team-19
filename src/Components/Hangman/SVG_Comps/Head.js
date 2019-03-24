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
                <circle
                    cx="325"
                    cy="174"
                    r="55"
                    stroke="#000"
                    stroke-width="8"
                />
            </g>
        </Svg>
    );
};
