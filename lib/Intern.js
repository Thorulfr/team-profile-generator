const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();
        this.school = school;
    }

    getSchool() {}

    getRole() {
        // Overrides Employee to return "Intern"
    }
}

module.exports = Intern;
