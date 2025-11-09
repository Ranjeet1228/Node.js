const sumReqHandler = (req,res) =>{
    console.log("IN sum request handler", req.url);
    const body =[];
    req.on('data',chunk =>{
        body.push(chunk);
    });
    req.on('end',()=>{
        const fullbody = Buffer.concat(body).toString();
        const param = new URLSearchParams(fullbody);

        const num1 = Number(param.get(`num1`));
        const num2 = Number(param.get('num2'));
        const sum = num1+num2;
        console.log(sum);
        res.write(`
            <html lang="en">
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Result : ${num1} + ${num2}:- ${sum}</h1>
                <a href="/">Go back to home</a>
            </body>
            </html>
        `);
        return res.end();
    })
    
}
exports.sumReqHandler = sumReqHandler;
