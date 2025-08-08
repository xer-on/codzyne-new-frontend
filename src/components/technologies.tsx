"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState, useMemo } from 'react';

interface Technology {
  name: string;
  icon: string;
  color: string;
  isImage?: boolean;
}

const technologies: Technology[] = [
  { name: 'React', icon: '/logo/react.svg', color: 'text-blue-500',  },
  { name: 'Next.js', icon: '/logo/nextjs.svg', color: 'text-black',  },
  { name: 'Node.js', icon: '/logo/nodejs.svg', color: 'text-green-600',  },
  { name: 'Tailwind CSS', icon: '/logo/tailwind.svg', color: 'text-cyan-500',  },
  { name: 'Bootstrap', icon: '/logo/bootstrap.svg', color: 'text-purple-600',  },
  { name: 'MongoDB', icon: '/logo/mongodb.svg', color: 'text-green-600',  },
  { name: 'HTML 5', icon: '/logo/html-5.svg', color: 'text-orange-500',  },
  { name: 'CSS 3', icon: '/logo/css-3.svg', color: 'text-blue-600',  },
  { name: 'SASS', icon: '/logo/sass.svg', color: 'text-pink-500',  },
  { name: 'PHP', icon: '/logo/php.svg', color: 'text-purple-600',  },
  { name: 'MySQL', icon: '/logo/mysql.svg', color: 'text-blue-600',  },
  { name: 'Illustrator', icon: '/logo/adobe-illustrator.svg', color: 'text-orange-500',  },
  { name: 'Photoshop', icon: '/logo/photoshop.svg', color: 'text-blue-600',  },
  { name: 'Cloudflare', icon: '/logo/cloudflare.svg', color: 'text-purple-600',  },
  { name: 'PostgreSQL', icon: '/logo/postgresql.svg', color: 'text-purple-600',  },
  { name: 'Laravel', icon: '/logo/laravel.svg', color: 'text-red-600',  },
  { name: 'Typescript', icon: '/logo/typescript.svg', color: 'text-blue-600',  },
  { name: 'Puppeteer', icon: '/logo/puppeteer.svg', color: 'text-green-600',  },
  { name: 'Express.js', icon: '/logo/express.svg', color: 'text-black',  },
  { name: 'Figma', icon: '/logo/figma.svg', color: 'text-yellow-600',  },
];

const Technologies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Pre-calculate animation delays to avoid runtime calculations
  const animationDelays = useMemo(() => 
    technologies.map((_, index) => 100 + (index * 100)), []
  );

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Use requestAnimationFrame for smoother state updates
        requestAnimationFrame(() => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-sm font-semibold uppercase tracking-wider mb-2">
            TECHNOLOGIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Technologies we use
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our system is developed using efficient up-to-date technologies with supervision of qualified professionals. 
            On database layer, we use Oracle/MySQL. Java, Hibernate, Flutter, Angular, NodeJs etc are used in Service and UI Layer.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-transform duration-200 border border-gray-100 w-[calc(50%-8px)] sm:w-[200px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: isVisible ? `${animationDelays[index]}ms` : '0ms',
                transitionProperty: 'transform, opacity',
                transitionDuration: '600ms',
                willChange: 'transform, opacity'
              }}
            >
              <div className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 ${tech.color} flex justify-center items-center`}>
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 object-contain"
                  />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-800">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
