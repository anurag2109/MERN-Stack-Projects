import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
import ActionItem from './ActionItem';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';


const useStyle = makeStyles({
  component:{
    marginTop: 55,
    background:'#f2f2f2',
  },
  container:{
    display: 'flex',

    // margin: '0 80px',
    background: '#fff'
  },
  rightContainer:{
    marginTop: 50,
    '& > *':{
      marginTop: 10,
    }
  },
  smallText:{
    fontSize: 14,
    verticalAlign: 'baseline',

    '& > *':{
      fontSize: 14,
      marginTop: 10
    }
  },
  grayTextColor:{
    color: '#878787'
  },
  price:{
    fontSize: 28
  },
  badge:{
    fontSize: 14,
    marginRight: 10,
    color: '#00cc00'
  }
})

const DetailView = ({ match }) => {
  const classes = useStyle();

  const { product } = useSelector(state => state.getProductDetails);
  const dispatch = useDispatch();
  const { id }= useParams()
  
  useEffect(()=>{
    dispatch(getProductDetails(id));
  }, [dispatch]);
  
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));



  return (
    <Box className={classes.component}>
      { product && Object.keys(product).length &&
      <Box className={classes.container}>
        <Box style={{minwidth: '40%'}}>
          <ActionItem product={product}/>
        </Box>
        <Box className={classes.rightContainer}>
          <Typography>{product.title.longTitle}</Typography>
          <Typography className={clsx(classes.smallText, classes.grayTextColor)}>
            8 Rating & 1 Review
            <span> <img src={fassured} alt="fassured" style={{width: 77, marginLeft: 20}} /></span>  
          </Typography>
          <Typography>
            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
            <span className={classes.grayTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
          </Typography>
          <Typography style={{marginTop: 20, fontWeight: 600}}>Available offers</Typography>
          <Box className={classes.smallText}>
            
            <Typography> <Badge className={classes.badge} /> Bank Offer10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and aboveT&C</Typography>

            <Typography> <Badge className={classes.badge}/>  Bank Offer10% off on ICICI Bank Debit Cards, up to ₹250. On orders of ₹2500 and aboveT&C</Typography>

            <Typography> <Badge className={classes.badge}/> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>

            <Typography> <Badge className={classes.badge}/> Special PriceGet extra 8% off (price inclusive of discount)T&C</Typography>
          
          
          </Box>

          <Table>
            <TableBody>
              <TableRow className={classes.smallText}>
                <TableCell className={classes.grayTextColor}>Delivery</TableCell>
                <TableCell style={{fontWeight: 600}}>{ date.toDateString() } | ₹40 </TableCell>
              </TableRow>

              <TableRow className={classes.smallText}>
                <TableCell className={classes.grayTextColor}>Warrenty</TableCell>
                <TableCell>No Warrenty</TableCell>
              </TableRow>

              <TableRow className={classes.smallText}>
                <TableCell className={classes.grayTextColor}>Seller</TableCell>
                <TableCell className={classes.smallText}>
                  <span style={{color: '#2874f0'}}>SuperComNet</span>
                  <Typography>GST invoice available </Typography>
                  <Typography>10 Days return Policy </Typography>
                  <Typography>View more sellers starting from ₹300 </Typography>
                </TableCell>
              </TableRow>

              <TableRow className={classes.smallText}>
                <TableCell colSpan={2}>
                  <img src={sellerURL} alt="sellerimg" style={{width: 390}}/>
                </TableCell>
              </TableRow>

              <TableRow className={classes.smallText}>
                <TableCell className={classes.grayTextColor}>Descriptions</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </Box>
      </Box>
      }
    </Box>
  )
};

export default DetailView;
