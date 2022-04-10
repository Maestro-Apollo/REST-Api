const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

const app = {};

app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.requestListener);
    server.listen(app.config.port);
    console.log('Server Listening');
};

app.requestListener = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl.pathname);
    // console.log(parseUrl);
    res.end('Hello programmers!');
    const method = req.method.toLowerCase();
    console.log(method);
    const headerObject = req.headers;
    console.log(headerObject);

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
    });
};

app.createServer();