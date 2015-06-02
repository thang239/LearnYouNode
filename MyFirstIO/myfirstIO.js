var fs = require('fs');
buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
console.log(str.split('\n').length-1);

