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
    // const{choice,computer,number} = this.root.rps;
   console.log("Working..?");
//  result 데이터로 승패 비교하고 나머지 arr에 정보 추가
//  result reset ..
// 여기에 계산 logic

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
      return this.score.result;
  }
  
  @computed
  get getName(){
      return this.userName;
  }
  
  }