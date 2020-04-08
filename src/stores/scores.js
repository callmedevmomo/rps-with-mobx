import {observable,action,computed} from "mobx";



export default class ScoreStore{


@observable score = [
    {
    result:[],
    player:0,
    computer:0,
    tie:0,
    gameRound:1,

    setCount:1,
    setPlayer:0,
    setComputer:0,
    setTie:0
}
]
view =[this.score.player,this.score.computer,this.score.item]
@observable allGameFinished=null;

  constructor(root){
      this.root=root;
      
  }
  @action handleScore = () =>{
    const {choice,computer,number,roundCount}=this.root.rps;
    const scoreResultObj={};
    scoreResultObj["round"]=roundCount;
    scoreResultObj["player"]=choice;
    scoreResultObj["computer"]=computer;

    if(number===0){
        scoreResultObj["round"]=roundCount;
        scoreResultObj["player"]="time out";
        scoreResultObj["computer"]="time out";
        scoreResultObj["result"]="lose"
    }
    else {
        scoreResultObj["round"]=roundCount;
        scoreResultObj["player"]=choice;
        scoreResultObj["computer"]=computer;
        scoreResultObj["result"]=this.roundResult(choice,computer,number)
    };
    this.score[0].result.push(scoreResultObj);
    const result = this.score[0].result[roundCount-1]["result"]
    this.roundDetail(result)
    // this.score[0].setRound++;
    // console.log(this.score[0].result[roundCount-1]["result"])
    console.log(this.score)

  }

@action roundDetail(result){
if(this.score[0].gameRound<3){
    if(result==="win"){
        this.score[0].player++;
    }else if(result==="lose"){
        this.score[0].computer++;
    }else{
        this.score[0].tie++;
    }
    this.score[0].gameRound++;
}
else if (this.score[0].gameRound===3){
    this.score[0].gameRound=1;
    this.setDetail(this.score[0].player,this.score[0].computer);
}
}

@action setDetail  (player,computer) {
const {setCount, setPlayer,setComputer,setTie } = this.score[0];
if(player>computer){
    this.score[0].setPlayer++;
}else if(player<computer){
    this.score[0].setComputer++;
}else if(player===computer){
    this.score[0].setTie++;
}
this.score[0].setCount++;
if(setCount===6){
    this.setFinished(setPlayer,setComputer,setTie)
}
this.score[0].player=0;
this.score[0].computer=0;
this.score[0].tie=0;
}

@action setFinished = (player,computer,tie) => {
    this.root.rps.gameStarted=false;
    this.allGameFinished = `Player Win : ${player} SET, Computer Win : ${computer} SET, Draw Game : ${tie} SET`
}


  @action roundResult (choice,computer,number)
  {
    const rsp = {
    rock: { beats: ["scissors"] },
    paper: { beats: ["rock"] },
    scissors: { beats: ["paper"] }
  };
  if(number===0){
    return "Timeout"
}
  else if (this.root.rps.roundCount===0){
      return "I'm Ready!"
  }
  
  else if(choice===computer){
    return "draw";
  } else if ( rsp[choice].beats.indexOf(computer)!==-1){
      return "win";
  }else{
      return "lose"
  }
  }


  @computed 
  get getScore(){
      return this.roundResult(this.root.rps.choice,this.root.rps.computer,this.root.rps.number);
  }
  
  @computed
  get getName(){
      return this.userName;
  }
  
  @computed
  get gameResult(){
      return this.allGameFinished;
  }
  }