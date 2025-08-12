"use client"

import React, { createContext, useContext, useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Context for mobile menu state
interface MobileMenuContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider')
  }
  return context
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div>
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
               <Link href={"/"}> <Image src={"/codezyne.png"} alt="logo" width={1600} height={650} className="w-auto h-32 md:h-40" /></Link>
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
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button className="text-gray-600 hover:text-gray-900 p-2">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col h-full">
                      {/* Mobile Menu Header */}
                      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 px-4">
                        <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                      </div>
                      
                      {/* Mobile Navigation Links */}
                      <div className="flex flex-col space-y-4 flex-1 px-4">
                        <Link 
                          href="/" 
                          className="text-gray-900 hover:text-yellow-600 px-3 py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100"
                          onClick={closeMenu}
                        >
                          Home
                        </Link>
                        <Link 
                          href="/services" 
                          className="text-gray-600 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100"
                          onClick={closeMenu}
                        >
                          Our Services
                        </Link>
                        <Link 
                          href="/about" 
                          className="text-gray-600 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100"
                          onClick={closeMenu}
                        >
                          About Us
                        </Link>
                        <Link 
                          href="/contact-us" 
                          className="text-gray-600 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100"
                          onClick={closeMenu}
                        >
                          Contact
                        </Link>
                      </div>
                      
                      {/* Mobile Request Demo Button */}
                      <div className="pt-6 border-t border-gray-200 px-4 pb-4">
                        <Link href="/contact-us" onClick={closeMenu}>
                          <Button 
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md transition-all duration-200 transform hover:scale-105"
                          >
                            Request a Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </MobileMenuContext.Provider>
  )
}

export default Navbar