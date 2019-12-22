var fs = require('fs');
const chalk = require('chalk');
const error = chalk.bold.red;
const info = chalk.bold.green;
const warning = chalk.keyword('orange');

function moveFiles(oldPath, newPath, folder) {
    console.log(info("Trying to move " + oldPath + " to " + newPath));
    if (!getFilesizeInBytes(oldPath)) {
        console.log(warning("skipping large file of size > 500Mb: " + oldPath));
        return;
    }
    checkAndMake(folder);
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                console.log(error(err));
            }
            return;
        }
    });


}

function checkAndMake(folder) {
    var dir = folder
    if (!fs.existsSync(dir)) {
        console.log(warning(folder + " does not exist already, making new"));
        fs.mkdirSync(dir);
    }
}

function getFilesizeInBytes(filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]
    var MAX_FILE_SIZE = 500 * 1024 * 1024;
    if (fileSizeInBytes >= MAX_FILE_SIZE)
        return false
    else
        return true
}

function copy() {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', function () {
        fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
}

module.exports = {
    moveFiles
}