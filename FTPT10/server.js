const http = require('http');
const fs = require('fs');
let PiD = require('./cluster');
let pidResponse = PiD;
let port = 2000;

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log("pid inside server http inst is ", pidResponse);
    res.writeHead(200) //status code  HTTP 200/ok
    res.write(`Pid is ${pidResponse}`);
    res.end();
});
console.log("pid outside server http inst is ", PiD);
server.listen(port, function (err) {
    if (err) console.log('An error occured' + err)
    else console.log(`Server is listening to port: ${port}`);
})