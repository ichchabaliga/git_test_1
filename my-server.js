var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World from NodeJS! WELCOME TO THE WORLD OF Ichcha');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
});
