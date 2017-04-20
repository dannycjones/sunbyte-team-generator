const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('template.pug');

const teamData = JSON.parse(fs.readFileSync('team.json').toString());

if (process.argv[2]) {
  fs.writeFileSync(process.argv[2], compiledFunction(teamData));
} else {
  process.stdout.write(compiledFunction(teamData));
}
