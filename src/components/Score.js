import React from "react";
import styled from "styled-components";
import {inject,observer} from "mobx-react";




const Score = ({userChoice,computerChoice,countTime,handleScore,getScore,roundResult}) => {
    return(
        <div>
            <div>
        {userChoice}
        </div>
        <div>
            {computerChoice}
        </div>
        <div>{countTime}
        </div>
        <div>
            {getScore}
        </div>
        {/* <button onClick={handleScore}></button> */}
        {/* {userName ? 
        <>
        GAME SCORE
        </> : 
        <form>
        <input placeholder="Username.." onChange={handleUser}>
        </input>
        <div>{getName}</div>
        </form> } */}
        </div>

       
    )
}

export default inject(({rps,scores})=>({
userChoice:rps.choice,
computerChoice:rps.computer,
countTime:rps.number,
// HandleScores:scores.handleScore,
getScore:scores.getScore,
handleScore:scores.handleScore,
userName:scores.userName,
getName:scores.getName,
roundResult:scores.roundResult
}))(observer(Score));