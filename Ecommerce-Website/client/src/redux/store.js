import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducers, getProductDetailsReducer } from './reducers/productReducers.js';

const reducer = combineReducers({
    getProducts: getProductsReducers,
    getProductDetails : getProductDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;
