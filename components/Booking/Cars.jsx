import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React, { useState, useContext } from 'react'

function Cars() {
    const [selectedCar, setSelectedCar] = useState();
    const { directionData, setDirectionData } = useContext(DirectionDataContext);
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);

    const getCost = (charges) => {
        return (charges * directionData.routes[0].distance * 0.001 * 30).toFixed(0)
    }

    return (
        <div className='mt-3'>
            <h2 className='font-semibold text-[18px]'>Select a Vechile</h2>

            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                {
                    CarsList.map((item, index) => (
                        <div key={index}
                            className={
                                `m-2 p-2 border-[2px] rounded-md hover:border-yellow-400 cursor-pointer 
                                    ${index == selectedCar
                                    ? 'border-yellow-400 border-[3px]'
                                    : null
                                }`
                            }
                            onClick={
                                () => {
                                    setSelectedCar(index);
                                    setCarAmount(getCost(item.charges))
                                }
                            }
                        >
                            <Image src={item.image}
                                alt={item.name}
                                width={75}
                                height={90}
                                className='w-full'
                            />
                            <h2 className='text-[15px] text-center text-gray-500'>{item.name}

                                {
                                    directionData.routes ?
                                        <span className='float-right font-medium text-black'>
                                            ₹ {
                                                getCost(item.charges)
                                            }
                                        </span> : null
                                }

                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cars