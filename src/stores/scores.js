import {observable,action,computed} from "mobx";



export default class ScoreStore{

@observable userName="momo";

@observable score = [
    {
    result:[],
    userName:"",

    player:0,
    computer:0,
    tie:0,
    gameRound:0,

    setCount:0,
    setPlayer:0,
    setComputer:0,
    setTie:0
}
]
    // observable state
    //  hands = ['r', 's', 'p'];
  
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
// const{choice,computer,number} = this.root.rps;
   console.log("Working..?");
//  result 데이터로 승패 비교하고 나머지 arr에 정보 추가
//  result reset ..
// 여기에 계산 logic

  }

@action roundDetail = (result) => {
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
    this.score[0].gameRound=0;
    this.setDetail(this.score[0].player,this.score[0].computer);
    // this.score[0].player&&computer&&tie
    // this.score[0].setCount++;
}
}

@action setDetail = (player,computer) =>{
this.score[0].setCount++;
if(player>computer){
    this.score[0].setPlayer++;
}else if(player<computer){
    this.score[0].setComputer++;
}else if(player===computer){
    this.score[0].setTie++;
}
this.score[0].player=0;
this.score[0].computer=0;
this.score[0].tie=0;
}
  // 계산 로직

//   player:0,
//   computer:0,
//   tie:0,
//   gameRound:0,

  @action roundResult = (choice,computer,number)=>
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

  @action roundReset = (roundCount)=>{
    if(roundCount===3){

    }
  }

//   @action handleScore = ()=>{
//       const { choice,computer,number} = this.root.rps;
//       this.score.push(choice,computer,number);
//       console.log(choice,computer,number);
//     //   const {gameStarted} =this.root.rps;

  
//   }
  

  
  
  
  // action ( controller )
  
  
  // 필요하다면 computed ==>

  @computed 
  get getScore(){
      return this.roundResult(this.root.rps.choice,this.root.rps.computer,this.root.rps.number);
  }
  
  @computed
  get getName(){
      return this.userName;
  }
  
  }