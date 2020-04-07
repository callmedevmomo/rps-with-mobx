import React from "react";
import {inject,observer} from "mobx-react";

// 함수형 Component && Class Component



const Computer = ({computerAction,computerChoice}) => {
    return(
        <div>
        <div>Computer Container</div>
        <button onClick = {computerAction}>{computerChoice}</button>
        </div>
    )
}




// export default Computer;


export default inject(({computer})=>
({
computerAction:computer.computerAction,
computerChoice:computer.computerChoice
}))(observer(Computer))