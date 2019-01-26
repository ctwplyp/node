var fs = require('fs');

function buffSplitOutput(err, data) {
	if (err) { return console.log(err) }
	var lines = data.toString().split('\n');
	console.log(lines.length-1);
}

fs.readFile(process.argv[2], 'utf8', buffSplitOutput);
