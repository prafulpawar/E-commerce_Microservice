const express = require('express');
const app = express();
const userRoutes = require('./routes/user.Route');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users',userRoutes)

module.exports = app;