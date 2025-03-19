import React from 'react';
import Image from 'next/image';
import Start from './assets/start-Rating.svg'

const Ratings = () => {
    const items = [
        {
            icons: '',
            Ratings: '4.8',
            Reviews: 'Google Ratings',
            starIcon: Start
        },
        {
            icons: '',
            Ratings: '15+',
            Reviews: 'Mou Signed',
            starIcon: null
        },
        {
            icons: '',
            Ratings: '100+',
            Reviews: 'Outreach Programs',
            starIcon: null
        }
    ];

    return (
        <>
            <div className="md:flex hidden w-full  lg:p-10 my-5 items-center place-content-center justify-center">
                <div className="flex place-items-center place-content-center justify-center  h-[120px] w-[600px] gap-10 bg-white md:px-10 md:py-5 md:rounded-full md:shadow-[0px_26px_40px_0px_rgba(43,45,54,0.05)] transform transition-transform duration-300 hover:scale-105">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col  items-center gap-2 text-center px-3">
                            <div className="flex items-center gap-2">
                                <p className="lg:text-3xl text-md font-bold ">{item.Ratings}</p>
                                {index === 0 && <Image src={Start} alt="Star Rating" width={24} height={24} />}
                            </div>
                            <p className="lg:text-md md:text-sm text-[0.7rem] font-normal text-gray-700">{item.Reviews}</p>
                            {index < items.length - 1 && (
                                <div className="relative align-middle place-items-center bottom-14">
                                    <div className="absolute w-0.5 h-14 lg:left-20 left-14 bg-blue-500"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex md:hidden w-full p-4 lg:p-10 my-10 lg:my-20 items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[600px] gap-4 md:gap-10 bg-white px-4 py-6 md:px-10 md:py-5 rounded-lg md:rounded-full shadow-md md:shadow-[0px_26px_40px_0px_rgba(43,45,54,0.05)] transform transition-transform duration-300 hover:scale-105">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 text-center px-2 md:px-3 w-full md:w-auto">
                            <div className="flex items-center gap-2">
                                <p className="text-xl md:text-2xl lg:text-3xl font-bold">{item.Ratings}</p>
                                {index === 0 && <Image src={Start} alt="Star Rating" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />}
                            </div>
                            <p className="text-sm md:text-sm lg:text-md font-normal text-gray-700">{item.Reviews}</p>
                            {index < items.length - 1 && (
                                <div className="w-full md:w-auto my-4 md:my-0 md:relative md:align-middle md:place-items-center md:bottom-14">
                                    <div className="w-full h-0.5 md:w-0.5 md:h-14 md:left-24 bg-blue-500"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Ratings;
