import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { ShoppingCart, FlashOn } from '@material-ui/icons';


const useStyle = makeStyles({
    leftContainer:{
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
})

const ActionItem = ({product}) => {
    const classes = useStyle();


  return (
    <Box className={classes.leftContainer}>
        <img className={classes.image} src={product.detailUrl} alt="itemImg" />
        <Button variant='contained' className={clsx(classes.button, classes.addToCart) } > <ShoppingCart/> Add to cart</Button>
        <Button variant='contained' className={clsx(classes.button, classes.buyNow)}> <FlashOn/> Buy now</Button>
    </Box>
  )
};

export default ActionItem;
