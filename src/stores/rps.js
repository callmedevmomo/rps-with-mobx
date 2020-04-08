
import {observable,action,computed} from "mobx";


export default class RpsStore {

    @observable choice="";
    @observable computer="";
    @observable number=10;
    @observable roundCount=0;
    hands=["rock","paper","scissors"];
    
// gameStarted는 Store에서 처리해야하는가
    @observable gameStarted=false;

    
constructor(root){
    this.root=root;
    
}

@action playerStart = () =>{
    this.number=10;
    // this.number값에 따라서 시간초과시 패배로 
    this.gameStarted=true;
    const timeSet = setInterval(()=>{
       if(this.number===1){
           clearInterval(timeSet)
       }
        return this.number--
    },1000)
}



@action userChoice = (event) =>{
    this.roundCount++;
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
    // number &  choice(user) &  computer ++ key&index
    const {score,handleScore} = this.root.scores;
    // let roundCount=0;
    // const scoreResultObj = {};
    // scoreResultObj["round"]=roundCount++;
    // scoreResultObj["player"]=this.choice;
    // scoreResultObj["computer"]=this.computer;
    // number 는 push 할 필요 없이 승패여부만 확인
    // score[0].result.push(scoreResultObj);
    handleScore();
    // console.log(score);
    if(this.number===0){
        this.playerStart();
    }
    if(this.number!==0){
    this.number=10;
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
@computed
get count(){
    if(this.number>=0){
        return this.number
    }
        // LOSE 이후 다음판 넘어가는 것, return handling
        // score store 단에 패배 데이터 넘기고,
}
}