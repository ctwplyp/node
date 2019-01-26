var fs = require('fs');
var path = require('path');

function printFile(err, data, extension) {
	if (err) { return console.log(err) }
	for (let d in data){
		let ext = path.extname(d);
		if(ext == extension){
			console.log(d);
		}
	}
}

fs.readdir(process.argv[2], process.argv[3], 'utf8', printFile);
