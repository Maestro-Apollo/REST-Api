const http = require('http');
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
    const headerObject = req.headers;
    console.log(headerObject);
};

app.createServer();