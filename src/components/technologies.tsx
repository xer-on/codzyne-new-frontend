"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState, useCallback } from 'react';

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
  { name: 'SQL', icon: '/logo/sql.svg', color: 'text-yellow-600',  },
];

const Technologies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

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
              className={`bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-500 border border-gray-100 w-[calc(50%-8px)] sm:w-[200px] ${
                isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: isVisible ? `${100 + (index * 30)}ms` : '0ms',
                animationFillMode: 'both'
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
