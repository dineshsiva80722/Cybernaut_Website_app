// 'use client';
// import React, { useState, useEffect } from 'react';

// function onofline() {
//     const [activeTab, setActiveTab] = useState('gallery');
//     const [activeDiv, setActiveDiv] = useState<number | null>(null);

//     const cards = [
//         {
//             title: 'TECH TRIO',
//             bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop'
//         },
//         {
//             title: 'UI/UX',
//             bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop'
//         },
//         {
//             title: 'FULL STACK',
//             bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
//         },
//         {
//             title: 'Data Analytics',
//             bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
//         }
//     ];

//     useEffect(() => {
//         const growDivs = () => {
//             let currentIndex = 1;
//             const intervalId = setInterval(() => {
//                 if (currentIndex <= 4) {
//                     setActiveDiv(currentIndex);
//                     currentIndex++;
//                 } else {
//                     setActiveDiv(null);
//                     currentIndex = 1;
//                 }
//             }, 2000);

//             return () => clearInterval(intervalId);
//         };

//         const timeoutId = setTimeout(growDivs, 1000);
//         return () => {
//             clearTimeout(timeoutId);
//         };
//     }, []);

//     const handleDivClick = (index: number) => {
//         setActiveDiv(activeDiv === index ? null : index);
//     };

//     return (
//         <div className='mx-auto xl:container py-20 '>
//             <div className='mx-auto flex-wrap xl:container'>
//                 <h1 className='text-center xl:container lg:text-4xl text-xl font-bold my-4'>Learn. Practice. Earn. Have Fun!</h1>
//                 <section>
//                     <div className='flex justify-center my-6'>
//                         <div className="flex justify-center">
//                             <button
//                                 className={`px-7 py-3 text-xl font-medium ${activeTab === 'gallery'
//                                     ? 'text-black'
//                                     : 'text-gray-500 hover:text-gray-700'
//                                     }`}
//                                 onClick={() => {
//                                     setActiveTab('gallery');
//                                 }}
//                             >
//                                 Online
//                             </button>
//                             <button
//                                 className={`px-6 py-3 text-xl font-medium ${activeTab === 'outreach'
//                                     ? 'text-black'
//                                     : 'text-gray-500 hover:text-gray-700'
//                                     }`}
//                                 onClick={() => {
//                                     setActiveTab('outreach');
//                                 }}
//                             >
//                                 Offline
//                             </button>
//                         </div>
//                     </div>

//                     <div className='flex mb-10 relative mx-auto w-[15rem] h-[0.1rem] overflow-hidden -mt-7 bg-gray-300'>
//                         <div className={`w-[8rem] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${
//                             activeTab === 'outreach' ? 'translate-x-[130px]' : 'translate-x-0'
//                         }`}>
//                         </div>
//                     </div>

//                     <div className='flex lg:flex-row flex-col gap-5 justify-center mx-6 lg:py-14'>
//                         <div className='w-[40rem]'>
//                             <div className='relative overflow-hidden w-[15rem] lg:h-12 h-10  lg:w-full'>
//                                 <div
//                                     className={`absolute w-full transition-all duration-700 ease-in-out 
//                                     ${activeTab === 'gallery'
//                                         ? 'translate-y-0 opacity-100'
//                                         : '-translate-y-full opacity-0'}`}
//                                 >
//                                     <h1 className='text-4xl font-bold text-black'>
//                                         HI SAGOS
//                                     </h1>
//                                 </div>
//                                 <div
//                                     className={`absolute w-full transition-all duration-700 ease-in-out 
//                                     ${activeTab === 'outreach'
//                                         ? 'translate-y-0 opacity-100'
//                                         : 'translate-y-full opacity-0'}`}
//                                 >
//                                     <h1 className='text-4xl font-bold text-black'>
//                                         HELLO SAGOS
//                                     </h1>
//                                 </div>
//                             </div>
//                             <div className='lg:w-full w-80 float-start lg:ml-0 lg:py-0 py-4 mx-auto lg:text-lg text-sm text-gray-500 min-h-[120px]'>
//                                 {activeTab === 'gallery' ? (
//                                     <p className='text-left  -tracking-tight'>
//                                         Experience 120 minutes of immersive, hands-on learning everyday. Sharpen your tech skills, solve real-world problems, and challenge your limits—all from the comfort of your home. Stay ahead of the curve and transform your potential into mastery.                                   
//                                     </p>
//                                 ) : (
//                                     <p className='text-left  -tracking-tight'>
//                                         Skip the job hunt-become the candidate companies chase! In 9 months, master DSA, Full-Stack Development, and System Design with hands-on training. Work on live projects, crack mock interviews, and build a job-winning portfolio. Get Hired, Not Just Certified!
//                                     </p>
//                                 )}
//                             </div>
//                             <div className='relative overflow-hidden w-full h-20'>
//                                 <button className='my-4 px-6 py-4 rounded-full bg-gradient-to-r from-[#13D8FB] to-[#00A3FF] text-white'>
//                                     View More
//                                 </button>
//                             </div>
//                         </div>

//                         {/* mobile and tab view */}
//                         <div className='lg:hidden block'>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {cards.map((card, index) => (
//                                     <div 
//                                         key={index} 
//                                         className="bg-gray-100 p-4 rounded-lg bg-cover bg-center h-32"
//                                         style={{ backgroundImage: `url(${card.bgImage})` }}
//                                     >
//                                         <span className="text-white font-semibold text-sm">{card.title}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             <button className='w-full h-10 mt-3 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm'>
//                                 get started
//                             </button>
//                         </div>
//                         <div className="lg:flex hidden space-x-2 w-[20rem] lg:w-[40rem] h-60">
//                             {cards.map((card, index) => (
//                                 <div
//                                     key={index}
//                                     className={`
//                                         flex-1 text-white p-2 w-80 flex 
//                                         items-center justify-center cursor-pointer 
//                                         transition-all duration-500 rounded-md
//                                         bg-cover bg-center relative overflow-hidden
//                                         ${activeDiv === index + 1 ? 'flex-grow-[5]' : ''}
//                                     `}
//                                     style={{ 
//                                         backgroundImage: `url(${card.bgImage})`
//                                     }}
//                                     onClick={() => handleDivClick(index + 1)}
//                                 >
//                                     <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//                                     <span className={`
//                                         transition-all duration-500 relative z-10 font-semibold
//                                         ${activeDiv === index + 1 ? 'text-xl' : ''}
//                                     `}>
//                                         {card.title}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default onofline;



'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Techtrio from '@/app/Home/assets/All/Course Thumbnail/Tech trio.png'
import UIUX from '@/app/Home/assets/All/Course Thumbnail/ux.png'
import Fullstck from '@/app/Home/assets/All/Course Thumbnail/Full Stack.png'
import Data from '@/app/Home/assets/All/Course Thumbnail/DataAnalytics.png'
import Beyandzen from '@/app/Home/assets/All/Course Thumbnail/Beyondzen.png'
import MetaZen from '@/app/Home/assets/All/Course Thumbnail/Metazen.png'
import Image from 'next/image';

function onofline() {
    const [activeTab, setActiveTab] = useState('gallery');
    const [activeDiv, setActiveDiv] = useState<number | null>(null);

    const onlineCards = [
        {
            title: '',
            bgImage: Techtrio
        },
        {
            title: '',
            bgImage: UIUX
        },
        {
            title: '',
            bgImage: Fullstck
        },
        {
            title: '',
            bgImage: Data
        }
    ];

    const offlineCards = [
        {
            title: '',
            bgImage: MetaZen
        },
        {
            title: '',
            bgImage: Beyandzen
        },
    ] // Only the first two cards

    useEffect(() => {
        const growDivs = () => {
            let currentIndex = 1;
            const intervalId = setInterval(() => {
                if (currentIndex <= 4) {
                    setActiveDiv(currentIndex);
                    currentIndex++;
                } else {
                    setActiveDiv(null);
                    currentIndex = 1;
                }
            }, 2000);

            return () => clearInterval(intervalId);
        };

        const timeoutId = setTimeout(growDivs, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleDivClick = (index: number) => {
        setActiveDiv(activeDiv === index ? null : index);
    };

    return (
        <div className='mx-auto xl:container py-20 '>
            <div className='mx-auto flex-wrap xl:container'>
                <h1 className='text-center xl:container lg:text-4xl text-xl font-bold my-4'>Learn. Practice. Earn. Have Fun!</h1>
                <section>
                    <div className='flex justify-center my-6'>
                        <div className="flex justify-center">
                            <button
                                className={`px-7 py-3 text-xl font-medium ${activeTab === 'gallery'
                                    ? 'text-black'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => {
                                    setActiveTab('gallery');
                                }}
                            >
                                Online
                            </button>
                            <button
                                className={`px-6 py-3 text-xl font-medium ${activeTab === 'outreach'
                                    ? 'text-black'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => {
                                    setActiveTab('outreach');
                                }}
                            >
                                Offline
                            </button>
                        </div>
                    </div>

                    <div className='flex mb-10 relative mx-auto w-[15rem] h-[0.1rem] overflow-hidden -mt-7 bg-gray-300'>
                        <div className={`w-[8rem] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach' ? 'translate-x-[130px]' : 'translate-x-0'
                            }`}>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col gap-5 justify-center mx-6 lg:py-14'>
                        <div className='lg:w-[40rem] space-y-4'>
                            <div className='relative overflow-hidden w-[15rem] lg:h-12 h-10  lg:w-full'>
                                <div
                                    className={`absolute w-full transition-all duration-700 ease-in-out 
                                    ${activeTab === 'gallery'
                                            ? 'translate-y-0 opacity-100'
                                            : '-translate-y-full opacity-0'}`}
                                >
                                    <h1 className='text-4xl font-bold text-black'>
                                        HI SAGOS
                                    </h1>
                                </div>
                                <div
                                    className={`absolute w-full transition-all duration-700 ease-in-out 
                                    ${activeTab === 'outreach'
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-full opacity-0'}`}
                                >
                                    <h1 className='text-4xl font-bold text-black'>
                                        HELLO SAGOS
                                    </h1>
                                </div>
                            </div>
                            <div className='lg:w-full float-start lg:ml-0 lg:py-0 py-4 mx-auto lg:text-lg text-sm text-gray-500 min-h-[120px]'>
                                {activeTab === 'gallery' ? (
                                    <p className='text-left  -tracking-tight'>
                                        Experience 120 minutes of immersive, hands-on learning everyday. Sharpen your tech skills, solve real-world problems, and challenge your limits—all from the comfort of your home. Stay ahead of the curve and transform your potential into mastery.
                                    </p>
                                ) : (
                                    <p className='text-left  -tracking-tight'>
                                        Skip the job hunt-become the candidate companies chase! In 9 months, master DSA, Full-Stack Development, and System Design with hands-on training. Work on live projects, crack mock interviews, and build a job-winning portfolio. Get Hired, Not Just Certified!
                                    </p>
                                )}
                            </div>

                            <div className='relative overflow-hidden w-60 h-20'>
                                <Link href="/Program">
                                    <button className='my-4 px-6 py-4 rounded-full bg-gradient-to-r from-[#13D8FB] to-[#00A3FF] text-white'>
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* mobile and tab view */}
                        <div className='lg:hidden block'>
                            <div className="grid grid-cols-2 gap-4">
                                {activeTab === 'gallery' ? (
                                    onlineCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-100 relative p-4 rounded-lg bg-cover bg-center h-32"
                                        >
                                            <span className="text-white font-semibold text-sm">{card.title}</span>
                                            <div className='absolute top-0 left-0 w-full bg-black bg-opacity-15 h-full'>
                                                <Image src={card.bgImage} alt={card.title} width={500} height={500} className='w-full h-full object-cover' />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    offlineCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-100 p-4 rounded-lg bg-cover bg-center h-32"
                                            style={{ backgroundImage: `url(${card.bgImage})` }}
                                        >
                                            <span className="text-white font-semibold text-sm">{card.title}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                            <button className='w-full h-10 mt-3 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm'>
                                get started
                            </button>
                        </div>
                        <div className="lg:flex hidden space-x-2 w-[20rem] lg:w-[40rem] h-60">
                            {activeTab === 'gallery' ? (
                                onlineCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            flex-1 text-white p-2 w-80 flex 
                                            items-center justify-center cursor-pointer 
                                            transition-all duration-500 rounded-md
                                            bg-cover bg-center relative overflow-hidden
                                            ${activeDiv === index + 1 ? 'flex-grow-[5]' : ''}
                                        `}

                                        onClick={() => handleDivClick(index + 1)}
                                    >
                                        <div className="absolute inset-0 bg-black  bg-opacity-40"></div>
                                        <span className={`
                                            transition-all duration-500 text-[0.7rem] relative text-white z-10 font-semibold
                                            ${activeDiv === index + 1 ? 'text-xl' : ''}
                                        `}>
                                            {card.title}
                                        </span>
                                        <div className='absolute top-0 left-0 w-full bg-black bg-opacity-15 h-full'>
                                            <Image src={card.bgImage} alt={card.title} width={500} height={500} className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                offlineCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            flex-1 text-white p-2 w-80 flex 
                                            items-center justify-center cursor-pointer 
                                            transition-all duration-500 rounded-md
                                            bg-cover bg-center relative overflow-hidden
                                            ${activeDiv === index + 1 ? 'flex-grow-[5]' : ''}
                                        `}
                                      
                                        onClick={() => handleDivClick(index + 1)}
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                                        <span className={`
                                            transition-all duration-500 relative z-10 font-semibold
                                            ${activeDiv === index + 1 ? 'text-xl' : ''}
                                        `}>
                                            {card.title}
                                        </span>
                                        <div className='absolute top-0 left-0 w-full bg-black bg-opacity-15 h-full'>
                                            <Image src={card.bgImage} alt={card.title} width={500} height={500} className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default onofline;