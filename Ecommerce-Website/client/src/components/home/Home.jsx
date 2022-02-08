import React, { useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// components
import Navbar from './Navbar';
import Banner from './Banner';
import Slides from './Slides';
// import { products } from '../../constants/data';
import { getProduct as listProducts } from '../../redux/actions/productAction';

const useStyle = makeStyles({
    homeComponentsBox:{
        padding: 10,
        background: '#f2f2f2'
    },
    sliderAndAddBox:{
        display: 'flex'
    },
    firstSlider:{
        width: '83%'
    },
    addImgBox:{
        background: '#ffffff',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%'
    }
})


const Home = () => {
    const classes = useStyle();
    const advertisementUrl  = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const { products } = useSelector(state => state.getProducts);
    const dispatch  = useDispatch();
    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <Box className={classes.homeComponentsBox}>
                <Banner/>
                <Box className={classes.sliderAndAddBox}>
                    <Box className={classes.firstSlider}>
                        <Slides title="Deals of the Day" timer={true} products={products}/>
                    </Box>
                    <Box className={classes.addImgBox}>
                        <img src={advertisementUrl} alt="advertisement" style={{width: 230}} />
                    </Box>
                </Box>
                <Slides title="Trending Offers" timer={false} products={products}/>
            </Box>
        </div>
    )
}

export default Home
