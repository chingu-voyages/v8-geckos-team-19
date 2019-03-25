import styled from 'styled-components';

const Button = styled.button`
    display: block;
    padding: 15px;
    border-radius: 12px;
    background-color: #3e70c1;
    outline: none;
    color: white;
    font-size: 1.3rem;
    /* font-weight: bold; */
    box-shadow: none;
    border: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 2px 3px 15px 0px rgba(0,0,0,0.40);
    }
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`

export default Button;