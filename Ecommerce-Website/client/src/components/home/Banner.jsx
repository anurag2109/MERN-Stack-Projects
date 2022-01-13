import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';
import { bannerData } from '../../constants/data.js';

const useStyle = makeStyles({
    carousel:{

    },
    image:{
        height: 280,
        width: '100%',
    },
    
})
const Banner = () => {
    const classes = useStyle();

    return (
        <Carousel
        className={classes.carousel}
        autoPlay={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        animation="slide"
        navButtonsProps={
            {
                style:{
                    color: '#505050',
                    background:'#ffffff',
                    borderRadius: 0,
                    margin: 0,
                    width: 40,
                }
            }
        }
        >
            {
                bannerData.map((imgUrl)=>(
                    <img src={imgUrl} className={classes.image} />
                ))
            }
        </Carousel>
    )
}

export default Banner
