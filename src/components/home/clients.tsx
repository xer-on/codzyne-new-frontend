"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { ClientShowcase } from './Client-showcase';

export interface IClient {
  _id?: string; // optional because MongoDB generates it
  companyName: string;
  industry: string;
  contactPerson: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  description?: string;
  clientType?: string;
  logoUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Component for fetching and displaying clients data
function ClientsData() {
  const [clients, setClients] = useState<IClient[]>([]);

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients", { cache: "no-store" });
      const data = await res.json();
      const clientsData = data.data as IClient[];
      setClients(clientsData);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);
  
  return (
    <div>
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Background title */}
            <h2 className="text-7xl md:text-9xl font-bold text-gray-200 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-13 z-0 whitespace-nowrap overflow-hidden animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Our Clients
            </h2>
            
            {/* Main title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 relative z-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Our Clients
            </h2>
            
            {/* Carousel with navigation arrows inside */}
            <div className="mt-12 relative z-10">
              <ClientShowcase clients={clients} />
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

// Loading fallback component
function ClientsLoading() {
  return (
    <div className="bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-20 bg-gray-300 rounded mb-10 mx-auto max-w-md"></div>
            <div className="h-32 bg-gray-300 rounded mx-auto max-w-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Clients = () => {
  return (
    <Suspense fallback={<ClientsLoading />}>
      <ClientsData />
    </Suspense>
  );
}

export default Clients