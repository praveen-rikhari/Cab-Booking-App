"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import FakePaymentCard from '@/components/Payment/FakePaymentCard';
import { useSearchParams } from 'next/navigation';
import PayAfterRide from '@/components/Payment/PayAfterRIde';

function Payment() {
    const searchParam = useSearchParams();
    const amount = searchParam.get('amount');
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const options = {
        mode: 'payment',
        amount: Number(amount),
        currency: 'inr',
    };

    return (
        <>
            <FakePaymentCard />
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={amount} />
            </Elements>
            <PayAfterRide/>
        </>
    );
}

export default Payment;