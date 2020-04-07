import React from "react";
import styled from "styled-components";

const AllContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const StartButton= styled.div`
display:flex;
justify-content:center;
align-items:center;
width:300px;
height:100px;
margin-top:20px;
background-color:orange;`;

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:300px;
height:60px;
margin-top:10px;
background-color:yellow;
`;

const RestartButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 100px;
height:60px;
background-color:lightcoral;
margin-right:60px;

`;

const StopButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 100px;
height:60px;
background-color:lightcyan;
`;


const TimerContainer =styled.div`
position:absolute;
top:100px;
left:100px;
display:flex;
justify-content:center;
align-items:center;
width:150px;
height:150px;
margin-top:20px;
background-color:pink;
`;

const GameSetContainer=styled.div`
position:absolute;
top:100px;
right:100px;
display:flex;
justify-content:center;
align-items:center;
width:300px;
height:150px;
margin-top:20px;
background-color:coral;
`;


const GameContainer = styled.div`
display:flex;
justify-content:space-between;
width:100vw;
height:60vh;
margin-top:20px;
background-color:purple
;`;


const PlayerContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:250px;
height:450px;
margin-top:25px;
margin-left:25px;
background-color:green;
`;

const ComputerContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:250px;
height:450px;
margin-top:25px;
margin-right:25px;
background-color:yellow;
`;
const ScoreContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:800px;
height:450px;
margin-top:25px;
background-color:blue;`;

const GameTemplate = ({
  player,
  computer,
  counter,
  score}) =>{
    return(
        <AllContainer>
          <TimerContainer>{counter}</TimerContainer>
          <StartButton>START</StartButton>
          <ButtonContainer>
          <RestartButton>Restart</RestartButton>
          <StopButton>Stop</StopButton>
          </ButtonContainer>
          <GameSetContainer>SET</GameSetContainer>
          <GameContainer>
            <PlayerContainer>{player}</PlayerContainer>
            <ScoreContainer>{score}</ScoreContainer>
            <ComputerContainer>{computer}</ComputerContainer>
          </GameContainer>
        </AllContainer>
    )
}

export default GameTemplate;
