const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('template.pug');

const teamData = JSON.parse(fs.readFileSync('team.json').toString());

process.stdout.write(compiledFunction(teamData));
