import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () => {
        if (!email || !password) {
            alert("Fill all details");
        }
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            alert("Logged in");
        }).catch((err) => {
                alert("Invalid credentials");
        });
    }
    
    return (
        <Box p={3} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <TextField variant='outlined' type='email' label='EMAIL' onChange={(e) => setEmail(e.target.value)} InputLabelProps={{style:{color:theme.textColor}}} inputProps={{style:{color:theme.textColor}}}/>
            <TextField variant='outlined' type='password' label='PASSWORD' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{style:{color:theme.textColor}}} inputProps={{style:{color:theme.textColor}}}/>
            <Button variant='contained' size='large' onClick={handleSubmit} style={{backgroundColor:theme.textColor, color:theme.backgroundColor}}>Login</Button>
        </Box>
    )
}

export default LoginForm
