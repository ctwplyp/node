let sum = 0;
let strSpl = process.argv.slice(2,5);
console.log(strSpl.reduce((a, b) => 
	+a + +b));
