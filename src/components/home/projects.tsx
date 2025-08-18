"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
}

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
        isVisible
          ? "animate-slide-up opacity-100 translate-y-0"
          : "opacity-0 translate-y-16"
      }`}
      style={{
        animationDelay: isVisible ? `${animationDelay}ms` : "0ms",
        animationFillMode: "both",
      }}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="p-4 object-contain"
        />
      </div>
      <div className="p-4 text-center flex-grow flex items-center justify-center">
        <h3 className="text-lg font-semibold text-[#007040]">{title}</h3>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data?.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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
    <section
      ref={sectionRef}
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <h2 className="text-[10rem] md:text-[12rem] lg:text-[26rem] font-bold text-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap overflow-hidden">
            PRODUCTS
          </h2>

          <p className="text-[#007040] text-sm font-semibold mb-2 uppercase relative z-10">
            OUR PRODUCTS
          </p>
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 relative z-10">
            Products We have <span className="text-[#007040]">Added</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
            Browse through the products that have been added to our system.
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
              {products.length > 0 ? (
                products.map((product, index) => (
                  <CarouselItem
                    key={product._id}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="flex justify-center">
                      <ProjectCard
                        imageSrc={product.imageUrl}
                        title={product.title}
                        isVisible={isVisible}
                        animationDelay={200 + index * 100}
                      />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <p className="text-center text-gray-500 w-full">
                  No products available.
                </p>
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
