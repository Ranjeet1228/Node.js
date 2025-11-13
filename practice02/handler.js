const express = require('express');
const router = express.Router(); 
router.use(express.urlencoded({extended: true}));

 router.get('/',(req,res,next)=> {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <style>
            body{
                background-color: rgb(52, 97, 160);
            }
            .details{
                margin: 400px;
                border: 2px solid black;
                margin-top: 10px;
                text-align: center;
                background-color: bisque;
            }
        </style>
        <body>
            <h1>CONTACT-US</h1>
            <div class="details">
                <form action="/submit-detail" method ="POST"><br><br>
                    <input type="text" placeholder="Enter your name" name="name" id="name"><br><br>
                    <input type="email" placeholder="Enter eamil id"name ="email" id="email"><br><br>
                    <input type="submit" type="Submit">
                </form>
            </div>
        </body>
        </html>
        `);
});
 router.post('/submit-detail',(req,res,next) =>{
    const {name,email} = req.body;
    console.log(name,email)
    res.send(`
        <h1> Thank You</h1>
        We have recieved
        <p>Name: - ${name}</p>
        <p> Email: - ${email}</p>
        <a href = "/">Go Back</a>
    `);
});

module.exports=  router;