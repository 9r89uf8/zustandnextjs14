// components/CheckoutButton.jsx
'use client';

import React from 'react';
import { Button } from '@mui/material';
import {createCheckoutSession} from "@/app/services/stripeService";
import { useStore } from '@/app/store/store';

const CheckoutButton = () => {
    const loading = useStore((state) => state.loading);

    const handleCheckout = () => {
        createCheckoutSession(1000); // example amount
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            disabled={loading}
        >
            {loading ? 'Processing...' : 'Checkout'}
        </Button>
    );
};

export default CheckoutButton;

