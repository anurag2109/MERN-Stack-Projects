import express  from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import { getProduct, getProductbyId } from "../controller/productController.js";

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProduct);
router.get('/product/:id', getProductbyId);

export default router;