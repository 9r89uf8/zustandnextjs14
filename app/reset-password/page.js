'use client';

import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { passwordReset } from '@/app/services/authService';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await PasswordReset(email);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Reset Password
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Reset
                </Button>
            </form>
        </Container>
    );
};

export default ResetPassword;
