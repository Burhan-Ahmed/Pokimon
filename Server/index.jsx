const http = require('http');
const userData = require("./src/MOCK_DATA.json");


const myserver = http.createServer((req, res) => {
    res.end("hello")
});

myserver.listen(8000)