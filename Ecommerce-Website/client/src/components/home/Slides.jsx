import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { Box, Divider, Typography, makeStyles, Button } from '@material-ui/core';
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const useStyle = makeStyles({
  slideContainer:{
    marginTop: 12,
    background: 'white'
  },
  textAndTimerBox:{
    display: 'flex',
    padding: '15px 20px'
  },
  sliderImage:{
    height: 150
  },
  text:{
    fontSize: 14,
    marginTop: 5
  },
  sliderImgAndTextBox:{
    padding: '35px 15px'
  },
  viewAllBtn:{
    marginLeft: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    background: '#2874f0'
  }
  
});


const Slides = ({title, timer, products}) => {
  const classes = useStyle();


  const renderer =  ({ hours, minutes, seconds, completed }) =>{
      return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>
  }
  
  const timerUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box className={classes.slideContainer}>
          <Box className={classes.textAndTimerBox}>
            <Typography style={{fontSize: 22, fontWeight: 600, lineHeight: '32px', marginRight: 25}}>{title}</Typography>
            {
                timer && 
                <React.Fragment>
                  <img src={timerUrl} alt="timer" style={{width: 25, margin: '5px'}} />
                  <Countdown date={Date.now() + 5.04e+7} renderer={renderer} className={classes.countdown} />    
                  <Button variant='contained' color='primary' className={classes.viewAllBtn}>View All</Button>              
                </React.Fragment>
            }
          </Box>
          <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product =>(
                      <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                        <Box className={classes.sliderImgAndTextBox}>
                            <img src={product.url} alt={product.title} className={classes.sliderImage} />    
                            <Typography className={classes.text}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.text}>{product.discount}</Typography>
                            <Typography className={classes.text}>{product.tagline}</Typography>
                        </Box>
                      </Link>
                    ))
                }
        </Carousel>
        </Box>
    )
}

export default Slides
