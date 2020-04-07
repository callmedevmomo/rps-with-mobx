import {observable,action,computed} from "mobx";



export default class ScoreStore{

@observable userName="momo";

@observable score = {
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



    // observable state
    //  hands = ['r', 's', 'p'];
  
  constructor(root){
      this.root=root;
      
  }

  @action handleUser = (event) =>{
    // console.log(event);
    const {target:{value}} = event;
    this.userName=value;
    console.log(this.userName)

  }


  @action handleScore = ()=>{
    //   const {gameStarted} =this.root.rps;

    
  }
  

  
  
  
  // action ( controller )
  
  
  // 필요하다면 computed ==>
  @computed 
  get getScore(){
      return this.score;
  }
  
  @computed
  get getName(){
      return this.userName;
  }
  }