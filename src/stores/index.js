import RpsStore from "./rps";
import ScoreStore from "./score";
import CounterStore from "./counter"


class RootStore {
    constructor(){
        this.rps = new RpsStore(this);
        this.score = new ScoreStore(this);
        this.counter = new CounterStore(this);
    }
}

export default RootStore;