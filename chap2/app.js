const http = require('http')
const os = require('os')

console.log("kube server starting ...")

var handler = function (request, response) {
  console.log("receivedd request from " + request.connection.remoteAddress );
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
}

var www = http.createServer(handler)
www.listen(8080)

