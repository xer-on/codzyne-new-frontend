import Image from 'next/image';

const Mockup = () => {
  return (
    <section className="w-full min-h-[600px] flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Gradient background shape */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(120deg, #FFF7B2 0%, #E2E2F6 50%, #A07CC5 100%)',
        clipPath: 'polygon(0 0, 80% 8%, 100% 100%, 0% 100%)',
      }} />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto min-h-[500px]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl md:pl-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Transform Hospital<br />
            Efficiency with Our<br />
            Mobile Solution!
          </h1>
          <ul className="text-lg text-gray-800 space-y-3 font-medium mb-4 pl-4">
            <li className="list-disc">Streamline Patient Care</li>
            <li className="list-disc">Optimize Staff Workflow</li>
            <li className="list-disc">Enhance Operational Efficiency</li>
            <li className="list-disc">Online Appoinment</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="flex-1 flex justify-center items-center gap-8 mt-12 md:mt-0">
          {/* First phone */}
          <div className="relative w-[220px] h-[440px] md:w-[260px] md:h-[500px] rounded-3xl shadow-2xl border-4 border-white overflow-hidden rotate-[-6deg] bg-white">
            <Image src="/Banners/banner1.jpg" alt="Mobile Mockup 1" fill className="object-cover" />
          </div>
          {/* Second phone */}
          <div className="relative w-[220px] h-[440px] md:w-[260px] md:h-[500px] rounded-3xl shadow-2xl border-4 border-white overflow-hidden rotate-[8deg] bg-white -ml-12 md:-ml-20">
            <Image src="/Banners/banner1.jpg" alt="Mobile Mockup 2" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
