"use client"

import React, { useEffect, useState } from 'react'

import { toast } from "sonner";
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

const Clients = () => {

  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const load = async () => {
    console.log('api called...');
    setLoading(true);
    try {
      const res = await fetch("/api/clients");
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error();
      setClients(data.data as IClient[]);
    } catch {
      toast.error("Failed to load clients");
    } finally {
      setLoading(false);
    }
  };
  load();
}, []); 

  if (loading) return <p>Loading...</p>;
  if (!clients.length) return <p></p>;

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

export default Clients