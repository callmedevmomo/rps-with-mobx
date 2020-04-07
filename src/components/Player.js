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





// gameStarted는 Store에서 처리해야하는가


const Player = ({
    gameStarted,
    playerStart,
    userChoice,
    playerChoice,
    hands}) => {
    return(
    <PlayerContainer>
        {gameStarted ? 
    <>
    {hands.map(hand => {
        return (
        <ButtonContainer 
            onClick={userChoice}
            key={hand} value={hand}>{hand}</ButtonContainer>
            )
    }
    )}
    <div>{playerChoice}</div>
    </> 
    : <ButtonContainer onClick={playerStart}>Start</ButtonContainer>}
    </PlayerContainer>
    )

}

export default inject(({rps})=>({
gameStarted:rps.gameStarted,
playerStart:rps.playerStart,
userChoice: rps.userChoice,
playerChoice: rps.playerChoice,
hands:rps.hands
}))(observer(Player));
