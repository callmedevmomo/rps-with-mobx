import React from "react";
import styled from "styled-components";
import {inject,observer} from "mobx-react";




const Score = ({HandleScores,getScores,handleUser,userName,getName}) => {
    return(
        <div>
        {userName ? 
        <>
        GAME SCORE
        </> : 
        <form>
        <input placeholder="Username.." onChange={handleUser}>
        </input>
        <div>{getName}</div>
        </form> }
       
        </div>
    )
}

export default inject(({scores})=>({
HandleScores:scores.handleScore,
getScores:scores.getScore,
handleUser:scores.handleUser,
userName:scores.userName,
getName:scores.getName
}))(observer(Score));