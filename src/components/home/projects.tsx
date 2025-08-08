"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  isVisible: boolean;
  animationDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  isVisible,
  animationDelay,
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 w-[300px] h-[300px] flex flex-col hover:scale-105 ${
        isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{
        animationDelay: isVisible ? `${animationDelay}ms` : '0ms',
        animationFillMode: 'both'
      }}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="p-4"
        />
      </div>
      <div className="p-4 text-center flex-grow flex items-center justify-center">
        <h3 className="text-lg font-semibold text-[#007040]">{title}</h3>
      </div>
    </div>
  );
};

const projectsData = [
  {
    imageSrc: "/images/popular_medical.png", // Placeholder, you'll need to add real images
    title: "Popular Medical Centre And Hospital Sylhet Ltd.",
  },
  {
    imageSrc: "/images/rangpur_community.png", // Placeholder
    title: "Rangpur Community Medical College & Hospital",
  },
  {
    imageSrc: "/images/prime_medical.png", // Placeholder
    title: "Prime Specialized Hospital and Research Institute",
  },
  {
    imageSrc: "/images/update_diagnostic.png", // Placeholder
    title: "Update Diagnostic Center",
  },
  {
    imageSrc: "/images/cmh_management.png", // Placeholder
    title: "CMH Management System",
  },
  {
    imageSrc: "/images/popular_medical.png", // Placeholder, you'll need to add real images
    title: "Popular Medical Centre And Hospital Sylhet Ltd.",
  },
  {
    imageSrc: "/images/rangpur_community.png", // Placeholder
    title: "Rangpur Community Medical College & Hospital",
  },
  {
    imageSrc: "/images/prime_medical.png", // Placeholder
    title: "Prime Specialized Hospital and Research Institute",
  },
  {
    imageSrc: "/images/update_diagnostic.png", // Placeholder
    title: "Update Diagnostic Center",
  },
  {
    imageSrc: "/images/cmh_management.png", // Placeholder
    title: "CMH Management System",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible (earlier trigger)
        rootMargin: '0px 0px -100px 0px' // More negative margin to trigger earlier
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
    <section ref={sectionRef} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          {/* Background title */}
          <h2 className="text-[10rem] md:text-[12rem] lg:text-[26rem] font-bold text-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap overflow-hidden">
            200+
          </h2>
          
          <p className="text-[#007040] text-sm font-semibold mb-2 uppercase relative z-10">
            OUR PROJECTS
          </p>
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 relative z-10">
            Projects We have <span className="text-[#007040]">Worked</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
            During the Journey of its operation, CodeZyne Limited has achieved numerous clients all over the
            country. Right now we are serving 200+ honorable clients countrywide such as – Combined
            Military Hospital, Bangladesh Navy, Bangabandhu Sheikh Mujib Medical University (BSMMU),
            Delta Hospital Limited, BRAC Healthcare Limited etc.
          </p>
        </div>

        <div className="relative pt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 h-[400px]">
              {projectsData.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/5">
                  <div className="flex justify-center">
                    <ProjectCard 
                      {...project} 
                      isVisible={isVisible}
                      animationDelay={200 + (index * 100)} // Staggered animation delays
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>

        <div className="text-center ">
          <Button className="bg-[#007040] hover:bg-[#005a33] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Watch More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;