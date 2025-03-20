import React from 'react';
import Image from 'next/image';


const Ratings = () => {
    const items = [
        {
            icons: '',
            Ratings: '4.8',
            Reviews: 'Google Ratings',
            starIcon: null        },
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
                                {index === 0 && (
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.7574 18.7908C24.3626 19.1898 24.1814 19.7669 24.2712 20.3328L25.6259 28.1544C25.7402 28.8174 25.4721 29.4882 24.9402 29.8714C24.4191 30.2686 23.7258 30.3163 23.1573 29.9985L16.4084 26.3262C16.1737 26.1957 15.9131 26.1258 15.6465 26.118H15.2335C15.0903 26.1402 14.9501 26.1878 14.8221 26.2611L8.07161 29.9508C7.7379 30.1256 7.36 30.1876 6.98971 30.1256C6.08761 29.9477 5.48571 29.0511 5.63353 28.1051L6.98971 20.2835C7.07961 19.7128 6.89829 19.1326 6.50361 18.7272L1.00115 13.1631C0.540954 12.6973 0.380954 11.9978 0.591239 11.3667C0.795431 10.7371 1.31657 10.2777 1.94591 10.1744L9.51925 9.02815C10.0952 8.96615 10.6011 8.60052 10.8602 8.06L14.1973 0.922052C14.2766 0.763077 14.3787 0.616821 14.5021 0.492821L14.6392 0.381538C14.7109 0.298871 14.7931 0.230513 14.8846 0.174872L15.0507 0.111282L15.3097 0H15.9512C16.5242 0.062 17.0286 0.419692 17.2922 0.953846L20.6735 8.06C20.9173 8.57985 21.3912 8.94071 21.9383 9.02815L29.5117 10.1744C30.1517 10.2698 30.6865 10.7308 30.8984 11.3667C31.0979 12.0042 30.9258 12.7036 30.4563 13.1631L24.7574 18.7908Z" fill="#FFCB4C"/> </svg>
                                )}
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
                                {index === 0 && (
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.7574 18.7908C24.3626 19.1898 24.1814 19.7669 24.2712 20.3328L25.6259 28.1544C25.7402 28.8174 25.4721 29.4882 24.9402 29.8714C24.4191 30.2686 23.7258 30.3163 23.1573 29.9985L16.4084 26.3262C16.1737 26.1957 15.9131 26.1258 15.6465 26.118H15.2335C15.0903 26.1402 14.9501 26.1878 14.8221 26.2611L8.07161 29.9508C7.7379 30.1256 7.36 30.1876 6.98971 30.1256C6.08761 29.9477 5.48571 29.0511 5.63353 28.1051L6.98971 20.2835C7.07961 19.7128 6.89829 19.1326 6.50361 18.7272L1.00115 13.1631C0.540954 12.6973 0.380954 11.9978 0.591239 11.3667C0.795431 10.7371 1.31657 10.2777 1.94591 10.1744L9.51925 9.02815C10.0952 8.96615 10.6011 8.60052 10.8602 8.06L14.1973 0.922052C14.2766 0.763077 14.3787 0.616821 14.5021 0.492821L14.6392 0.381538C14.7109 0.298871 14.7931 0.230513 14.8846 0.174872L15.0507 0.111282L15.3097 0H15.9512C16.5242 0.062 17.0286 0.419692 17.2922 0.953846L20.6735 8.06C20.9173 8.57985 21.3912 8.94071 21.9383 9.02815L29.5117 10.1744C30.1517 10.2698 30.6865 10.7308 30.8984 11.3667C31.0979 12.0042 30.9258 12.7036 30.4563 13.1631L24.7574 18.7908Z" fill="#FFCB4C"/> </svg>
                                )}                            </div>
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
