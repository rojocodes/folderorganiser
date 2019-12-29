var typeList = require('../config/fileType.json')
var fileMover = require('./moveFiles')
const chalk = require('chalk');
const error = chalk.bold.red;
const info = chalk.bold.green;
const warning = chalk.keyword('orange');
var extract = require('../src/extract')

function getFolderForFile(files) {
    files.forEach((file) => {
        var extension = file.fileName.split(".").pop();
        extension = extension.toLowerCase();
        extract.extractType(extension).then(data => {
            var oldPath = file.folderName + "/" + file.fileName;
            var newPath = file.folderName + "/" + data.folder + "/" + file.fileName;
            console.log(`move ${oldPath} to ${newPath}`)
        }).catch(err => {
            console.log(`type ${extension} not supported`)
        })
        // if (type !== "others")
        //     fileMover.moveFiles(oldPath, newPath, file.folderName + "/" + type)
        // else {
        //     console.log(warning(`not moving file ${file.fileName} as type is not supported`))
        // }
    })
    console.log(info("Done"));
}

module.exports = {
    getFolderForFile
}