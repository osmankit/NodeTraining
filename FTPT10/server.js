const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*')

    res.writeHead(200) //status code  HTTP 200/ok

    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error, File not found');
        } else {
            res.write(data);
        }
        res.end();
    })
});

var port = 8000;
server.listen(port, function (err) {
    if (err) console.log('An error occured' + err)
    else console.log(`Server is listening to port: ${port}`);
})