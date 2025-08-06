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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentSections = [
    {
      icon: "🏆",
      title: "Leadership",
      description: "MySoft Limited is one of the leading IT companies in Bangladesh providing Secure, Scalable, On-Demand Application System and Data Solutions to help customers improving their business performance."
    },
    {
      icon: "🚀",
      title: "Vision",
      description: "Being one of the Leading IT Company of Bangladesh, We aim to be the best. MySoft Limited does not work for IT, MySoft Limited makes IT work for you and your business by reducing the Total Cost of Ownership to make ROI significantly Higher."
    },
    {
      icon: "∞",
      title: "Mission",
      description: "To make technology an asset for the healthcare sector is to embark on a transformative journey that intertwines innovation with compassion, efficiency with efficacy, and accessibility with accountability."
    },
    {
      icon: "⭐",
      title: "Recognition",
      description: "MySoft Limited has gained a notable recognition in Bangladesh. We have developed a wide range of software applications namely as Hospital Information System, Radiology Information System etc."
    },
    {
      icon: "🏆",
      title: "Success",
      description: "MySoft Limited succeeded on building trust among more than 200 clients such as BSMMU, Combined Military Hospital (CMH), Armed Forces Institute of Pathology (AFIP), Delta Hospital Limited, Bangladesh Specialized Hospital (BSH), Islami Bank Hospital etc."
    },
    {
      icon: "ℹ️",
      title: "Information System",
      description: "MySoft Limited has developed a wide range of software applications namely as Hospital Information System, Clinical Laboratory Information System, Radiology Information System etc."
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-16 px-4 overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-gray-300 transform rotate-45"
              style={{
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 20}%`,
                opacity: 1 - (i * 0.05)
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            KNOW WHO WE ARE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            About MySoft
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
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
                <div className="flex-shrink-0 w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center text-purple-600 text-xl font-bold">
                  {section.icon}
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

                     {/* Central Image */}
           <div className="flex justify-center">
             <div className="relative w-96 h-[600px] rounded-lg shadow-lg overflow-hidden">
               <Image 
                 src="https://mysoftltd.com/assets/img/abt-homepage.jpg" 
                 alt="Person working at computer" 
                 fill
                 className="object-cover"
               />
             </div>
           </div>

          {/* Right Column */}
          <div className="space-y-8">
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
                <div className="flex-shrink-0 w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center text-purple-600 text-xl font-bold">
                  {section.icon}
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