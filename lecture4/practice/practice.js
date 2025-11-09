const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req.headers, req.url);
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <nav>
                <Ol>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/cart">Cart</a></li>
                </Ol>
            </nav>
        </body>
        </html>
        `)
    if(req.url==="/home"){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <h1>This is home page</h1>
        </body>
        </html>`)
        return res.end();
    }
    else if(req.url === "/men"){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <h1>This is Mens section</h1>
        </body>
        </html>`)
        return res.end();
    } else if(req.url ==="/women"){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <h1>This is Women section</h1>
        </body>
        </html>`)
        return res.end();
    }
    else if(req.url === "/kids"){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <h1>This is Kids section</h1>
        </body>
        </html>`)
        return res.end();
    }
    else if(req.url === "/cart"){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            <h1>Welcome to the cart</h1>
        </body>
        </html>`)
        return res.end();
    } else{
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>website</title>
        </head>
        <body>
            
            <h1>Kindly choose right website</h1>
        </body>
        </html>`)
        return res.end();
    }
    
});
const port = 3000;
server.listen(port,()=>{
    console.log(`Running at:- http://localhost:${port}`);
})