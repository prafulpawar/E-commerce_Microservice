const _config ={
      PORT:process.env.PORT,
      MONGO_URI_ADMINS:process.env.MONGO_URI_ADMINS,
      JWT_SECRET:process.env.JWT_SECRET
} 

const config = Object.freeze(_config)
module.exports = config