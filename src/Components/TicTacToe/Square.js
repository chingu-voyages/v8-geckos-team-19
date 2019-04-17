import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  background: transparent;
  border: 2px solid blue; 
  color: blue;
  float: left;
  font-size: 80px;
  font-family: "Indie Flower", cursive;
  font-weight: bold;
  line-height: 100px;
  height: 100px;
  margin-right: 0;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  flex: 1;
  position: relative;

  &:focus {
    outline: none;
  }

  &:not(:first-of-type),
  &:not(:last-of-type) {
    border-right: 2px solid blue;
  }

  &:first-of-type,
  &:last-of-type {
      border-right: 0;
      border-left: 0;
  }
`

function Square(props) {
    return(
        <SquareButton onClick={props.onClick}>
            {props.value}
        </SquareButton>
    );
}

export default Square;