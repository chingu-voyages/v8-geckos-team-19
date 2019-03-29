import styled from 'styled-components';

const Button = styled.button.attrs({
    type: "button"
}
)`
    padding: 8px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    background-color: rgba(255,255,255,0.40);
    outline: none;
    color: #3e70c1;
    font-size: 1.3rem;
    font-family: inherit;
    box-shadow: none;
    border: 2px solid #3e70c1;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 2px 3px 15px 0px rgba(0,0,0,0.40);
    }
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`

export default Button;