'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// import CDSCImg1 from '@/app/Home/assets/All/Images/whatsapp/CDSC1.jpg';
import Vision from '@/app/Home/assets/All/Images/whatsapp/CDSE2.jpg';
import Mission from '@/app/Home/assets/All/Images/whatsapp/Mission.jpg';
import Activities from '@/app/Home/assets/All/Images/whatsapp/Activities.jpg';
import defulatiamges from '@/app/Home/assets/All/Images/whatsapp/Conference View 01.jpg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';


// Define section type for better type safety
type SectionType = 'vision' | 'mission' | 'activities';


function vision() {
  // State to track which section is open (only one at a time)
  const [openSection, setOpenSection] = useState<SectionType>('vision'); // Vision open by default

  // Toggle section visibility
  const toggleSection = (section: SectionType) => {
    setOpenSection(section === openSection ? section : section); // Keep open if clicking the same, otherwise open the new one
  };

  // Get the appropriate image and title based on the open section
  const getSectionImage = () => {
    switch (openSection) {
      case 'vision':
        return {
          url: Vision,
          title: "OUR VISION"
        };
      case 'mission':
        return {
          url: Mission,
          title: "OUR MISSION"
        };
      case 'activities':
        return {
          url: Activities,
          title: "CORE ACTIVITIES"
        };
      default:
        return {
          url: defulatiamges,
          title: "OUR VISION"
        };
    }
  };

  const currentImage = getSectionImage();

  return (
    <div className="container mx-auto overflow-hidden items-center justify-center  bg-gray-50 flex flex-col md:flex-row p-4 md:p-8 lg:p-28">
      {/* Left side content */}
      <div className="w-full md:w-1/2 min-h-[35rem] mx-auto flex flex-col justify-center pr-0 md:pr-8 mb-8 md:mb-18 space-y-5">

        <h1 style={{ lineHeight: "1.2" }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Cybernaut Developers Student Community
        </h1>

        <p className="text-gray-700 text-lg ">
          Connect with top tech minds and access exclusive resources. you don't just learn innovation—you build it!
        </p>

        {/* Accordion sections */}
        <div className="mb-8 h-[15rem]">
          {/* Vision Section */}
          <div className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleSection('vision')}
              className="flex justify-between items-center w-full text-left group"
            >
              <h2 className={`text-xl font-semibold ${openSection === 'vision' ? 'text-blue-600' : 'text-gray-800'} transition-colors duration-300`}>
                Our Vision
              </h2>
              <span className={`transform transition-transform duration-500 ${openSection === 'vision' ? 'rotate-180' : 'rotate-0'}`}>
                <ChevronDown className={`h-5 w-5 ${openSection === 'vision' ? 'text-blue-600' : 'text-gray-500'} transition-colors duration-300`} />
              </span>
            </button>

            <div
              className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'vision' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
            >
              <p className="text-gray-600 pl-2 border-l-2 border-blue-400">
                This clan embraces the motto: <span className="font-medium">"Create leaders, not employees."</span>
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleSection('mission')}
              className="flex justify-between items-center w-full text-left group"
            >
              <h2 className={`text-xl font-semibold ${openSection === 'mission' ? 'text-blue-600' : 'text-gray-800'} transition-colors duration-300`}>
                Our Mission
              </h2>
              <span className={`transform transition-transform duration-500 ${openSection === 'mission' ? 'rotate-180' : 'rotate-0'}`}>
                <ChevronDown className={`h-5 w-5 ${openSection === 'mission' ? 'text-blue-600' : 'text-gray-500'} transition-colors duration-300`} />
              </span>
            </button>

            <div
              className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'mission' ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
            >
              <p className="text-gray-600 pl-2 border-l-2 border-blue-400">
                Connect. Collaborate. Create.
              </p>
            </div>
          </div>

          {/* Core Activities Section */}
          <div className="py-4">
            <button
              onClick={() => toggleSection('activities')}
              className="flex justify-between items-center w-full text-left group"
            >
              <h2 className={`text-xl font-semibold ${openSection === 'activities' ? 'text-blue-600' : 'text-gray-800'} transition-colors duration-300`}>
                Core Activities
              </h2>
              <span className={`transform transition-transform duration-500 ${openSection === 'activities' ? 'rotate-180' : 'rotate-0'}`}>
                <ChevronDown className={`h-5 w-5 ${openSection === 'activities' ? 'text-blue-600' : 'text-gray-500'} transition-colors duration-300`} />
              </span>
            </button>

            <div
              className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'activities' ? 'max-h-60 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
            >
              <ul className="list-disc pl-5 text-gray-600 space-y-2  border-l-2 border-blue-400">
                <p>
                  <span className="font-medium">Skill Up:</span> Seminars, workshops, bootcamps, crash courses <br />
                  <span className="font-medium">Level Up:</span> Contests, competitions, hackathons <br />
                  <span className="font-medium">Update Yourself:</span> Interview series, Tech IR 5.0, tech summits
                </p>

              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className='lg:pt-10 pt-32'>
          <button className="bg-blue-500 hidden hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md">
            Become a member
          </button>
        </div>

      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2 md:h-[32rem]  relative">
        <div className="relative  md:h-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src={currentImage.url}
            alt="Students collaborating"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
            key={currentImage.url}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8">
            <h2 className="text-white text-4xl font-bold">{currentImage.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default vision;