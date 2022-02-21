import React from 'react'
import axios from 'axios';
import * as actionTypes from '../constants/cartConstants';
import { useDispatch } from 'react-redux';
 
const url = 'http://localhost:8000';

export const addToCart =async (id) => async(dispatch) => {
    
    try{
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data })
    }catch(error){
        console.log("Error while calling addToCart api: ", error.message)
    }
}