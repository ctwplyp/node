var fs = require('fs');
var path = require('path');
var extension=process.argv[3];

function printFile(err, data) {
	if (err) { return console.log(err) }
	for (let d of data){
	//data.forEach( function(d) {
		//console.log(d)

		let ext = path.extname(d);
	//	console.log(ext + "  " + extension)
		if(ext === "." + extension){
			console.log(d.toString());
		}
	}
}

fs.readdir(process.argv[2], 'utf8', printFile);



