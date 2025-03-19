"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Outreach IMages
import Image1 from '@/app/Home/assets/All/Images/Out Reach events Website/1.jpg'
import Image2 from '@/app/Home/assets/All/Images/Out Reach events Website/2.jpg'
import Image3 from '@/app/Home/assets/All/Images/Out Reach events Website/3.jpg'
import Image4 from '@/app/Home/assets/All/Images/Out Reach events Website/4.jpg'
import Image5 from '@/app/Home/assets/All/Images/Out Reach events Website/5.jpg'
import Image6 from '@/app/Home/assets/All/Images/Out Reach events Website/6.jpg'
import Image7 from '@/app/Home/assets/All/Images/Out Reach events Website/7.jpg'
import Image8 from '@/app/Home/assets/All/Images/Out Reach events Website/8.jpg'
import Image9 from '@/app/Home/assets/All/Images/Out Reach events Website/9.jpg'
import Image10 from '@/app/Home/assets/All/Images/Out Reach events Website/10.jpg'
import Image11 from '@/app/Home/assets/All/Images/Out Reach events Website/11.jpg'
import Image12 from '@/app/Home/assets/All/Images/Out Reach events Website/12.jpg'
import Image13 from '@/app/Home/assets/All/Images/Out Reach events Website/13.jpg'
import Image14 from '@/app/Home/assets/All/Images/Out Reach events Website/14.jpg'
import Image15 from '@/app/Home/assets/All/Images/Out Reach events Website/15.jpg'
import Image16 from '@/app/Home/assets/All/Images/Out Reach events Website/16.jpg'
import Image17 from '@/app/Home/assets/All/Images/Out Reach events Website/17.jpg'
import Image18 from '@/app/Home/assets/All/Images/Out Reach events Website/18.jpg'
import Image19 from '@/app/Home/assets/All/Images/Out Reach events Website/19.jpg'
import Image20 from '@/app/Home/assets/All/Images/Out Reach events Website/20.jpg'
import Image21 from '@/app/Home/assets/All/Images/Out Reach events Website/21.jpg'
import Image22 from '@/app/Home/assets/All/Images/Out Reach events Website/22.jpg'
import Image23 from '@/app/Home/assets/All/Images/Out Reach events Website/23.jpg'
import Image24 from '@/app/Home/assets/All/Images/Out Reach events Website/24.jpg'
import Image25 from '@/app/Home/assets/All/Images/Out Reach events Website/25.jpg'
import Image26 from '@/app/Home/assets/All/Images/Out Reach events Website/26.jpg'
import Image27 from '@/app/Home/assets/All/Images/Out Reach events Website/27.jpg'
import Image28 from '@/app/Home/assets/All/Images/Out Reach events Website/28.jpg'
import Image29 from '@/app/Home/assets/All/Images/Out Reach events Website/29.jpg'
import Image30 from '@/app/Home/assets/All/Images/Out Reach events Website/30.jpg'
import Image31 from '@/app/Home/assets/All/Images/Out Reach events Website/31.jpg'
import Image32 from '@/app/Home/assets/All/Images/Out Reach events Website/32.jpg'
import { StaticImageData } from 'next/image';




// Simplified card component without Card UI component to reduce spacing
const OutreachCard = ({ imageUrl, className }: { imageUrl: string | StaticImageData; className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt="Outreach"
        width={400}
        height={300}
        unoptimized
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

const Outreaches = () => {
  // Temporary placeholder images from Unsplash
  const placeholderImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    



  ];
  const placeholderImagesrow1 =[
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,

  ]
  const placeholderImagesrow2=[
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
    Image32,
    
  ]

  return (
    <section className="relative h-[42rem] bg-zinc-800 overflow-hidden">
      {/* Gradient overlays for smooth transitions */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-800 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-800 to-transparent z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Content section */}
          <div className="lg:col-span-4 flex flex-col w-96 mx-auto space-y-4 h-[26rem] justify-center z-20">
            <h2 className="text-4xl font-bold text-white tracking-tight">Our Outreaches</h2>
            <p className="text-lg text-gray-200  leading-relaxed">Power Up with Our Outreach Workshops</p>
            <div className="h-1 w-24 bg-white"></div>
            <p className="text-gray-200 text-sm leading-relaxed">
              With 150+ outreach programs, we’ve inspired young minds and introduced thousands of students to new skills, ideas, and possibilities, empowering them to shape a brighter future.
            </p>
            <Button className="bg-white text-zinc-800 relative top-3 hover:bg-gray-200 w-fit group flex items-center gap-2 transition-all">
              Contact us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Marquee section */}
          <div className="lg:col-span-8 z-0 ">
            {/* First row - right direction */}
            <div className="mb-0">
              <Marquee
                gradient={false}
                pauseOnHover={true}
                speed={40}
                direction="right"
              >
                <div className="flex">
                  {placeholderImages.slice(0, 8).map((imageUrl, index) => (
                    <OutreachCard
                      key={`row1-${index}`}
                      imageUrl={imageUrl}
                      className="w-[320px] h-[220px]"
                    />
                  ))}
                </div>
              </Marquee>
            </div>

            {/* Second row - left direction */}
            <div className="mt-2">
              <Marquee
                gradient={false}
                pauseOnHover={true}
                speed={30}
              >
                <div className="flex">
                  {placeholderImagesrow1.slice(7, 15).map((imageUrl, index) => (
                    <OutreachCard
                      key={`row2-${index}`}
                      imageUrl={imageUrl}
                      className="w-[330px] h-[220px]"
                    />
                  ))}
                </div>
              </Marquee>
            </div>

            {/* Third row - right direction (slightly slower) */}
            <div className='bg-red-500 w-[93rem] relative -left-[31rem] mt-2 '>
              <Marquee
                gradient={false}
                pauseOnHover={true}
                speed={35}
                direction="right"
              >
                <div className="flex">
                  {[...placeholderImagesrow2.slice(3, 15), ...placeholderImagesrow2.slice(0, 3)].map((imageUrl, index) => (
                    <OutreachCard
                      key={`row3-${index}`}
                      imageUrl={imageUrl}
                      className="w-[320px] h-[220px]"
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreaches;