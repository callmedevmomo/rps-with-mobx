import React from "react";
import {inject,observer} from "mobx-react";



const Computer = ({computerAction,computerChoice}) => {
    return(
        <div>
        <div>Computer Container</div>
        <button onClick = {computerAction}>{computerChoice}</button>
        </div>
    )
}






export default inject(({rps})=>
({
computerAction:rps.computerAction,
computerChoice:rps.computerChoice
}))(observer(Computer))