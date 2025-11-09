const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
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
                        <input type='text' placeholder='Enter your name' name = 'username'><br><br>
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

        const body = [];
        req.on('data',chunk =>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',() =>{
            const fullbody =   Buffer.concat(body).toString();
            console.log(fullbody);
            const param = new URLSearchParams(fullbody);
            // const jsonObject = {};
            // for(const [key,value] of param.entries()){
            //     jsonObject[key] = value;
            // }
            // console.log(jsonObject);

            const bodyObject = Object.fromEntries(param);
            console.log(bodyObject);
            fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
        })
        
        res.statusCode = 302; // Redirect
        res.setHeader('Location','/');
        res.write(`
            <html>
                <head><title>My webpage</title></head>
                <body>
                    <h1>Thank You </h1>
                </body>
            </htm>   
            `);
        return res.end();
    }
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Running at http://localhost:${PORT}/product`);
});