import {observable,action,computed} from "mobx";


export default class CounterStore{
    @observable number = 15;
    
    @observable finish = false;

    constructor(root){
        this.root=root;
    }

@action increase = ()=>{
    this.number++;
}
@action  decrease = () =>{
    const timeSet = setInterval(()=>{
       if(this.number===1){
           this.finish=true;
           clearInterval(timeSet)
       }
        return this.number-=1},1000)
}

@computed

get count(){
    if(this.number>0){
        return this.number
    }
    else{
        return "LOSE"
    }
}



}