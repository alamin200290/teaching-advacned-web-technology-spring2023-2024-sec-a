"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    res.end('hello world');
});
server.listen(3000, function () { return console.log('server is running'); });
