const express = require('express');
const app = express();
const userRoutes = require('./routes/user.Route');
const categoryRoutes = require('./routes/category.Route')
const productRoutes = require('./routes/product.Route')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users',userRoutes)
app.use('/category',categoryRoutes)
app.use('/product',productRoutes)
module.exports = app;