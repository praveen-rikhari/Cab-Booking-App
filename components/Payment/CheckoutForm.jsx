import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation';
import React from 'react'

function CheckoutForm({ amount }) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const { error: submitError } = await elements.submit();
        if (submitError) {
            return;
        }

        // Create the payment intent and obtain the client secret
        const res = await fetch('/api/create-intent', {
            method: 'POST',
            body: JSON.stringify({
                amount: Number(amount)
            }),
        });

        const secretKey = await res.json();
        console.log(secretKey);

        const result = await stripe.confirmPayment({
            clientSecret: secretKey,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm"
            },
        });
        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
            router.push('http://localhost:3000/payment-confirm');
        } else {

        }
    }
    return (
        <div className='flex flex-col justify-center items-center w-full mt-6'>
            <h2 className='mb-3 font-bold'>Amount to Pay: ₹ {amount}</h2>
            <form onSubmit={handleSubmit} className='max-w-md'>
                <PaymentElement />

                <button
                    type='submit'
                    disabled={!stripe || !elements}
                    className='w-full bg-yellow-500 p-2 rounded-lg mt-2 font-bold'
                >
                    Pay
                </button>
            </form>
        </div >
    )
}

export default CheckoutForm;