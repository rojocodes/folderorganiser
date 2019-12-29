var userTypes = require('../config/userConfig.json');
var fs = require('fs');

function saveConfig(options) {

    if (options.operationType === "edit") {
        for (i = 0; i < userTypes.length; ++i) {
            if (options.name === userTypes[i].name) {
                userTypes[i].extensions = userTypes[i].extensions.concat(options.extensions)
                userTypes[i].folder = options.folder;
                userTypes[i].fmaxsize = options.fmaxsize;
                writeToFile(userTypes);
                return ({
                    status: 1,
                    message: `${options.name} edited successfully`
                });
            }
        }
        return ({
            status: 0,
            message: `${options.name}no such extension type exists , use --help`
        })
    } else if (options.operationType === "add") {
        userTypes.push({
            name: options.name,
            extensions: options.extensions,
            folder: options.folder,
            fmaxsize: options.fmaxsize
        });
        writeToFile(userTypes);
        return ({
            status: 1,
            message: `${options.name} added successfully`
        })
    } else if (options.operationType === "delete") {
        userTypes = userTypes.filter((element) => element.name !== options.name);
        writeToFile(userTypes);
        return ({
            status: 1,
            message: `${options.name} removed successfully`
        })
    }


}

function writeToFile(userTypes) {
    let data = JSON.stringify(userTypes, null, 4);
    fs.writeFileSync('./config/userConfig.json', data);
}

module.exports = {
    saveConfig
}