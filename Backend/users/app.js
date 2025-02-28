const express = require('express');
const app = express();

app.listen(5002,()=>{
    console.log("Admin Server Running ",5002)
})


module.exports = app