// app/cart/page.js
'use client';
import React from 'react';
import CheckoutButton from "@/app/components/CheckoutButton";
import { Container, Typography } from '@mui/material';

const Cart = () => {
    const items = [
        {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Product Name',
                },
                unit_amount: 2000, // Amount in cents
            },
            quantity: 1,
        },
    ];

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Cart
            </Typography>
            <Typography variant="body1" gutterBottom>
                Product Name - $20.00
            </Typography>
            <CheckoutButton/>
        </Container>
    );
};

export default Cart;
