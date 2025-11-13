const express = require('express');
const router = require('./handler');
const app = express();

app.use('/',router);
app.listen(3000,()=>{
    console.log(`Running at http://localhost:3000`);
});