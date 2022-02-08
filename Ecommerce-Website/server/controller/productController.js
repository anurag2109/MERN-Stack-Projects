
import Product from "../model/productSchema.js";


export const getProduct = async (request, responce) =>{
    try{
      const products =   await Product.find({});
      responce.json(products);
      
    }catch(error){
        console.log('Error: ', error.message);
    }
}

export const getProductbyId = async (request, responce) => {
  try{
    
    const product = await Product.findOne({ 'id': request.params.id });
    responce.json(product);

  }catch(error){
    console.log("Error: ", error.message);
  }
}