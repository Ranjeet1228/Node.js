const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method , req.headers);
    res.setHeader('Content-type', 'text/html');
    if(req.url ==='/'){
        res.write(`
            <html>
                <head><title>Ranjeet</title></head>
                <body>
                    <h1>Welcome to my page</h1>
                </body>
            </html>
        `);
        return res.end();
    } else if(req.url.toLowerCase() ==='/product'){
        res.write(`
            <html>
                <head><title>My webpage</title></head>
                <body>
                     <form action="/submit-details" method="POST">
                        <input type='text' placeholder='Enter your name'><br><br>
                        <label for='male'>Male</label>
                        <input type='radio'id='male' name='gender' value='male'><br><br>
                        <label for='female'>female</label>
                        <input type='radio'id='female' name='gender' value='female'><br><br>
                        <input type='submit' value='Submit'>
                    </form>
                </body>
            </html>
    `);
    return res.end();
    } else if(req.url ==='/submit-details' && req.method =="POST"){
        fs.writeFileSync('user.txt','Ranjeet');
        res.statusCode = 302; // Redirect
        res.setHeader('Location','/');
        return res.end();
    }
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Running at http://localhost:${PORT}`);
});