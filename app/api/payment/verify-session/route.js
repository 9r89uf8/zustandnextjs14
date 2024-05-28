import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export async function POST(req) {
    const { session_id } = await req.json();

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === 'paid') {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
