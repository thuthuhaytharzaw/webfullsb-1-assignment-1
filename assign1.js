const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/assign1.html','utf8');
    myReadStream.pipe(res);
}).listen(2222);