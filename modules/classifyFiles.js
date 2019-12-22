var typeList = require('../config/fileType.json')
var fileMover = require('./moveFiles')
const chalk = require('chalk');
const error = chalk.bold.red;
const info = chalk.bold.green;
const warning = chalk.keyword('orange');

function getFolderForFile(files) {
    files.forEach((file) => {
        var extension = file.fileName.split(".").pop();
        extension = extension.toLowerCase();
        var type = typeList[extension] ? typeList[extension] : "others"
        //console.log(type + ":" + file.fileName)
        var oldPath = file.folderName + "/" + file.fileName;
        var newPath = file.folderName + "/" + type + "/" + file.fileName;
        //console.log(oldPath + " to " + newPath);
        if (type !== "others")
            fileMover.moveFiles(oldPath, newPath, file.folderName + "/" + type)
        else {
            console.log(warning(`not moving file ${file.fileName} as type is not supported`))
        }
    })
    console.log(info("Done"));
}

module.exports = {
    getFolderForFile
}