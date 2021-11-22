const Employee = require('../lib/Employee');

describe('Employee Creation', () => {
    test('Creates an employee using user input', () => {
        const employee = new Employee('Duke Nukem', '753951', 'duke@nukem.com');

        expect(employee.name).toEqual('Duke Nukem');
        expect(employee.id).toEqual('753951');
        expect(employee.email).toEqual('duke@nukem.com');
    });
});

describe('getName', () => {
    test('Returns the name of the employee', () => {
        const employee = new Employee('Duke Nukem', '753951', 'duke@nukem.com');

        expect(employee.getName()).toEqual('Duke Nukem');
    });
});

describe('getId', () => {
    test('Returns the ID of the employee', () => {
        const employee = new Employee('Duke Nukem', '753951', 'duke@nukem.com');

        expect(employee.getId()).toEqual('753951');
    });
});

describe('getEmail', () => {
    test('Returns the email of the employee', () => {
        const employee = new Employee('Duke Nukem', '753951', 'duke@nukem.com');

        expect(employee.getEmail()).toEqual('duke@nukem.com');
    });
});

describe('getRole', () => {
    test('Returns the role of the employee', () => {
        const employee = new Employee('Duke Nukem', '753951', 'duke@nukem.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});
