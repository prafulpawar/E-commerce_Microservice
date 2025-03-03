module.exports.stockDetailsCategory = async(req,res)=>{
    try{
         const {category} = req.body;

    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}

module.exports.stockDetailsProduct = async(req,res)=>{
    try{
         const {product} = req.body;

    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}


module.exports.stockDetailsSubcategory = async(req,res)=>{
    try{
         const {Subcategory} = req.body;
         

    }
    catch(error){
        return res.status(400).json({
            message:"Cant Get Details Of Stock"
        })
    }
}