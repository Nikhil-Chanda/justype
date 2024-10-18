import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () => {
        if (!email || !password || !confirmPassword) {
            alert("Fill all details");
            return;
        }
        if (password != confirmPassword) {
            alert("Password mismatch");
            return;
        }
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            alert("User created");
        }).catch((err) => {
                alert("Unable to create user, Try again");
        });
    }
    
    return (
        <Box p={3} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <TextField variant='outlined' type='email' label='EMAIL' onChange={(e) => setEmail(e.target.value)} InputLabelProps={{style:{color:theme.textColor}}} inputProps={{style:{color:theme.textColor}}}/>
            <TextField variant='outlined' type='password' label='PASSWORD' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{style:{color:theme.textColor}}} inputProps={{style:{color:theme.textColor}}}/>
            <TextField variant='outlined' type='password' label='CONFIRM PASSWORD' onChange={(e) => setConfirmPassword(e.target.value)} InputLabelProps={{style:{color:theme.textColor}}} inputProps={{style:{color:theme.textColor}}}/>
            <Button variant='contained' size='large' onClick={handleSubmit} style={{backgroundColor:theme.textColor, color:theme.backgroundColor}}>Sign Up</Button>
        </Box>
    )
}

export default SignupForm
