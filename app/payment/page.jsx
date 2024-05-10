"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import FakePaymentCard from '@/components/Payment/FakePaymentCard';
import { useSearchParams } from 'next/navigation';

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
        </>
    );
}

export default Payment;