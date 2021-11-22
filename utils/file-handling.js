const fs = require('fs');

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, (err) => {
            // If there's an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                // Return out of the function to ensure the promise doesn't resolve
                return;
            }
            // If everything went well, resolve the promise and send the successful data to the .then() message
            resolve({
                ok: true,
                message: 'File created successfully!',
            });
        });
    });
};

const copyFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', (err) => {
            // If there's an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                // Return out of the function to ensure the promise doesn't resolve
                return;
            }
            // If everything went well, resolve the promise and send the successful data to the .then() message
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!',
            });
        });
    });
};

module.exports = { writeFile, copyFile };
