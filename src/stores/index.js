import ComputerStore from "./computer";
import PlayerStore from "./player";
import ScoreStore from "./score";
import CounterStore from "./counter"


class RootStore {
    constructor(){
        this.computer = new ComputerStore(this);
        this.player = new PlayerStore(this);
        this.score = new ScoreStore(this);
        this.counter = new CounterStore(this);
    }
}

export default RootStore;