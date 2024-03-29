import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { ShoppingCart, FlashOn } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';


const useStyle = makeStyles( theme=>({
    leftContainer:{
        minWidth: '40%',
        padding: '40px 0 0 80px',
        

    },
    image:{
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button:{
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addToCart:{
        background: '#ff9f00',
        color: 'white',
        marginRight: 10
    },
    buyNow:{
        background: '#fb641b',
        color: 'white'
    }
}))

const ActionItem = ({product}) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addItemToCart = () =>{
        dispatch(addToCart(product.id));
        navigate('/cart');
    }

  return (
    <Box className={classes.leftContainer}>
        <img className={classes.image} src={product.detailUrl} alt="itemImg" />
        <Button onClick={() => addItemToCart()} variant='contained' className={clsx(classes.button, classes.addToCart) } > <ShoppingCart/> Add to cart</Button>
        <Button variant='contained' className={clsx(classes.button, classes.buyNow)}> <FlashOn/> Buy now</Button>
    </Box>
  )
};

export default ActionItem;
