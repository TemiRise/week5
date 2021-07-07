const http = require("http")
const fs = require ("fs")
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader = {"content-type":"text/html"};
    
    res.end('Hello')
})
server.listen(()=>{
    console.log(`Server listening on port:${port}`)
})

