const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("Work")
    res.end("hello")
});

myserver.listen(8000, () => console.log("Now Running"))