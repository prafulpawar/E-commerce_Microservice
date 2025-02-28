const express = require('express');
const app = express();

app.listen(5000,()=>{
    console.log("API Server Running ",5000)
})

module.exports = app