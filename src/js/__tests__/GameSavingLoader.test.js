import GameSavingLoader from "../classes/GameSavingLoader";

test('Тест метода load класса GameSavingLoader', (done) => {
    GameSavingLoader.load().then(saving => expect(JSON.parse(saving)).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1, name: 'Hitman', level: 10, points: 2000,
        }
    }));
    done();
});

test('Тест если произойдет обещание с ошибкой', () => {
    expect.assertions(1);
    return GameSavingLoader.load().catch(error => {
        expect.rejects();
    });
});
