const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> Complete Coding</title></head>');
        res.write('<body><h1>Hi, this is Ranjeet</h1>');
        res.write('<p>welcom to  my website</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url === '/product'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> Complete Coding</title></head>');
        res.write('<body><h1>Hi, this is Ranjeet</h1>');
        res.write('<p>checkk out</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> Complete Coding</title></head>');
        res.write('<body><h1>Hi, this is Ranjeet</h1>');
        res.write('<p>nikal, pahli fursat me nikal</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
   
});

const port = 3000;
server.listen(port,()=>{
    console.log(`this is running at-  http://localhost:${port}`);
})