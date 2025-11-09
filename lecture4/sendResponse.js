const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> Complete Coding</title></head>');
    res.write('<body><h1>Hi, this is Ranjeet</h1>');
    res.write('<p>This is my website</p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const port = 3000;
server.listen(port,()=>{
    console.log(`this is running at-  http://localhost:${port}`);
})