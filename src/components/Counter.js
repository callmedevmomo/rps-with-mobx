import React from "react";
import {observer,inject} from "mobx-react";



const Counter = ({count})=>{
    return(
        <div>{count}</div>
    )
}

export default inject(({rps})=>({
count:rps.count
}))(observer(Counter))

// @inject(stores=>({
//     increase:stores.counter.increase,
//     decrease:stores.counter.decrease,
//     count:stores.counter.count,
//     finish:stores.counter.finish
// }))

// @observer
// class Counter extends Component{
//     render(){
//         const { increase,decrease,count,finish } = this.props;
//         return (
//             <div>
//                 <h1>{count}</h1>
//                 <button  onClick={increase}>+1</button>
//                 <button onClick={decrease}>-1</button>
//             </div>
//         )
//     }
// }


// export default Counter;