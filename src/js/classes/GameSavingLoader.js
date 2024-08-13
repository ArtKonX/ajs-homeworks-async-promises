import json from "../modules/parser";
import read from "../modules/reader";

export default class GameSavingLoader {
    static async load() {
        const data = await read();
        return await json(data);
    }
}