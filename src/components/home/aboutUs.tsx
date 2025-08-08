"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const contentSections = [
    {
      icon: <svg  className="svg-inline--fa fa-trophy" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></path></svg>,
      title: "Leadership",
      description:
        "CodeZyne Limited is one of the leading IT companies in Bangladesh providing Secure, Scalable, On-Demand Application System and Data Solutions to help customers improving their business performance."
    },
    {
      icon: <svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>,
      title: "Vision",
      description: "Being one of the Leading IT Company of Bangladesh, We aim to be the best. CodeZyne Limited does not work for IT, CodeZyne Limited makes IT work for you and your business by reducing the Total Cost of Ownership to make ROI significantly Higher."
    },
    {
      icon: <svg className="svg-inline--fa fa-medal" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"></path></svg>,
      title: "Mission",
      description: "To make technology an asset for the healthcare sector is to embark on a transformative journey that intertwines innovation with compassion, efficiency with efficacy, and accessibility with accountability."
    },
    {
      icon: <svg className="svg-inline--fa fa-medal" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"></path></svg>,
      title: "Recognition",
      description: "CodeZyne Limited has gained a notable recognition in Bangladesh. We have developed a wide range of software applications namely as Hospital Information System, Radiology Information System etc."
    },
    {
      icon: <svg  className="svg-inline--fa fa-trophy" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></path></svg>,
      title: "Success",
      description: "CodeZyne Limited succeeded on building trust among more than 200 clients such as BSMMU, Combined Military Hospital (CMH), Armed Forces Institute of Pathology (AFIP), Delta Hospital Limited, Bangladesh Specialized Hospital (BSH), Islami Bank Hospital etc."
    },
    {
      icon: <svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>,
      title: "Information System",
      description: "CodeZyne Limited has developed a wide range of software applications namely as Hospital Information System, Clinical Laboratory Information System, Radiology Information System etc."
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-16 px-4 overflow-hidden">
      {/* Background Image with left-to-right animation */}
      <div 
        className={`absolute inset-0 -left-23 transition-all duration-[1500ms] ease-out ${
          isVisible ? ' translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
        style={{
          backgroundImage: 'url("https://mysoftltd.com/assets/hexagon.svg")',
          backgroundSize: 'fill',
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            KNOW WHO WE ARE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            About CodeZyne
          </h2>
        </div>

                 {/* Main Content */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
           {/* Central Image - Top on mobile, center on desktop */}
           <div className="flex justify-center order-1 lg:order-2">
             <div 
               className={`relative w-full max-w-sm lg:w-96 h-[400px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden transition-all duration-700 ${
                 isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`}
               style={{
                 animationDelay: isVisible ? '300ms' : '0ms',
                 animationFillMode: 'both'
               }}
             >
               <Image 
                 src="https://mysoftltd.com/assets/img/abt-homepage.jpg" 
                 alt="Person working at computer" 
                 fill
                 className="object-cover"
               />
             </div>
           </div>

           {/* Left Column */}
           <div className="space-y-8 order-2 lg:order-1">
             {contentSections.slice(0, 3).map((section, index) => (
               <div 
                 key={index} 
                 className={`flex items-start space-x-4 transition-all duration-700 ${
                   isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}
                 style={{
                   animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                   animationFillMode: 'both'
                 }}
               >
                 <div className="flex-shrink-0 w-[35px] h-[35px] bg-[#efdfee] rounded-md flex items-center justify-center text-[#92278f] text-xl font-bold">
                   <div className='w-[20px] h-[20px]'>
                   {section.icon}
                   </div>
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-800 mb-2">
                     {section.title}
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     {section.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>

           {/* Right Column */}
           <div className="space-y-8 order-3 lg:order-3">
             {contentSections.slice(3, 6).map((section, index) => (
               <div 
                 key={index} 
                 className={`flex items-start space-x-4 transition-all duration-700 ${
                   isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}
                 style={{
                   animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                   animationFillMode: 'both'
                 }}
               >
                 <div className="flex-shrink-0 w-[35px] h-[35px] bg-[#efdfee] rounded-md flex items-center justify-center text-[#92278f] text-xl font-bold">
                   <div className='w-[20px] h-[20px]'>
                   {section.icon}
                   </div>
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-800 mb-2">
                     {section.title}
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     {section.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </div>
    </section>
  );
};

export default AboutUs;