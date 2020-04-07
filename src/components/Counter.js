import React, {Component} from "react";
import {observer,inject} from "mobx-react";

// @inject('counter') 
@inject(stores=>({
    increase:stores.counter.increase,
    decrease:stores.counter.decrease,
    count:stores.counter.count,
    finish:stores.counter.finish
}))

@observer
class Counter extends Component{
    render(){
        const { increase,decrease,count,finish } = this.props;
        console.log(finish)
        return (
            <div>
                <h1>{count}</h1>
                <button  onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        )
    }
}


export default Counter;