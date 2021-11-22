const generateEmployeeCard = (employeeObject) => {
    console.log(employeeObject.constructor.name);
    if (employeeObject.constructor.name === 'Manager') {
        employeeObject.extraData = `Office Number: ${employeeObject.getOfficeNumber()}`;
    } else if (employeeObject.constructor.name === 'Engineer') {
        employeeObject.extraData = `<a href="https://github.com/${employeeObject.getGithub()}">Github</a>`;
    } else {
        employeeObject.extraData = `School: ${employeeObject.getSchool()}`;
    }
    return `
        <div class="message is-primary m-5">
            <p class="is-flex message-header">${employeeObject.getName()}</p>
            <div class="message-body">
                ${employeeObject.getRole()}
                <br>
                ID: ${employeeObject.getId()}
                <br>
                Email: <a href='mailto:${employeeObject.getEmail()}'>${employeeObject.getEmail()}</a>
                <br>
                ${employeeObject.extraData}
            </div>
        </div>
        `;
};

module.exports = (employeeArray) => {
    let employeeCardsArray = [];
    for (let i = 0; i < employeeArray.length; i++) {
        employeeCardsArray += generateEmployeeCard(employeeArray[i]);
    }

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Team Profile!</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            </head>
            <body class="container is-max-desktop">
                <div class="has-text-centered">
                    <h1 class="title">My Team</h1>
                </div>
                <div>
                        ${employeeCardsArray}
                </div>
            </body>
        </html>
    `;
};
