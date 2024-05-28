import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export async function POST(req) {
    const { amount } = await req.json();
    const origin = 'http://localhost:3000'; // Default to localhost for development

    try {
        const params = {
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Custom amount donation',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/payment/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/payment/result?session_id={CHECKOUT_SESSION_ID}`,
        };

        const checkoutSession = await stripe.checkout.sessions.create(params);


        return NextResponse.json(checkoutSession);
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
