
import {observable,action,computed} from "mobx";


export default class RpsStore {

    @observable choice="";
    @observable computer="";
    @observable number=15;

    hands=["rock","paper","scissors"];
    
// gameStarted는 Store에서 처리해야하는가
    @observable gameStarted=false;


constructor(root){
    this.root=root;
    
}

// @action computerAction = () =>{
//     let items = ["rock", "paper", "scissors"];
//     this.computer=items[Math.floor(Math.random() * items.length)]
// }

@action playerStart = () =>{
    this.gameStarted=true;
    this.number=15;
    const timeSet = setInterval(()=>{
       if(this.number===1){
           this.finish=true;
           clearInterval(timeSet)
       }
        this.finish=true;
        return this.number-=1},1000)
}




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
    let items = ["rock", "paper", "scissors"];
    this.computer=items[Math.floor(Math.random() * items.length)]
    this.number=15;
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
@computed
get count(){
    if(this.number>0){
        return this.number
    }
    else{
        // LOSE 이후 다음판 넘어가는 것, return handling
        return "LOSE"
    }
}
}