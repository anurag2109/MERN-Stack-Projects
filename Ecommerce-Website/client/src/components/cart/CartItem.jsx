import { Box, Card, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react';
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyle = makeStyles({
    component:{
        display: 'flex',
        borderRadius: 0,
        borderTop: '10x solid #f0f0f0'
    },
    leftComponent:{
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent:{
        margin: 20
    },
    smallText:{
        fontSize: 14
    },
    grayTextColor:{
        color: '#878787'
    },
    price:{
        fontWeight: 600
    },
    image:{
        height: 110,
        width: 110
    },
    remove:{
        marginTop: 20,
        fontSize: 14
    }

});

const CartItem = ({ item, removeItemFromCart }) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <Card className={classes.component}>
        <Box className={classes.leftComponent}>
            <img src={item.url} alt="item" className={classes.image} />
            <GroupButton/>
        </Box>
        <Box className={classes.rightComponent}>
            <Typography>{item.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.grayTextColor)} style={{marginTop: 10}}>Seller: SuperComNet
                <span><img src={fassured} alt="fassured" style={{width: 50, marginLeft: 10}}/></span>
            </Typography>
            <Typography style={{margin: '20px 0'}}>
                <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                <span className={classes.grayTextColor}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{color: '#388e3c'}}>{item.price.discount} off</span>
            </Typography>
            <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
        </Box>
    </Card>
  )
}

export default CartItem