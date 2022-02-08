import axios from "axios";
import * as action from "../constants/productConstant.js";



const url = "http://localhost:8000";


export const getProduct = () => async (dispatch) =>{
    try{
       const { data } = await axios.get(`${url}/products`);
       dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data})
    }catch(error){
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.responce})
    }
}

export const getProductDetails = (id) => async (dispatch) =>{
    try{
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data})
        
    }catch(error){
        dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.responce})
    }
}