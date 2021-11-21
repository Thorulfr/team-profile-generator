const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = github;
    }

    getGithub() {}

    getRole() {
        // Overrides Employee to return "Engineer"
    }
}

module.exports = Engineer;
