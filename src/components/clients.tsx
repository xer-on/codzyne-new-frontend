"use client"

import React from 'react'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const clients = [
  {
    name: "Apollo Imperial Hospital Limited",
    logo: "Apollo Imperial HOSPITALS",
    subtitle: "(Owned by Imperial Hospital Limited)",
    logoStyle: "text-blue-600 font-bold text-lg"
  },
  {
    name: "Belle Vue Hospital Limited",
    logo: "BELLE VUE Hospital",
    logoStyle: "text-red-600 font-bold text-lg"
  },
  {
    name: "Parkview Hospital Limited",
    logo: "PARKVIEW HOSPITAL",
    subtitle: "Care of care",
    logoStyle: "text-blue-600 font-bold text-lg"
  },
  {
    name: "CMH Management System",
    logo: "CMH",
    logoStyle: "text-maroon-600 font-bold text-lg"
  },
  {
    name: "Bangladesh Navy Sickbay Haji Mohshin",
    logo: "BNSM",
    logoStyle: "text-yellow-600 font-bold text-lg"
  },
  {
    name: "National Institute of Laboratory Medicine and Referral Center",
    logo: "NILMRC",
    subtitle: "ESTD. 2010 DHAKA, BANGLADESH",
    logoStyle: "text-red-600 font-bold text-lg"
  }
]

const Clients = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Background title */}
            <h2 className="text-7xl md:text-9xl  font-bold text-gray-200 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-13 z-0 whitespace-nowrap overflow-hidden">
              Our Clients
            </h2>
            
            {/* Main title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 relative z-10">
              Our Clients
            </h2>
            
            {/* Carousel with navigation arrows inside */}
            <div className="mt-12 relative z-10">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <div className="relative">
                  {/* Navigation arrows positioned to the right */}
                  <div className="absolute -top-12 right-0 z-20 flex gap-2">
                    <CarouselPrevious className="relative -left-0 -top-0 translate-y-0 translate-x-0 h-8 w-8 bg-purple-200 border-purple-300 hover:bg-purple-300" />
                    <CarouselNext className="relative -right-0 -top-0 translate-y-0 translate-x-0 h-8 w-8 bg-purple-200 border-purple-300 hover:bg-purple-300" />
                  </div>
                  
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {clients.map((client, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 w-[160px] h-[140px] md:w-[180px] md:h-[160px] lg:w-[186px] lg:h-[195px] mx-auto">
                          {/* Logo placeholder */}
                          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 md:mb-3 flex-shrink-0">
                            <span className={`${client.logoStyle} text-sm md:text-base lg:text-lg`}>
                              {client.logo}
                            </span>
                          </div>
                          
                          {/* Client name */}
                          <h3 className="text-xs md:text-sm font-medium text-gray-900 text-center leading-tight flex-1 flex items-center justify-center">
                            {client.name}
                          </h3>
                          
                          {/* Subtitle if exists */}
                          {client.subtitle && (
                            <p className="text-xs text-gray-500 text-center mt-1 flex-shrink-0">
                              {client.subtitle}
                            </p>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
              </Carousel>
            </div>
            
            {/* See More button */}
            <div className="mt-12">
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients