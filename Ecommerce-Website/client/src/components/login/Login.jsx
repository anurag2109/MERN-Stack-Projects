import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core';
import { authenticateSignup } from '../../service/api';

const useStyle = makeStyles({
    dialogContent:{
        height: '70vh',
        width: '90vh',
        
    },
    loginLeft:{
        backgroundImage:  `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        height: '70vh',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *':{
            color: 'white',
            fontWeight: 600
        }
    },
    login:{
        padding: '5px 33px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop: 20
        }
    },
    text:{
        color: '#878787',
        fontSize: 12
    },
    loginBtn:{
        textTransform: 'none',
        background: '#fb641b',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    requestBtn:{
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'
    },
    createText:{
        textAlign:'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }
});

const initialValue = {
    login:{
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const Login = ({open , setOpen, setAccount}) => {
    const classes = useStyle();

    const [account, setToggleAccount ] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);

    const handleClose = () =>{
        setOpen(false);
        setToggleAccount(initialValue.login);
    }

    const toggleAccount = () =>{
        setToggleAccount(initialValue.signup);
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value })
    }

    const signupuser = async () =>{
        let responce = await authenticateSignup(signup);
        if(responce) return;
        handleClose();
        setAccount(signup.username);        
    }

    return (

        <Dialog
            open = {open}
            onClose={handleClose}
        >
            <DialogContent className={classes.dialogContent}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.loginLeft}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop: 15, fontWeight: 500}}>{account.subheading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField name = 'username' label='Enter Email/Mobile number' />
                            <TextField name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' className={classes.loginBtn} >Login</Button>
                            <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                            <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={() =>toggleAccount()}  className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> :
                        
                        <Box className={classes.login}>
                            <TextField onChange={(e)=>{onInputChange(e)}} name = 'firstname' label='Enter FirstName' />
                            <TextField onChange={(e)=>{onInputChange(e)}} name='lastname' label='Enter LastName' />
                            <TextField onChange={(e)=>{onInputChange(e)}} name = 'username' label='Enter Username' />
                            <TextField onChange={(e)=>{onInputChange(e)}} name='email' label='Enter Email' />
                            <TextField onChange={(e)=>{onInputChange(e)}} name = 'password' label='Enter Password' />
                            <TextField onChange={(e)=>{onInputChange(e)}} name='phone' label='Enter Phone' />
                            <Button variant='contained' onClick={() => signupuser() } className={classes.loginBtn}>SignUp</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login
