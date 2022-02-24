import axios from "axios";
import * as actionTypes from '../constants/cartConstant.js';



const url = "http://localhost:8000";

export const addToCart = (id) => async(dispatch) =>{
    try{
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data})
    }catch(error){
        console.log("Error while calling addToCart api: ", error.message);
    }
}
export const removeFromCart = (id) => (dispatch) =>{
    try{
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: id
        })
    }catch(error){
        console.log("Error while calling removeFromcart api: ", error.message);
    }
}