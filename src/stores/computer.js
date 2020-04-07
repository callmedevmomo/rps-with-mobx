import {observable, action, computed} from "mobx";


export default class ComputerStore{

// observable state

@observable computer="";

constructor(root){
    this.root=root;
    
}

@action computerAction = () =>{
    let items = ["rock", "paper", "scissors"];
    this.computer=items[Math.floor(Math.random() * items.length)]

}

@computed
get computerChoice(){
    return this.computer
}


}