const inquirer = require('inquirer');
const Employee = require('./Employee');

class Prompts {
    constructor() {
        this.answers = [];
    }

    managerPrompt() {
        inquirer
            .prompt({
                type: 'text',
                name: 'managerName',
                message: "What is the team manager's name?",
            })
            .then(({ managerName }) => {
                this.answers.push(managerName.name);
                console.log(this.answers);
            });
    }
}

module.exports = Prompts;
