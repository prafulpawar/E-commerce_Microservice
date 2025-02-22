const dotenv  = require('dotenv');
dotenv.config()
const config = require('./src/config/config')
const app = require('./src/app');


app.listen(()=>{
     console.log(`Server Is Running On Port ${config.PORT}`)
})