const http = require('http');
const httpProxy = require('http-proxy');

// var rules = new HttpProxyRules({
//     rules: {
//         'http://app1.mysite.com:8080*': 'http://localhost:3001',
//         'http://app2.mysite.com:8080*': 'http://localhost:3002',
//     },
// });

var proxy = httpProxy.createProxy();

http.createServer(function (req, res) {
    const host = req.headers['host'];

    console.log("req", req.url);

    let target;
    if(host == "app.mysite.com:8080") {
        target = "http://localhost:3001";
    }
    else if(host == "auth.mysite.com:8080") {
        target = "http://localhost:3002";
    }

    if(target) {
        return proxy.web(req, res, {
            target: target
        });
    }

    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('The request url and path did not match any of the listed rules!');
}).listen(8080, function () {
    console.log("Proxy server is running");
});
