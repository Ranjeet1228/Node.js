const http = require('http');
const { type } = require('os');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>Response generator</title></head>');
        res.write('<body><h1>welcome to home</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url ==='/input'){
        res.setHeader('Content-Type', 'text/html');
res.write(`
        <html>
        <head><title>Response generator</title></head>
        <body>
          <h1>Welcome to our page</h1>
          <form action="/submit-details" method="POST">
            <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
            <label for ="male">Male:</label>
            <input type="radio" id="male" name="gender" value="male"><br>
            <label for= "female">female</label>
            <input type="radio" id="female" name="gender" value="female"><br><br>
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
`);
res.end();

        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>Response generator</title></head>');
        res.write('<body><h1>Nikal mc</body>');
        res.write('</html>');
});

const port = 3000;
server.listen(port,()=>{
    console.log(`running at http://localhost:${port}`);
})