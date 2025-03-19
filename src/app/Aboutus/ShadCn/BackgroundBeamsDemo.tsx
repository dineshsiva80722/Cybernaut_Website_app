// // "use client";
// // import React from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useTransform,
// //   useSpring,
// //   MotionValue,
// // } from "framer-motion";
// // import Image from "next/image";


// // export const HeroParallax = ({
// //   products,
// // }: {
// //   products: {
// //     title: string;
// //     link: string;
// //     thumbnail: string;
// //   }[];
// // }) => {
// //   const firstRow = products.slice(0, 5);
// //   const secondRow = products.slice(5, 10);
// //   const thirdRow = products.slice(10, 15);
// //   const ref = React.useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end start"],
// //   });

// //   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

// //   const translateX = useSpring(
// //     useTransform(scrollYProgress, [0, 1], [0, 1000]),
// //     springConfig
// //   );
// //   const translateXReverse = useSpring(
// //     useTransform(scrollYProgress, [0, 1], [0, -1000]),
// //     springConfig
// //   );
// //   const rotateX = useSpring(
// //     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
// //     springConfig
// //   );
// //   const opacity = useSpring(
// //     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
// //     springConfig
// //   );
// //   const rotateZ = useSpring(
// //     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
// //     springConfig
// //   );
// //   const translateY = useSpring(
// //     useTransform(scrollYProgress, [0, 0.5], [-700, -700]),
// //     springConfig
// //   );
// //   return (
// //     <div
// //       ref={ref}
// //       className="h-[110vh] container mx-auto py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
// //     >
// //       <Header />
// //       <motion.div
// //         style={{
// //           rotateX,
// //           rotateZ,
// //           translateY,
// //           opacity,
// //         }}
// //         className=""
// //       >
// //         <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
// //           {firstRow.map((product) => (
// //             <ProductCard
// //               product={product}
// //               translate={translateX}
// //               key={product.title}
// //             />
// //           ))}
// //         </motion.div>
// //         <motion.div className="flex flex-row  mb-10 space-x-10 ">
// //           {secondRow.map((product) => (
// //             <ProductCard
// //               product={product}
// //               translate={translateXReverse}
// //               key={product.title}
// //             />
// //           ))}
// //         </motion.div>
// //         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
// //           {thirdRow.map((product) => (
// //             <ProductCard
// //               product={product}
// //               translate={translateX}
// //               key={product.title}
// //             />
// //           ))}
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export const Header = () => {
// //   return (
// //     <div className="max-w-7xl relative mx-auto py-20 md:py-0 px-4 w-full left-0 top-0">
// //       <h1 className="text-2xl md:text-3xl font-bold dark:text-white">
// //         The World Around <br /> 
// //         <span className="text-8xl">Cybernaut</span> 
// //       </h1>
// //     </div>
// //   );
// // };

// // export const ProductCard = ({
// //   product,
// //   translate,
// // }: {
// //   product: {
// //     title: string;
// //     link: string;
// //     thumbnail: string;
// //   };
// //   translate: MotionValue<number>;
// // }) => {

// //   return (
// //     <motion.div
// //       style={{
// //         x: translate,
// //       }}
// //       whileHover={{
// //         y: -20,
// //       }}
// //       key={product.title}
// //       className="group/product h-96 w-[25rem] relative flex-shrink-0 "
// //     >
// //         <Image
// //           src={product.thumbnail}
// //           height="600"
// //           width="600"
// //           className="object-fill object-left-top absolute h-full w-full  inset-0"
// //           alt={product.title}
// //         />
// //     </motion.div>
// //   );
// // };


// "use client";
// import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";

// export default function BackgroundBeamsDemo() {
//   return (
//     <div className="h-[40rem] w-full bg-black/90 relative flex flex-col items-center justify-center mt-[70px] antialiased">
//       <div className="max-w-2xl mx-auto p-4">
//         <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//           Join the waitlist
//         </h1>
//         <p></p>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//           Welcome to MailJet, the best transactional email service on the web.
//           We provide reliable, scalable, and customizable email solutions for
//           your business. Whether you&apos;re sending order confirmations,
//           password reset emails, or promotional campaigns, MailJet has got you
//           covered.
//         </p>
//         {/* <input
//           type="text"
//           placeholder="hi@manuarora.in"
//           className="rounded-lg border border-neutral-950 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-3  placeholder:text-neutral-700"
//         /> */}
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// }


// 'use client'

// import React from "react";
// import { Vortex } from "@/components/ui/vortex";

// export default function VortexDemo() {
//   return (
//     <div className="w-full mx-auto h-[42rem] mt-[70px] overflow-hidden">
//       <div
        
//         className="flex items-center flex-col justify-center px-2 md:px-10  w-full h-full"
//       >
//         <h1 style={{lineHeight: 1.2}} className="text-5xl text-black leading-9 md:text-8xl font-bold text-center">
//           The <span className="text-blue-600">World</span> Around <br /> 
//           <span className="text-8xl text-blue-600">Cybernaut</span>
//         </h1>
//       </div>
//     </div>
//   );
// }


"use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import { CoolMode } from "@/components/magicui/cool-mode";
// import { Particles } from "@/components/magicui/particles";



import { Globe } from "@/components/magicui/globe";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import Image from "next/image";
import {Particles} from "@/components/magicui/particles";
import bgLogos from '@/app/Home/assets/All/Logo Cybernaut.png'
export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (

    <>
    <div className="relative flex h-[460px] mt-[70px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
      <div className="relative justify-center">
      </div>
      </span>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
       <CoolMode>
        <Button className="p-0 w-full h-full flex flex-col bg-white text-black hover:bg-white hover:text-black shadow-none cursor-pointer">
        <h1 style={{lineHeight: 1.2}} className="text-5xl text-black leading-9 md:text-8xl font-bold text-center">
          The <span className="text-blue-600">World</span> Around <br /> 
          <span className="text-8xl text-blue-600">Cybernaut</span>
        </h1>
        </Button>
      </CoolMode>
    </div>



    
    
    </>
  );
}




// 'use client'

// import React from "react";
// import { BackgroundSection } from "../sections/BackgroundSection";
// import { FeatureSection } from "../sections/FeatureSection";
// import { FoundersSection } from "../sections/FoundersSection";
// import { HeroSection } from "../sections/HeroSection";
// import { MainContentSection } from "../sections/MainContentSection";
// import { OurJourneySection } from "../sections/OurJourneySection/OurJourneySection";
// import { OutreachProgramsSection } from "../sections/OutreachProgramsSection";
// import { PartnerSection } from "../sections/PartnerSection";
// import { StatisticsSection } from "../sections/StatisticsSection";

// export default function BackgroundBeamsDemo(): JSX.Element {
//   // Navigation items data
//   const navItems = [
//     { name: "Home", href: "/", active: false },
//     { name: "About us", href: "/about", active: true },
//     { name: "Programs", href: "/programs", active: false },
//     { name: "Events", href: "/events", active: false },
//     { name: "Blogs", href: "/blogs", active: false },
//     { name: "Contact us", href: "/contact", active: false },
//   ];

//   return (
//     <div className="bg-white flex flex-col items-center w-full">
//       {/* Navigation Bar */}
//       {/* <header className="w-full h-20 bg-white shadow-[0px_1px_20px_#00000014] sticky top-0 z-50">
//         <div className="max-w-[1680px] h-[60px] mx-auto my-2.5 px-4 flex justify-between items-center">
//           <img
//             className="w-[220px] h-[52px] object-cover"
//             alt="Logo horizontal"
//             src="public/logo-horizontal-black-1.png"
//           /> */}

//           {/* <nav className="flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`font-['Poppins',Helvetica] text-base leading-6 ${
//                   item.active
//                     ? "font-semibold text-[#00a3ff]"
//                     : "font-normal text-black"
//                 }`}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </header> */}

//       <main className="w-full max-w-[1920px] relative">

//         {/* Sections in the order shown in the image */}

//         <OutreachProgramsSection/>
      
//         {/* <PartnerSection />
//         <FeatureSection />
//         <FoundersSection />`
//         <StatisticsSection />
//         <MainContentSection />
//         <OurJourneySection />
//         <BackgroundSection />
//         <HeroSection /> */}
//       </main>
//     </div>
//   );
// };


// 'use client';

// import { useEffect, useRef } from 'react';
// import { Button } from "@/components/ui/button";
// import { CoolMode } from "@/components/magicui/cool-mode";
// import Image from "next/image";
// import bgLogos from '@/app/Home/assets/All/Logo Cybernaut.png';

// export default function ParticlesDemo() {
//     const imageRef = useRef<HTMLImageElement | null>(null);

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             if (imageRef.current) {
//                 const { clientX, clientY } = event;
//                 const rect = imageRef.current.getBoundingClientRect(); // Get the image's position
//                 const centerX = rect.left + rect.width / 2; // Calculate center X of the image
//                 const centerY = rect.top + rect.height / 2; // Calculate center Y of the image

//                 // Calculate the difference between the mouse position and the center of the image
//                 const deltaX = clientX - centerX;
//                 const deltaY = clientY - centerY;

//                 // Calculate rotation based on the difference
//                 const rotateY = (deltaX / rect.width) * 20; // Adjust sensitivity for Y-axis rotation
//                 const rotateX = (deltaY / rect.height) * -20; // Adjust sensitivity for X-axis rotation

//                 // Calculate movement for a 3D effect
//                 const moveZ = (deltaY / rect.height) * -50; // Adjust sensitivity for Z-axis movement

//                 imageRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${moveZ}px)`; // Apply rotation and Z movement
//             }
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className="relative flex size-full max-w-full mt-[70px] min-h-[25rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
//             <Image 
//                 ref={imageRef} 
//                 src={bgLogos} 
//                 alt="Background Logo" 
//                 className="absolute top-1 inset-0 w-96 h-96 left-0 right-0 mx-auto transition-transform duration-200" 
//             />
//             <div className="w-full h-full backdrop-blur-[1px] bg-black/50 absolute top-0"></div>
//             <CoolMode>
//                 <Button className="p-0 w-full h-32 relative top-10 flex flex-col bg-transparent text-black hover:bg-transparent hover:text-black shadow-none cursor-pointer">
//                     <h1 className="text-7xl">The World Around</h1><br />
//                     <span className="text-8xl font-bold">Cybernaut</span>
//                 </Button>
//             </CoolMode>
//             <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//         </div>
//     );
// }



// "use client";
// import React from "react";
// import { motion } from "motion/react";
// import dynamic from "next/dynamic";

// const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
//   ssr: false,
// });

// export default function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   };
//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
//   const sampleArcs = [
//     {
//       order: 1,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -22.9068,
//       endLng: -43.1729,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 1,
//       startLat: 28.6139,
//       startLng: 77.209,
//       endLat: 3.139,
//       endLng: 101.6869,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 1,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -1.303396,
//       endLng: 36.852443,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 3.139,
//       endLng: 101.6869,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: -15.785493,
//       startLng: -47.909029,
//       endLat: 36.162809,
//       endLng: -115.119411,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: -33.8688,
//       startLng: 151.2093,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: 21.3099,
//       startLng: -157.8581,
//       endLat: 40.7128,
//       endLng: -74.006,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: 11.986597,
//       startLng: 8.571831,
//       endLat: -15.595412,
//       endLng: -56.05918,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: -34.6037,
//       startLng: -58.3816,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 48.8566,
//       endLng: -2.3522,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 14.5995,
//       startLng: 120.9842,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: -33.8688,
//       endLng: 151.2093,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 48.8566,
//       endLng: -2.3522,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: -15.432563,
//       startLng: 28.315853,
//       endLat: 1.094136,
//       endLng: -63.34546,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: 37.5665,
//       startLng: 126.978,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -15.595412,
//       endLng: -56.05918,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: 48.8566,
//       startLng: -2.3522,
//       endLat: 52.52,
//       endLng: 13.405,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: 52.52,
//       startLng: 13.405,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: -8.833221,
//       startLng: 13.264837,
//       endLat: -33.936138,
//       endLng: 18.436529,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: 49.2827,
//       startLng: -123.1207,
//       endLat: 52.3676,
//       endLng: 4.9041,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: 40.7128,
//       endLng: -74.006,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: -22.9068,
//       endLng: -43.1729,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: -34.6037,
//       endLng: -58.3816,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: -22.9068,
//       startLng: -43.1729,
//       endLat: 28.6139,
//       endLng: 77.209,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 31.2304,
//       endLng: 121.4737,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 52.3676,
//       endLng: 4.9041,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: 41.9028,
//       startLng: 12.4964,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 31.2304,
//       endLng: 121.4737,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 1.3521,
//       endLng: 103.8198,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 37.7749,
//       endLng: -122.4194,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 35.6762,
//       startLng: 139.6503,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: 52.52,
//       startLng: 13.405,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: 11.986597,
//       startLng: 8.571831,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: -22.9068,
//       startLng: -43.1729,
//       endLat: -34.6037,
//       endLng: -58.3816,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 14,
//       startLat: -33.936138,
//       startLng: 18.436529,
//       endLat: 21.395643,
//       endLng: 39.883798,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//   ];

//   return (
//     <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
//       <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="div"
//         >
//           <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//             We sell soap worldwide
//           </h2>
//           <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//             This globe is interactive and customizable. Have fun with it, and
//             don&apos;t forget to share it. :)
//           </p>
//         </motion.div>
//         <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
//         <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//           <World data={sampleArcs} globeConfig={globeConfig} />
//         </div>
//       </div>
//     </div>
//   );
// }
