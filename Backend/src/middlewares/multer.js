const multer = require('multer');

const multer = multer.diskStorage({
     destination:(req,file,cb)=>{
        cb(null,'./upload')
     },
     filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+filename.originalname)
     }
})

const upload  = multer({storage:storage})
module.exports = upload