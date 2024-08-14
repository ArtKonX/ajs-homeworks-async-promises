import GameSavingLoader from "./classes/GameSavingLoader";
import GameSaving from "./classes/GameSaving";

GameSavingLoader.load().then((saving) => {
    const data = JSON.parse(saving);

    return new GameSaving(data)
}, (error) => {
    console.error(error)
});