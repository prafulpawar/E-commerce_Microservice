const express = require('express');
const app = express();
app.listen(5001,()=>{
    console.log("Admin Server Running ",5001)
})
module.exports = app