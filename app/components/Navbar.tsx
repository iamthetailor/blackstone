"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './Button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(true)
  
  // Handle scroll and initial animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  
  return (
    <nav className={`bg-white py-4 fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    } opacity-100`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-20 transition-transform duration-300 hover:scale-105">
            <Image 
              src="/images/black-stone-md-black-logo.png" 
              alt="Blackstone Contracting" 
              width={180} 
              height={40} 
              className="h-auto" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About Us', 'Contact Us'].map((item, index) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`text-black hover:text-gray-600 font-medium font-['Lexend_Peta'] uppercase tracking-wide text-sm relative group transition-all duration-300 opacity-100`}
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/get-a-quote"
              className="transition-all duration-300 opacity-100"
            >
              <Button variant="default" size="lg" className="min-w-[180px] justify-center rounded-none hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">
                Get a Quote
              </Button>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-black z-20 w-10 h-10 flex items-center justify-center relative transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`absolute block w-7 h-0.5 bg-black transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
            <span className={`absolute block w-7 h-0.5 bg-black transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-10 transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 py-20">
              {['Home', 'Services', 'About', 'Contact Us'].map((item, index) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}-us`}
                  className={`text-xl font-medium font-['Lexend_Peta'] uppercase text-black hover:text-gray-600 tracking-wide transition-all duration-300 transform hover:translate-x-2 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              
              <div className={`pt-6 w-full max-w-xs transition-all duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <Link 
                  href="/get-a-quote" 
                  className="bg-black text-white w-full py-4 inline-block text-center font-medium font-['Lexend_Peta'] tracking-wide hover:bg-gray-800 transition duration-300 rounded-none hover:translate-y-[-5px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
            
            <div className={`py-6 border-t border-gray-100 flex justify-center space-x-8 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <a 
                href="https://www.linkedin.com/company/blackstone-contracting/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-black transition-colors transform hover:scale-110 transition-transform duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/blackstonecontracting/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-black transition-colors transform hover:scale-110 transition-transform duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8717 9.1282C15.4785 9.73494 15.8741 10.5209 16.0002 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 