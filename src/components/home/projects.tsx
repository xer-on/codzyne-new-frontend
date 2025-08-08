"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-[300px] h-[300px] flex flex-col">
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
    description: "Rangpur, Bangladesh",
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
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20rem] font-extrabold text-gray-200 opacity-5">
          200+
        </span>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#007040] text-sm font-semibold mb-2 uppercase">
            OUR PROJECTS
          </p>
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Projects We have <span className="text-[#007040]">Worked</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            During the Journey of its operation, CodeZyne Limited has achieved numerous clients all over the
            country. Right now we are serving 200+ honorable clients countrywide such as – Combined
            Military Hospital, Bangladesh Navy, Bangabandhu Sheikh Mujib Medical University (BSMMU),
            Delta Hospital Limited, BRAC Healthcare Limited etc.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 h-[400px]">
              {projectsData.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/5 ">
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#007040] hover:bg-[#005a33] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Watch More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
