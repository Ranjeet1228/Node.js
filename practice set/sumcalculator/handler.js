const { method } = require("lodash");
const {sumReqHandler} = require('./sum');
const fs = require('fs');
const {json} = require('stream/consumers');
const requestHandler =(req,res)=>{
    console.log(req.url, req.url);
    res.setHeader('Content-Type','text/html');
    if(req.url ==='/'){
        res.write(`
            <html lang="en">
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to home page of Calculator</h1>
                <a href="/sum">Go to calculator</a>
            </body>
            </html>
        `);
        return res.end();
    }else if(req.url ==='/sum'){
        res.write(`
            <html lang="en">
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <form action="/calculate-result" method="POST">
                    <input type="text" placeholder="Enter number" name="num1">+
                    
                    <input type="text" placeholder="Enter another" name="num2"> <br><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        `);
        return res.end();
    } else if(req.url ==='/submit-details'){
        const body =[];
        req.on('data',chunk =>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const fullbody = Buffer.concat(body).toString();
            const param = new URLSearchParams(fullbody);
            const bodyObj = Object.fromEntries(param);
            console.log(bodyObj);
            fs.writeFileSync('user.txt',JSON.stringify(bodyObj));
        });
        res.statusCode = 302;// Redirect
        res.setHeader('Location','/');
        return res.end();
    } else if(req.url.toLowerCase() ==='/calculate-result' && req.method ==="POST"){
        return sumReqHandler(req,res);
    }
    
    else{
        res.write(`
            <html lang="en">
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>404 error</h1>
                <a href="/">Go to home</a>
            </body>
            </html>
        `);
        return res.end();
    }
}
exports.requestHandle = requestHandler;