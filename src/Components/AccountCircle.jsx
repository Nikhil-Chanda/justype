import React, { useState } from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Modal, Tab, Tabs } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AccountCircle = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const {theme} = useTheme();

    const handleModalOpen = () => {
        setOpen(true);
    }
    const handleModalClose = () => {
        setOpen(false);
    }
    const handleValueChange = (e, v) => {
        setValue(v);
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            alert("Google login");
            return;
        }).catch((err) => {
            alert(err);
            return;
        });
    }

    return (
        <div>
            <AccountCircleIcon onClick={handleModalOpen}/>

            <Modal
                open={open}
                onClose={handleModalClose}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{width: '400px', textAlign: 'center'}}>
                    <AppBar position='static' style={{background: 'transparent'}}>
                        <Tabs value={value} onChange={handleValueChange} variant='fullWidth'>
                            <Tab label='login' style={{color: theme.textColor}}></Tab>
                            <Tab label='signup' style={{color: theme.textColor}}></Tab>
                        </Tabs>
                    </AppBar>
                    {value === 0 && <LoginForm/>}
                    {value === 1 && <SignupForm/>}
                    <Box>
                        <span>OR</span>
                        <GoogleButton style={{width: '100%', marginTop: '12px'}} onClick={handleGoogleSignIn}/>
                    </Box>
                </div>
            </Modal>
        </div>
    )
}

export default AccountCircle;
