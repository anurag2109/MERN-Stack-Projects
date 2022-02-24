import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

//components
import CartItem from './CartItem';
import { removeFromCart } from '../../redux/actions/cartActions.js';
import EmptyCard from './EmptyCard';
import TotalView from './TotalView';

const useStyle = makeStyles({
  component:{
    marginTop: 55,
    padding: '30px 135px',
    display: 'flex'

  },
  leftComponent:{
    width: '67%',

  },
  rightComponent:{
    width: '30%'
  },
  header:{
    padding: '15px 24px',
    background: '#fff',
  },
  bottom:{
    borderTop: '1px solid #f0f0f0',
    padding: '16px 22px',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
  },
  placeOrder:{
    background: '#fb641b',
    color: '#fff',
    borderRadius: 2,
    width: 250,
    height: 50,
    display: 'flex',
    marginLeft: 'auto',

  }
});


const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (id) =>{
    dispatch(removeFromCart(id));
  } 

  useEffect(() => {
    console.log(cartItems);
  })

  return (
    <>
      {
        cartItems.length ? 
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{fontWeight: 600, fontSize: 16}}>My Cart({cartItems.length})</Typography>
            </Box>
            {
              cartItems.map(item =>(
                <CartItem item={item} removeItemFromCart = {removeItemFromCart}/>
              ))
            }
            <Box className={classes.bottom}>
              <Button className={classes.placeOrder} variant='contained'>Place Order</Button>
            </Box>
          </Box>
          <Box className={classes.rightComponent}>
            <TotalView cartItems={cartItems}/>
          </Box>
        </Box>
        
        
        : <EmptyCard/>
      }

    </>
  )
}

export default Cart