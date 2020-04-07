
import {observable,action,computed} from "mobx";


export default class RpsStore {

    @observable choice="";
    @observable computer="";

    hands=["rock","paper","scissors"];
    
// gameStarted는 Store에서 처리해야하는가
    @observable gameStarted=false;


constructor(root){
    this.root=root;
    
}

@action computerAction = () =>{
    let items = ["rock", "paper", "scissors"];
    this.computer=items[Math.floor(Math.random() * items.length)]
}
@action playerStart = () =>{
    this.gameStarted=true;
}



// selectRps action 1개로 묶는 방법 
// Component 버튼에 따른 value값을 this.player로 넣어줘야하는데

@action userChoice = (event) =>{
    const {target:{value:user}} = event;
    if(user==="rock"){
        this.choice="rock"
    }
    else if(user==="paper"){
         this.choice="paper"
    }
    else{
         this.choice="scissors"
    }
}


// @action selectHand(hand){
//     this.player=hand;
// }


@computed
get playerChoice(){
    return this.choice
}
@computed
get computerChoice(){
    return this.computer
}
}