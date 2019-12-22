var filelister = require('./modules/listFiles')
var fileClassifier = require('./modules/classifyFiles')

function startMoving() {
    filelister.listAllFiles().then(files => {
        fileClassifier.getFolderForFile(files)
    })
}


module.exports = {
    startMoving
}