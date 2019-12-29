var types = require('../config/config.json');
var userTypes = require('../config/userConfig.json');

function extractType(type) {
    types = userTypes.concat(types)
    return new Promise((resolve, reject) => {
        types.forEach(element => {
            if (element.extensions.includes(type)) {
                resolve(element);
            }
        });
        reject(null);
    });
}

module.exports = {
    extractType
}