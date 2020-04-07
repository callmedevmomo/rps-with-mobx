import RpsStore from "./rps";
import ScoreStore from "./scores";


class RootStore {
    constructor(){
        this.rps = new RpsStore(this);
        this.scores = new ScoreStore(this);
    }
}

export default RootStore;