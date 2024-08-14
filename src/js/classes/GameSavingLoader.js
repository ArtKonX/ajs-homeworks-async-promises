import json from "../modules/parser";
import read from "../modules/reader";

export default class GameSavingLoader {
    static async load() {
        return read().then((data) => json(data));
    }
}