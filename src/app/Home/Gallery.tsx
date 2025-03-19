'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import outreach1 from '@/app/Home/assets/All/Images/Grp Photos/Outreach_1.png';
import outreach2 from './assets/All/Images/Grp Photos/Outreach2.png';
import outreach3 from './assets/All/Images/Grp Photos/Outreach3.png';
import outreach4 from './assets/All/Images/Grp Photos/Outreach4.png';
import outreach5 from './assets/All/Images/Grp Photos/Outreach_5.jpg';
import outreach6 from './assets/All/Images/Grp Photos/Outreach6.png';
import outreach7 from './assets/All/Images/Grp Photos/Outreach7.png';
import outreach8 from './assets/All/Images/Grp Photos/Outreach8.png';
import outreach10 from './assets/All/Images/Grp Photos/Outreach10.png';
import outreach9 from './assets/All/Images/Grp Photos/outreach11.jpg';
import outreach11 from './assets/All/Images/Grp Photos/outreach13.jpg';
import outreach12 from './assets/All/Images/Grp Photos/outreach12.jpg';
import outreach13 from './assets/All/Images/Grp Photos/outreach14.jpg';
import outreact14 from './assets/All/Images/Grp Photos/outreach15.jpg'

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mou Images
import Mou1 from '@/app/Home/assets/All/Images/MOU/SRM.jpg';
import Mou2 from '@/app/Home/assets/All/Images/MOU/Mou_2.png';
import Mou3 from '@/app/Home/assets/All/Images/MOU/Mou_4.png';
import Mou4 from '@/app/Home/assets/All/Images/MOU/Mou_3.png';
import Mou5 from '@/app/Home/assets/All/Images/MOU/Mou_5.png';
import Mou6 from '@/app/Home/assets/All/Images/MOU/Mou_6.png';
import Mou7 from '@/app/Home/assets/All/Images/MOU/Mou_7.png';
import Mou8 from '@/app/Home/assets/All/Images/MOU/Mou_8.png';
import Mou9 from '@/app/Home/assets/All/Images/MOU/Mou_9.png';
import Mou10 from '@/app/Home/assets/All/Images/MOU/Mou_10.png';


import gsap from 'gsap';

const galleryImages = [
  Mou1,
  Mou2,
  Mou3,
  Mou4,
  Mou5,
  Mou6,
  Mou7,
  Mou8,
  Mou9,
  Mou10
];

const outreachImages = [
  outreach1,
  outreach2,
  outreach3,
  outreach4,
  outreach5,
  outreach6,
  outreach7,
  outreach8,
  outreach9,
  outreach10,
  outreach11,
  outreach12,
  outreach13,
];

const imageNames = [
  "SRM Institute Of Science And Technology",
  "Sri Sivasubramaniya Nadar College of Engineering",
  "Vivekanandha College of Engineering for Women ",
  "VLB Janakiammal College Of Arts & Science ",
  "Gnanamani College of Technology",
  "PGP College Of Arts & Science",
  "SRM Institute Of Science And Technology ",
  "Meenakshi College Of Engineering",
  "Sri Muthukumaran Institute of Technology (SMIT) ",
  "Kings Engineering College ",
];

const imageDescriptions = [
  " Ramapuram, Chennai",
  " Kalavakkam, Chennai",
  " Tiruchengode",
  "Kovaipudur",
  "Namakkal",
  " Namakkal",
  " Namakkal",
  "Ramapuram, Chennai",
  " Chennai",
  "Chennai",
  "Chennai",
];

const OutreachimageNames = [
  `Mastering Full Stack Development: Zero to Hero `,
  `Crack MAANG Interviews: DSA & System Design Secrets `,
  `Build a MAANG-Worthy Resume in 60 Minutes`,
  `FAANG Behavioral Interview: Talk Like a Pro `,
  `Web Dev Masterclass: React, Next.js & Beyond  `,
  `Ace Coding Rounds: DSA Patterns You Must Know `,
  `Landing Your Dream Job: Placement Hacks & Strategies`,
  `Power Up with Data Analytics: Insights That Matter `,
  `The Future of AI: How Gen AI is Changing the Game`,
  `AI & Gen AI: Your Shortcut to a High-Paying Career `,
  `From College to Corporate: Tech Career Roadmap`,
  `Gen AI in Action: Automate & Innovate with AI `,
  `Hack Your Way into MAANG: Resume & Interview Secrets`,

];

const OutreachimageDescriptions = [
  "SRM Institute Of Science And Technology(Ramapuram, Chennai)",
  `Vivekanandha College of Arts and Science for Women ( Tiruchengode )`,
  `Sacred Heart College ( Tiruppattur )`,
  `Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
  `Sri Sivasubramaniya Nadar College of Engineering ( Kalavakkam, Chennai )`,
  `Guru Nanak College ( Chennai )`,
  `Vivekanandha College of Engineering for Women ( Tiruchengode )`,
  `KPR College of Arts Science and Research ( Uthupalayam )`,
  `SIMATS ENGINEERING ( Chennai )`,
  `Rajalakshmi Engineering College ( Thandalam, Chennai )`,
  `Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College ( Avadi )`,
  `Erode Sengunthar Engineering College ( Erode )`,
  `Knowledge Institute of Technology ( Kakapalayam, Salem )`,
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [currentOutreachImage, setCurrentOutreachImage] = useState(0);

  const images = activeTab === 'gallery' ? galleryImages : outreachImages;
  const currentImage = activeTab === 'gallery' ? currentGalleryImage : currentOutreachImage;
  const setCurrentImage = activeTab === 'gallery' ? setCurrentGalleryImage : setCurrentOutreachImage;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // gsap animation
  const [showCourses, setShowCourses] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false); // New state for Testimonials
  const [showFAQs, setShowFAQs] = useState(false); // New state for FAQs

  const handleModulesClick = () => {
    setShowCourses(true);
    setShowDescription(false);
    setShowBenefits(false);
    setShowCertification(false);
    setShowRequirements(false);
    setShowTestimonials(false);
    setShowFAQs(false);
  };

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowCourses(false);
    setShowBenefits(false);
    setShowCertification(false);
    setShowRequirements(false);
    setShowTestimonials(false);
    setShowFAQs(false);
  };

  return (
    <div className="container mx-auto lg:py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-around my-6'>
          <div className="flex items-center flex-row justify-center gap-10 lg:gap-0 md:space-y-0 md:space-x-20 w-full md:w-5/12">
            <button
              className={`px-4 py-2 md:px-6 md:py-3 flex gap-2 text-lg md:text-xl font-medium ${activeTab === 'gallery'
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => {
                setActiveTab('gallery');
              }}
            >
              Mou
              <span className="hidden md:inline"> Gallery</span>
            </button>
            <button
              className={`px-4 py-2 md:px-6 md:py-3 flex gap-2 relative left-2 text-lg md:text-xl font-medium ${activeTab === 'outreach'
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => {
                setActiveTab('outreach');
              }}
            >
              Outreach
              <span className="hidden md:inline"> Programs</span>
            </button>
          </div>
        </div>
        <div className='flex mb-5 relative mx-auto w-full md:w-[32rem] h-[0.1rem] overflow-hidden -mt-7 bg-gray-300'>
          <div className={`w-[50%] md:w-[15.5rem] h-[0.2rem] absolute left-0 top-0 bg-blue-500 transform transition-transform duration-300 ${activeTab === 'outreach' ? 'translate-x-[100%] md:translate-x-[15rem] w-[50%] md:w-[21rem]' : 'translate-x-0'}`}>
          </div>
        </div>

        {/* Heading and Description */}
        <div className="text-center min-h-32 mt-10">
          <h2 className="lg:text-xl text-xl font-normal text-gray-600">
            {activeTab === 'gallery' ? <span className="font-bold">Their Vision, Our Success!</span> : <span className="font-bold">'Action Over Theory – Cybernaut Makes It Happen!'</span>}
          </h2>
          <p className="text-gray-600 lg:text-lg min-h-10 text-sm max-w-6xl mx-auto">
            {activeTab === 'gallery'
              ? <>At Cybernaut Edu-Tech, we're shaping futures with long-term programs in top institutions. <br /><span className="font-bold ">It's not a moment, it's a movement!</span></>
              : <>Cybernaut Edu-Tech brings the power of hands-on learning and outreach events <br /> <span className="font-bold "> Real skills, real impact, real change! </span></>}
          </p>
        </div>

        {/* Three Image Layout */}
        <div className="relative flex justify-center items-center gap-4">
          {/* Left Image */}
          <div className="w-1/4 lg:block hidden left-3 aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src={images[(currentImage - 1 + images.length) % images.length]}
              alt="Previous"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-2">
              <h3 className="text-sm font-semibold">{activeTab === 'outreach' ? OutreachimageNames[(currentImage - 1 + images.length) % images.length] : imageNames[(currentImage - 1 + images.length) % images.length]}</h3>
              <p className="text-[0.7rem]">{activeTab === 'outreach' ? OutreachimageDescriptions[(currentImage - 1 + images.length) % images.length] : imageDescriptions[(currentImage - 1 + images.length) % images.length]}</p>
            </div>
          </div>

          {/* Center Image (Larger) */}
          <div className="lg:w-1/2 w-10/12 aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src={images[currentImage]}
              alt="Current"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-2">
              <h3 className="text-lg font-semibold">{activeTab === 'outreach' ? OutreachimageNames[currentImage] : imageNames[currentImage]}</h3>
              <p className="text-sm">{activeTab === 'outreach' ? OutreachimageDescriptions[currentImage] : imageDescriptions[currentImage]}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/4 lg:block right-3 hidden aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src={images[(currentImage + 1) % images.length]}
              alt="Next"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-2">
              <h3 className="text-sm font-semibold">{activeTab === 'outreach' ? OutreachimageNames[(currentImage + 1) % images.length] : imageNames[(currentImage + 1) % images.length]}</h3>
              <p className="text-[0.7rem]">{activeTab === 'outreach' ? OutreachimageDescriptions[(currentImage + 1) % images.length] : imageDescriptions[(currentImage + 1) % images.length]}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute -left-12 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
          >
            <ChevronLeft className="lg:w-6 lg:h-6 w-4 h-4 lg:block hidden text-blue-500" />
          </button>
          <button
            onClick={nextImage}
            className="absolute -right-12 top-1/2 -translate-y-1/2 lg:bg-blue-300/80 rounded-full p-2 lg:shadow-lg lg:hover:bg-white transition-colors"
          >
            <ChevronRight className="lg:w-6 lg:h-6 w-4 h-4 lg:block hidden text-blue-500" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentImage === index
                ? 'bg-blue-600 w-4'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;