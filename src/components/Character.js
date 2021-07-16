// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledCharacters = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    margin: 1% auto;
    border: 5px solid black;
    box-shadow: 1px 1px 5px #fff;

    font-size: 4rem;
    font-weight: bold;
    text-shadow: 1px 1px 5px #fff;
`

export default function Character({info}){
    return(
        <StyledCharacters>
            {info.name}
        </StyledCharacters>
    );
}