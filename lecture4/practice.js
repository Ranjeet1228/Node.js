const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req.url, req.method, req.headers);

    if(req.url ==='/home'){
        res.write(`<h1>Welcome to home page</h1>`);
        return res.end();
    } else if(req.url ==="/men"){
        res.write(`<h1> welcome to men section`);
        return res.end();
    } else if(req.url === "/women"){
        res.write(`<h1>welcome to women section</h1>`);
        return res.end();
    } else if(req.url === "/kids"){
        res.write(`<h1>This is kids section</h1>`);
        return res.end();
    }else if(req.url==="/cart"){
        res.write(`<h1> this is cart section</h1>`);
        return res.end();
    }
   
    res.setHeader('content-type', 'text/html');
    
    res.write(`
        <html>
            <head> <title>Heading</title> </head>
                <body>
                    <h1> this is home page<h1>
                    <p> Welcome to home page</p>
                    <nav>
                        <ul>
                            <li><a href = "/home">Home</a></li>
                            <li><a href = "/men">Men</a></li>
                            <li><a href = "/women">Womens</a></li>
                            <li><a href = "/kids">kids</a></li>
                            <li><a href = "/cart">cart</a></li>
                        </ul>
                    </nav>
                </body>
        </html>
        `);
    
});
const port = 3000;
server.listen(port,() =>{
    console.log(`this is running at :- http://localhost:${port}`);
});