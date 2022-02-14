import React, { useContext } from 'react';
import { Box, Typography, Dialog, withStyles, makeStyles, List, ListItem } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constants/data.js';

import { addUser } from '../../service/api';

const useStyle = makeStyles({
    component:{
        display: 'flex'
    },
    leftComponent:{
        padding: '56px 0 56px 56px'
    },
    rightComponent:{

    },
    qrcode:{
        height: 264,
        width: 264,
        padding: '50px 0 0 50px'
    },
    title:{
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list:{
        '& > *':{
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})
const style = {
    dialogPaper:{
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        maxHeight: '100%',
        maxWidth: '100%',
        overFlow: 'hidden'
    }
}

const Login = ({ classes }) => {

    const classname = useStyle();
    
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
   
    const { account, setAccount } = useContext(AccountContext);


    const onLoginSuccess = async (res) =>{
        console.log("Login successful", res.profileObj)
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLoginFailure = () =>{
        console.log("Login failure")
    }
    return(
        <Dialog
            open = {true}
            classes = {{ paper : classes.dialogPaper }}
            BackdropProps={{style: {background: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To Use WhatsApp on your Computer</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap manu or settings and select linked devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position: 'relative'}}>
                    <img src={qrurl} alt="QR code" className={classname.qrcode} />    
                    <Box style={{position: 'absolute', left: '50%', top: '50%'}}>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText=""
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                    </Box>
                </Box>  
            </Box>
        </Dialog>
    );
};

export default withStyles(style)(Login);
