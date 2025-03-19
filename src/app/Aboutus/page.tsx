
'use client'
import React, { useState, useEffect } from 'react'
import Nav from '@/app/Home/nav'
import About from './about'
import Offers from './offers'
import Founders from './founders'
import Milestones from './milestones'
import Partner from './partner'
import Journey from './journey'
import Contact from '../Home/contact'
import Footer from '../Home/footer'
import BackgroundBeamsDemo from './ShadCn/BackgroundBeamsDemo'
import Outreaches from './Outreaches'
import { ArrowUp } from 'lucide-react';


const page = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Nav />
      <BackgroundBeamsDemo />
      <div className='w-auto h-auto float-end sticky top-[40rem] z-50 p-5'>

        <button
          onClick={scrollToTop}
          className={`
          fixed bottom-8 right-8
          w-[45px] h-[45px]
          bg-gradient-to-r from-[#61bdfa] to-[#4cd6f8]
          flex items-center justify-center
          rounded-full cursor-pointer border-none
          group
           ${showButton ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300
        `}
        >
          <ArrowUp
            className="w-5 h-5 text-white group-hover:animate-[slide-in-bottom_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
          />
          <span className="absolute -bottom-[18px] w-[100px] text-[0.8rem] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Back to Top
          </span>
        </button>

      </div>
      <About />
      <div id='offers'>

        <Offers />
      </div>
      <Founders />
      <Milestones />
      <div id='partner'>
        <Partner />
      </div>
      <Journey />
      <Outreaches />
      <Contact />
      <Footer />

    </div>
  )
}

export default page