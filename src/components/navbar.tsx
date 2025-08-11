import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
             <Link href={"/"}> <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CodeZyne</h1></Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Our Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About Us
                </Link>
                <Link href="/contact-us" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Request Demo Button */}
            <div className="hidden md:block">
              <Link href="/contact-us">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md transition-all duration-200 transform hover:scale-105"
              >
                Request a Demo
              </Button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar