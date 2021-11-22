const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'manager';
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
