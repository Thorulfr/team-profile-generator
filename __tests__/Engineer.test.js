const Engineer = require('../lib/Engineer');

describe('Engineer Creation', () => {
    test('Creates an Engineer by extending the Employee class', () => {
        const engineer = new Engineer(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            'dukenukem'
        );

        expect(engineer.name).toEqual('Duke Nukem');
        expect(engineer.id).toEqual('753951');
        expect(engineer.email).toEqual('duke@nukem.com');
        expect(engineer.github).toEqual('dukenukem');
    });
});

describe('getGithub', () => {
    test('Returns the Github username of the engineer', () => {
        const engineer = new Engineer(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            'dukenukem'
        );

        expect(engineer.getGithub()).toEqual('dukenukem');
    });
});

describe('getRole', () => {
    test('Returns the role of the engineer', () => {
        const engineer = new Engineer(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            'dukenukem'
        );

        expect(engineer.getRole()).toEqual('Engineer');
    });
});
