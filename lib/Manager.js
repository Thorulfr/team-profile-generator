const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = officeNumber;
    }

    getRole() {
        // Overrides Employee to return "Manager"
    }
}

module.exports = Manager;
