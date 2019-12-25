#!/usr/bin/env node

var cli = require('./src/cli')
const chalk = require('chalk');
try {
    // import the cli function from cli.js
    cli.arguments(process.argv);
} catch (error) {
    console.log(chalk.redBright(`Error: ${error.message}`))
}