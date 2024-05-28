// app/api/auth/register/route.js
import { adminAuth, adminDb } from '@/app/utils/firebaseAdmin';

export async function POST(req) {
    const { email, password, username, phoneNumber } = await req.json();

    try {
        // Create the user in Firebase Authentication
        const userRecord = await adminAuth.createUser({
            email,
            password,
        });

        // Save user data to Firestore
        await adminDb.firestore().collection('users').doc(userRecord.uid).set({
            username,
            email,
            phoneNumber,
        });

        // Fetch the saved user document from Firestore
        const userDoc = await adminDb.firestore().collection('users').doc(userRecord.uid).get();
        const userData = userDoc.data();

        return new Response(JSON.stringify({ user: userData }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
