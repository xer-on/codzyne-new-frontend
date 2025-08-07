import Image from 'next/image';
import React from 'react';

// Product data array
const productsData = [
  {
    id: 1,
    title: 'Medicare',
    icon: 'https://mysoftltd.com/assets/img/products/product-medicare.svg',
  },
  {
    id: 2,
    title: 'HR Payroll',
    icon: 'https://mysoftltd.com/assets/img/products/product-hr-payroll.svg',
  },
  {
    id: 3,
    title: 'Appointment',
    icon: 'https://mysoftltd.com/assets/img/products/product-appoinment.svg',
  },
  {
    id: 4,
    title: 'Prescription',
    icon: 'https://mysoftltd.com/assets/img/products/product-prescription.svg',
  },
  {
    id: 5,
    title: 'Apps',
    icon: 'https://mysoftltd.com/assets/img/products/product-apps.svg',
  },
  {
    id: 6,
    title: 'Accounts',
    icon: 'https://mysoftltd.com/assets/img/products/product-accounts.svg',
  },
  {
    id: 7,
    title: 'Doctors Module',
    icon: 'https://mysoftltd.com/assets/img/products/product-doc-module.svg',
  },
  {
    id: 8,
    title: 'ERP',
    icon: 'https://mysoftltd.com/assets/img/products/product-erp2.svg',
  },
  {
    id: 9,
    title: 'Item Booking',
    icon: 'https://mysoftltd.com/assets/img/products/product-item-booking.svg',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#92278f] font-bold text-lg mb-2">WHAT WE DO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-[15px] text-gray-600 max-w-[700px] mx-auto">
          Discover our suite of innovative healthcare products, designed to revolutionize the way healthcare is delivered and experienced. From telemedicine platforms to wearable devices, our products leverage cutting-edge technologies to empower patients, streamline workflows, and enhance clinical outcomes. 
          </p>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-45 justify-items-center">
          {productsData.map((product) => (
            <div 
               key={product.id}
               className="bg-[#EFEFEF] w-[350px] h-[380px] md:w-[380px] md:h-[380px] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
             >
               {/* Main illustration area */}
               <div className="flex-1 flex items-center justify-center p-6">
                 <div className={`w-64 h-64 rounded-xl flex items-center justify-center relative`}>
                   
                   {/* Main icon */}
                   <div className="relative z-10">
                     <Image src={`${product.icon}`} alt={product.title} width={220} height={150} />
                   </div>
                 </div>
               </div>
               
               {/* Title section */}
               <div className="p-6 pt-0">
                 <h3 className="text-2xl font-bold text-center text-[#007057]">{product.title}</h3>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;