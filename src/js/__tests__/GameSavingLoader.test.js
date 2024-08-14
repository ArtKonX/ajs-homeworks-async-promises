import GameSavingLoader from "../classes/GameSavingLoader";

test('Тест метода load класса GameSavingLoader', async () => {
    const res = JSON.stringify(
        {
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1, name: 'Hitman', level: 10, points: 2000,
            }
        }
    )

    return GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(res);
    });
})