import React from 'react'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { loadStripe } from '@stripe/stripe-js';

function Payment() {
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);

    const stripePromise = loadStripe();

    return (
        <div>Payment</div>
    )
}

export default Payment;