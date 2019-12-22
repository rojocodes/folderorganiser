const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const error = chalk.bold.red;
const info = chalk.bold.green;
const warning = chalk.keyword('orange');
//joining path of directory 
const directoryPath = process.cwd();
//passsing directoryPath and callback function
function listAllFiles() {
    var promise = new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                console.log(error('Unable to scan directory: ' + err));
                promises.push(new Promise((resolve, reject) => {
                    reject("cant read files in current folder");
                }))
            }
            var arr = [];
            for (var i = 0; i < files.length; i++) {
                var filePath = directoryPath + "/" + files[i]
                var stat = fs.statSync(filePath);
                // Do whatever you want to do with the file
                if (stat.isFile())
                    arr.push({
                        folderName: directoryPath,
                        fileName: files[i]
                    });
            }
            resolve(arr);
        });
    })

    return promise
}

module.exports = {
    listAllFiles
}