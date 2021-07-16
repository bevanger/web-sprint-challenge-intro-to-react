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
    border: 3px solid black;

    font-size: 4rem;
    font-weight: bold;
`

export default function Character({info}){
    return(
        <StyledCharacters>
            {info.name}
        </StyledCharacters>
    );
}