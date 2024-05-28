// app/login/page.jsx
'use client'
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useStore } from '@/app/store/store';
import { loginUser } from '@/app/services/authService';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const setUser = useStore((state) => state.setUser);

    const handleLogin = async () => {
        const { user, error } = await loginUser(email, password, setUser);
        if (user) {
            router.push('/');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
            <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
        </Container>
    );
};

export default LoginPage;

