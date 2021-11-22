const Intern = require('../lib/Intern');

describe('Intern Creation', () => {
    test('Creates an Intern by extending the Employee class', () => {
        const intern = new Intern(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            "Nuke 'Em High"
        );

        expect(intern.name).toEqual('Duke Nukem');
        expect(intern.id).toEqual('753951');
        expect(intern.email).toEqual('duke@nukem.com');
        expect(intern.school).toEqual("Nuke 'Em High");
    });
});

describe('getGithub', () => {
    test('Returns the school of the intern', () => {
        const intern = new Intern(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            "Nuke 'Em High"
        );

        expect(intern.getSchool()).toEqual("Nuke 'Em High");
    });
});

describe('getRole', () => {
    test('Returns the role of the intern', () => {
        const intern = new Intern(
            'Duke Nukem',
            '753951',
            'duke@nukem.com',
            "Nuke 'Em High"
        );

        expect(intern.getRole()).toEqual('Intern');
    });
});
