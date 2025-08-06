import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div>
      <section className="flex-grow bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-yellow-400 inline-block">Laboratory</span>
              <br />
              <span className="text-white inline-block">Information System</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive laboratory management solution featuring work lists, advanced image processing, 
              sample tracking, quality control, and sophisticated reporting capabilities designed for 
              modern laboratories and research facilities.
            </p>
            
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection