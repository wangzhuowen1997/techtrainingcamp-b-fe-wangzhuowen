const http = require('http');
const port = 9000;
const hostname = 'localhost';
const path = require('path');
const fs = require('fs');
const url = require('url');
http.createServer(function (request, response) {
    const urlObj = url.parse(request.url);
    const staticPath = path.join(__dirname, 'static');
    if (urlObj.pathname === '/') {
        urlObj.pathname += 'index.html'
    }
    const filePath = path.join(staticPath, urlObj.pathname);


    fs.readFile(filePath, 'binary', function (error, filecontent) {
        if (error) {
            throw error
        } else {
            response.write(filecontent, 'binary')
            response.end()
        }
    })

}).listen(port, hostname, function () {
    console.log(`The server running in:http://${hostname}:${port}`)
})
