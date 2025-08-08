import React from 'react';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

const technologies: Technology[] = [
  { name: 'Angular', icon: 'A', color: 'text-red-600' },
  { name: 'Maven', icon: 'M', color: 'text-orange-500' },
  { name: 'NGINX', icon: 'N', color: 'text-green-600' },
  { name: 'C Sharp', icon: 'C#', color: 'text-green-600' },
  { name: 'HTML 5', icon: '5', color: 'text-orange-500' },
  { name: 'CSS 3', icon: '3', color: 'text-blue-600' },
  { name: 'SASS', icon: 'S', color: 'text-pink-500' },
  { name: 'PHP', icon: 'php', color: 'text-blue-600' },
  { name: 'MySQL', icon: 'SQL', color: 'text-blue-600' },
  { name: 'Illustrator', icon: 'Ai', color: 'text-black' },
  { name: 'Photoshop', icon: 'Ps', color: 'text-blue-600' },
  { name: 'Bootstrap', icon: 'B', color: 'text-purple-600' },
  { name: 'Dot Net', icon: '.NET', color: 'text-blue-600' },
  { name: 'Oracle', icon: 'O', color: 'text-red-600' },
  { name: 'Typescript', icon: 'TS', color: 'text-blue-600' },
  { name: 'Tomcat', icon: '🐱', color: 'text-green-600' },
  { name: 'Selenium', icon: 'Se', color: 'text-green-600' },
  { name: 'Spring Boot', icon: '⚡', color: 'text-green-600' },
  { name: 'Jaspersoft', icon: 'J', color: 'text-blue-600' },
  { name: 'Java', icon: '☕', color: 'text-red-600' },
  { name: 'Express.js', icon: 'ex', color: 'text-black' },
  { name: 'SQL', icon: '💾', color: 'text-yellow-600' },
];

const Technologies: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
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
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-[200px]"
            >
              <div className={`text-3xl font-bold mb-3 ${tech.color}`}>
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-gray-800">
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
