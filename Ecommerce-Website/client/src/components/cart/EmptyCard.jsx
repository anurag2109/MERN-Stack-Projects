import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const useStyle = makeStyles({
    component:{
        margin: '80px 140px',
        width: '80p%',
        background: '#fff',
        height: '65vh'
    },
    image:{
        width: '15%',
    },
    container:{
        textAlign: 'center',
        paddingTop: 70,
        '& > *':{
            marginTop: 10,
            fontSize: 14
        }
    },
    button:{
        marginTop: '12px',
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#2874f0',
        color: '#fff'
    }
})

const EmptyCard = () => {
    const classes = useStyle();
    const navigate = useNavigate();

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const addItem = () =>{
        navigate('/');
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} alt="Empty card Image" className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now.</Typography>
                <Button className={classes.button} variant='contained' onClick={()=> addItem()}>Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCard;