import React from "react";
import styled from "styled-components";
import {inject,observer} from "mobx-react";



const PlayerContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const ButtonContainer = styled.button`
height:60px;`;




const Player = ({
    player,
    gameStarted,
    playerStart,
    selectRock,
    selectPaper,
    selectScissors,
    playerChoice}) => {
    return(
    <PlayerContainer>
        {gameStarted ? <>
    <ButtonContainer onClick={selectRock} value={player}>Rock</ButtonContainer>
    <ButtonContainer onClick={selectPaper} value={player}>Paper</ButtonContainer>
    <ButtonContainer onClick={selectScissors} value={player}>Scissors</ButtonContainer></> 
    : <ButtonContainer onClick={playerStart}>Start</ButtonContainer>}
    {/* <ButtonContainer onClick={playerStart}>Start</ButtonContainer>
    <ButtonContainer onClick={selectRock}>Rock</ButtonContainer>
    <ButtonContainer onClick={selectPaper}>Paper</ButtonContainer>
    <ButtonContainer onClick={selectScissors}>Scissors</ButtonContainer> */}
    {/* <div>{playerChoice}</div> */}
    </PlayerContainer>
    )

}

export default inject(({player})=>({
playerOption:player.player,
gameStarted:player.gameStarted,
playerStart:player.playerStart,
selectRock: player.selectRock,
selectPaper: player.selectPaper,
selectScissors: player.selectScissors,
playerChoice: player.playerChoice
}))(observer(Player));
