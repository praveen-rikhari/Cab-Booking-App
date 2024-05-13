import React from 'react';

const FakePaymentCard = () => {
    return (
        <div className="max-w-95 bg-red-100 border border-red-300 rounded-lg m-6 p-4">
            <div className="text-sm font-semibold mb-2 text-red-500">NOTE: Use the following fake card details for payment</div>
            <div className="flex flex-col space-y-4">
                <div>
                    <label className="block text-xs text-black-700 font-bold mb-1">Card Number:</label>
                    <input
                        type="text"
                        value="4242 4242 4242 4242"
                        readOnly
                        className="w-full bg-red-200 border border-red-300 rounded py-1 px-2 focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="flex justify-between space-x-4">
                    <div className="w-1/2">
                        <label className="block text-xs text-black-700 font-bold mb-1">Expiration:</label>
                        <input
                            type="text"
                            value="12/26"
                            readOnly
                            className="w-full bg-red-200 border border-red-300 rounded py-1 px-2 focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-xs text-black-700 font-bold mb-1">CVC:</label>
                        <input
                            type="text"
                            value="123"
                            readOnly
                            className="w-full bg-red-200 border border-red-300 rounded py-1 px-2 focus:outline-none focus:bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FakePaymentCard;
