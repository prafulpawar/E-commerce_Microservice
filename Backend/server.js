const dotenv  = require('dotenv');
dotenv.config()
const config = require('./src/config/config')
const ConnectDB = require('./src/db/db')
ConnectDB()

const app = require('./src/app');


app.listen(config.PORT,()=>{
     console.log(`Server Is Running On Port ${config.PORT}`)
})