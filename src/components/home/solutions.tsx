"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
  return (
    <section ref={sectionRef} className="w-full relative bg-[url('https://mysoftltd.com/assets/solution-bg-2.svg')] bg-cover bg-center">
      {/* Top Section - Dark Background */}
      <div className='flex justify-center items-center'>
        <div className="bg-[url('/Banners/banner1.jpg')] bg-cover bg-center text-white py-16 px-4 relative overflow-hidden mx-3 h-[580px] lg:w-[1180px] lg:h-[500px] rounded-2xl">
          {/* Background Pattern */}
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Medicare Solutions
            </h2>
            
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
              CodeZyne Limited provides the best customer-centric and efficient HIS in healthcare sector of our country among 200+ clients countrywide, named Medicare. Currently, we have 4 versions of Medicare operational:
            </p>
            
            {/* Version Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gray-700 text-gray-200 px-6 py-2 rounded-full text-sm font-medium">
                Oracle 6i (Desktop)
              </span>
              <span className="bg-gray-700 text-gray-200 px-6 py-2 rounded-full text-sm font-medium">
                Oracle 12c (Desktop)
              </span>
              <span className="bg-gray-700 text-gray-200 px-6 py-2 rounded-full text-sm font-medium">
                Java (Web)
              </span>
              <span className="bg-gray-700 text-gray-200 px-6 py-2 rounded-full text-sm font-medium">
                APEX (Web)
              </span>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-full">
              Read Details
            </Button>
          </div>
        </div>
      </div>
      
      {/* Cards Section - Positioned to overlap with banner */}
      <div className="relative -mt-2 md:-mt-20 mb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className='flex justify-center items-center'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"> {/* Changed from items-center to items-start */}
            {/* Card 1 - Laboratory Information System */}
            <div 
              className={`bg-white rounded-xl w-[300px] h-[350px] shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-700 ${
                isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } md:mt-14`}
              style={{
                animationDelay: isVisible ? '200ms' : '0ms',
                animationFillMode: 'both'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-[104px] h-[104px] rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(7, 138, 108, 0.15)' }}>
                  <Image src="https://mysoftltd.com/assets/green-solutions-hospital-icon.svg" alt="LIS" width={60} height={60} />
                </div>
                <h3 className=" font-bold text-[20px] mb-2">
                  <span className='text-[#078a6c]'>LABORATORY </span>
                  INFORMATION SYSTEM (LIS)
                </h3>
              </div>
            </div>
            
            {/* Card 2 - Hospital Information System */}
            <div 
              className={`bg-white rounded-xl w-[300px] h-[350px] shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-700 ${
                isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } md:-mt-8`}
              style={{
                animationDelay: isVisible ? '400ms' : '0ms',
                animationFillMode: 'both'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-[104px] h-[104px] rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(146, 39, 143, 0.15)' }}>
                <Image src="https://mysoftltd.com/assets/magenda-solutions-hospital-icon.svg" alt="HIS" width={60} height={60} />
                </div>
                <h3 className="font-bold text-[20px] mb-2">
                  <span className='text-[#92278f]'>HOSPITAL </span>
                  INFORMATION SYSTEM (HIS)
                </h3>
              </div>
            </div>
            
            {/* Card 3 - Radiology Information System */}
            <div 
              className={`bg-white rounded-xl w-[300px] h-[350px] shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-700 ${
                isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } md:mt-14`}
              style={{
                animationDelay: isVisible ? '600ms' : '0ms',
                animationFillMode: 'both'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-[104px] h-[104px] rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(13, 115, 183, .15)' }}>
                <Image src="https://mysoftltd.com/assets/blue-solutions-hospital-icon.svg" alt="RIS" width={60} height={60} />
                </div>
                <h3 className="font-bold text-[20px] mb-2">
                  <span className='text-[#0d73b7]'>RADIOLOGY </span>
                  INFORMATION SYSTEM (RIS)
                </h3>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;