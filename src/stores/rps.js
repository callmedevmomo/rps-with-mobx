
import {observable,action,computed} from "mobx";


export default class RpsStore {

    @observable choice="";
    @observable computer="";
    @observable number=10;
    @observable roundCount=0;
    @observable gameStarted=false;

    hands=["rock","paper","scissors"];
    

    
constructor(root){
    this.root=root;
    
}

@action playerStart = () =>{
    this.number=10;
    this.root.scores.allGameFinished=false;
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
    const {score,handleScore} = this.root.scores;
    handleScore();
    // console
    console.log(score);
    if(this.number===0){
        this.playerStart();
    }
    if(this.number!==0){
    this.number=10;
}
}

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
    return this.number
}
}