// app/register/page.jsx
'use client'
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {registerUser} from "@/app/services/authService";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    let data = { email, password, phoneNumber, username }

    const handleRegister = async (e) => {
        e.preventDefault();
        const { user, error } = await RegisterUser(data);
        if (user) {
            router.push('/');
        } else {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleRegister}>
                <TextField
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="PhoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default RegisterPage;
