const Manager = require('../lib/Manager');

describe('Manager Creation', () => {
    test('Creates a Manager by extending the Employee class', () => {
        const manager = new Manager(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            '951753'
        );

        expect(manager.name).toEqual('Duke Nukem');
        expect(manager.id).toEqual('753951');
        expect(manager.email).toEqual('duke@nukem.com');
        expect(manager.officeNumber).toEqual('951753');
    });
});

describe('getOfficeNumber', () => {
    test('Returns the office number of the manager', () => {
        const manager = new Manager(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            '951753'
        );

        expect(manager.getOfficeNumber()).toEqual('951753');
    });
});

describe('getRole', () => {
    test('Returns the role of the manager', () => {
        const manager = new Manager(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            '951753'
        );

        expect(manager.getRole()).toEqual('Manager');
    });
});
