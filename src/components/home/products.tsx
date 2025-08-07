import React from 'react';

// Product data array
const productsData = [
  {
    id: 1,
    title: 'Medicare',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    largeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    largeIconColor: 'text-indigo-400',
    largeIconBg: 'bg-indigo-50',
    cardStyle: { backgroundColor: 'rgba(146, 39, 143, 0.15)' }
  },
  {
    id: 2,
    title: 'HR Payroll',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    largeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    largeIconColor: 'text-green-400',
    largeIconBg: 'bg-green-50'
  },
  {
    id: 3,
    title: 'Appointment',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    largeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    largeIconColor: 'text-purple-400',
    largeIconBg: 'bg-purple-50'
  }
];

const Products = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-lg mb-2">WHAT WE DO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We develop innovative healthcare solutions that streamline processes, improve patient care, and enhance operational efficiency for medical professionals.
          </p>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-45 justify-items-center">
          {productsData.map((product) => (
            <div 
              key={product.id}
              className="bg-white w-[350px] h-[380px] md:w-[380px] md:h-[380px] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={product.cardStyle}
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${product.bgColor} flex items-center justify-center`}>
                    {product.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{product.title}</h3>
                <div className="flex justify-center">
                  <div className={`w-48 h-48 ${product.largeIconBg} rounded-lg flex items-center justify-center`}>
                    {product.largeIcon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;