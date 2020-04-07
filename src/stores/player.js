
import {observable,action,computed} from "mobx";


export default class PlayerStore {

    @observable player="";
    @observable gameStarted=false;


constructor(root){
    this.root=root;
    
}

@action playerStart = () =>{
    this.gameStarted=true;
}

@action selectRock = () =>{
    
    console.log(this)
    // this.player="rock"
}
@action selectPaper = () =>{
    console.log(this);
    // this.player="paper"
}
@action selectScissors = () =>{
    console.log(this);
    // this.player="scissors"
}
@action playerOption = () =>{
}


@computed
get playerChoice(){
    // console.log(this.player)
    return this.player
}

}