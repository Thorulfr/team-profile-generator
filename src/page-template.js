const generateEmployeeCard = (employeeObject) => {
    return `
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${employeeObject.getName()}</p>
                        <p class="subtitle is-6">${employeeObject.getRole()}</p>
                    </div>
                </div>
                <div class="content">
                    Employee ID: ${employeeObject.getId()}
                    <br>
                    Employee Email: <a href='mailto:${employeeObject.getEmail()}'>${employeeObject.getEmail()}</a>
                    <br>
                </div>
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
            <body>
                <section class="section">
                    ${employeeCardsArray}
                </section>
            </body>
        </html>
    `;
};
