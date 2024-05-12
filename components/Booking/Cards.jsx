import CardsList from '@/data/CardsList';
import Image from 'next/image';
import React, { useState } from 'react';

function Cards() {
    const [activeIndex, setActiveIndex] = useState();

    return (
        <div className="px-4 md:px-0">
            <h2 className="font-semibold text-2xl md:text-3xl">
                Payment Methods
            </h2>

            <div className="flex flex-wrap gap-2 mt-4">
                {CardsList.map((item, index) => (
                    <div
                        key={index}
                        className={`w-20 h-12 md:w-20 md:h-10 border-[2px]
                         flex items-center justify-center rounded-md
                          cursor-pointer hover:border-yellow-400 
                          hover:scale-110 transition-all
                           ${activeIndex === index ? 'border-yellow-400' : 'border-gray-300'}`}

                        onClick={() => setActiveIndex(index)}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={40}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
