const chalk = require('chalk');

function arguments(args) {
    parse(args)
}

function parse(args) {
    args.splice(0, 2);
    args.forEach(arg => {
        if (arg === '--help') {
            const fs = require('fs')
            const help = fs.readFileSync('./src/help.txt')
            console.log(chalk.yellow(help));
            process.exit();
        } else if (arg === '--fmaxsize') {
            const size = Number(fetchArgValueAndRest(args, arg));
            if (Number.isNaN(size)) {
                throw new Error('Item after `fmaxsize` must be a number, run with --help');
            } else {
                console.log(`setting fmax size to ${size}MB`);
            }
        } else {
            throw new Error(`invalid cli option ${arg},run with --help`)
            process.exit();
        }
    });
}

function fetchArgValueAndRest(args, arg) {
    val = args[args.indexOf(arg) + 1];
    args.splice(args.indexOf(arg) + 1, 1);
    return val;
}

module.exports = {
    arguments
}