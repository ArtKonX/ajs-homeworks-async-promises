import GameSavingLoader from "../classes/GameSavingLoader";

test('Тест метода load класса GameSavingLoader', () => {
    return GameSavingLoader.load().then(saving => expect(JSON.parse(saving)).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1, name: 'Hitman', level: 10, points: 2000,
        }
    }));
});

test('Тест если произойдет обещание с ошибкой', () => {
    return GameSavingLoader.load().catch(error => {
        expect(error).toThrow();
    });
});
