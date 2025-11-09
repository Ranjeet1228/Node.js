const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'html/text');
    res.write("hi this is ranjeet");
    res.end();
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`running at http://localhost:${PORT}`);
});