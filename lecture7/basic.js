const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
});
const port = 3002;
server.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});