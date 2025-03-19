'use client';
import { useState} from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCards from './Components/Coursecards';
import Ads1 from '@/app/Home/assets/All/Desktop/Ad banner/Beyond Program.png'
import Ads2 from '@/app/Home/assets/All/Desktop/Ad banner/Tech Trio.png'
import Ads3 from '@/app/Home/assets/All/Desktop/Ad banner/ux Program.png'

const sliderImages = [
    Ads1,
    Ads2,
    Ads3,
]

const Programs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className='mx-auto xl:container rounded-xl '>
            {/* IMage Slider */}
            <div className='bg-gray-400 w-11/12 h-80  mt-24 rounded-xl my-10 mx-auto relative'>
                <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    arrows={false}
                    afterChange={(index: number) => setCurrentSlide(index)}
                >
                    {sliderImages.map((image, index) => (
                        <div key={index} className="relative rounded-2xl w-full h-80 overflow-hidden">
                            <Image
                                src={image}
                                alt={`Event Image ${index + 1}`}
                                className="object-cover "
                                fill
                            />
                        </div>
                    ))}
                </Slider>

                {/* Thumbnail Navigation */}
                <div className='absolute bottom-4 left-1/2  transform -translate-x-1/2 flex space-x-2'>
                    {sliderImages.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-5 h-1 rounded-full cursor-pointer 
                                ${currentSlide === index ? 'bg-white w-[6rem] border-none' : 'bg-gray-500'}
                                opacity-70 hover:opacity-100 transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>
            
            <CourseCards />

        </div>
    );
};

export default Programs;