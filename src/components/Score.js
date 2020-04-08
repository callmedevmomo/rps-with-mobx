import React from "react";
import {inject,observer} from "mobx-react";




const Score = ({gameResult,
    allGameFinished,
    userChoice,
    computerChoice,
    countTime,
    getScore}) => {
    return(
        <div>
            {allGameFinished ?  
            <div>
            {gameResult}
            </div>
            :
            <div>
                <div>
                {userChoice}
                </div>
                <div>
                {computerChoice}
                </div>
                <div>
                {countTime}
                </div>
                <div>
                {getScore}
                </div>
            </div>}
        </div>

       
    )
}


export default inject(({rps,scores})=>({
userChoice:rps.choice,
computerChoice:rps.computer,
countTime:rps.number,
getScore:scores.getScore,
gameResult:scores.gameResult,
allGameFinished:scores.allGameFinished,
}))(observer(Score));