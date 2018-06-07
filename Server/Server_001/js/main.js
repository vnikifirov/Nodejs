const http = require('http')
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 9060;
const fileName = '../index.html';

fs.readFile(fileName, (err, html) => {
    if (err) { throw err; }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port, hostName, () => {
        console.log('Server started on port: ' + port);
    });
});