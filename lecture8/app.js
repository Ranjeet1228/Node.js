const http = require('http');
const {test} = require('./syntax');
const server = http.createServer((req,res) =>{
    console.log(req.url, req.method);
    test();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> Complete Coding</title></head>');
    res.write('<body><h1>Hi, this is Ranjeet</h1>');
    res.write('<p>This is my website</p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})

const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Running at http://localhost:${PORT}`);
})