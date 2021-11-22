const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/file-handling');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?",
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the team manager's office number?",
            },
        ])
        .then((managerData) => {
            const manager = new Manager(
                managerData.managerName,
                managerData.managerId,
                managerData.managerEmail,
                managerData.managerOffice
            );
            employees.push(manager);
            console.log(employees);
            return moreEmployeesPrompt();
        });
};

engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
            },
        ])
        .then((engineerData) => {
            const engineer = new Engineer(
                engineerData.engineerName,
                engineerData.engineerId,
                engineerData.engineerEmail,
                engineerData.engineerGithub
            );
            employees.push(engineer);
            console.log(employees);
            return moreEmployeesPrompt();
        });
};

internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school?",
            },
        ])
        .then((internData) => {
            const intern = new Intern(
                internData.internName,
                internData.internId,
                internData.internEmail,
                internData.internSchool
            );
            employees.push(intern);
            console.log(employees);
            return moreEmployeesPrompt();
        });
};

moreEmployeesPrompt = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'moreEmployees',
            message: 'Would you like to add another employee to the team?',
            choices: ['Yes, an engineer', 'Yes, an intern', "No, I'm finished"],
        })
        .then((userAnswer) => {
            switch (userAnswer.moreEmployees) {
                case 'Yes, an engineer':
                    return engineerPrompt();
                case 'Yes, an intern':
                    return internPrompt();
                case "No, I'm finished":
                    return employees;
            }
        });
};

managerPrompt()
    .then((employeeData) => {
        return generatePage(employeeData);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
    });
