import React from 'react';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  return (
    <section className="w-full">
      {/* Top Section - Dark Background */}
      <div className='flex justify-center items-center'>
      <div className="bg-[url('/Banners/banner1.jpg')] bg-cover bg-center text-white py-16 px-4 relative overflow-hidden w-[1180px] h-[500px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
          {/* Network lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,20 Q30,10 50,20 T90,20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none"/>
            <path d="M10,40 Q30,30 50,40 T90,40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none"/>
            <path d="M10,60 Q30,50 50,60 T90,60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none"/>
            <path d="M10,80 Q30,70 50,80 T90,80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Medicare Solutions
          </h2>
          
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
            MySoft Limited provides the best customer-centric and efficient HIS in healthcare sector of our country among 200+ clients countrywide, named Medicare. Currently, we have 4 versions of Medicare operational:
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
          
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium">
            Read Details
          </Button>
        </div>
      </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white py-16 px-4 relative">
        {/* Abstract Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute top-40 left-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-20"></div>
          <div className="absolute top-60 right-1/3 w-5 h-5 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-red-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-10 w-4 h-4 border-2 border-blue-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-60 left-1/3 w-5 h-5 border-2 border-green-500 rounded-full opacity-20"></div>
          <div className="absolute top-80 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 left-1/2 w-4 h-4 bg-red-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-32 right-1/2 w-5 h-5 bg-blue-500 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Laboratory Information System */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                  </svg>
                </div>
                <h3 className="text-green-600 font-bold text-lg mb-2">
                  LABORATORY INFORMATION SYSTEM (LIS)
                </h3>
              </div>
            </div>

            {/* Card 2 - Hospital Information System */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-purple-600 font-bold text-lg mb-2">
                  HOSPITAL INFORMATION SYSTEM (HIS)
                </h3>
              </div>
            </div>

            {/* Card 3 - Radiology Information System */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <h3 className="text-blue-600 font-bold text-lg mb-2">
                  RADIOLOGY INFORMATION SYSTEM (RIS)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
