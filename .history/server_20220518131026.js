// require built-in modules
const http = require('http');

const port = 3000;

// when the server is instantiated (created) it is IMMUTABLE
const server = http.createServer(function(req, res)
{
    console.log("Hello World!");
    console.log("Directory Name: " + __dirname);
});

server.listen(port, function()
{
    console.log("Server Running at Port: " + port);
});
