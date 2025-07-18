"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  const getAnimationClass = (index: number) => {
    if (!mounted) return 'opacity-0 translate-y-8'
    
    return isVisible 
      ? `opacity-100 translate-y-0 transition-all duration-700 ease-out delay-[${index * 100}ms]` 
      : 'opacity-0 translate-y-8'
  }

  return (
    <footer 
      ref={footerRef} 
      className={`py-16 bg-white relative overflow-hidden ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
    >
      {/* Animated footer line */}
      <div 
        className={`absolute top-0 left-0 w-full h-1 ${isVisible ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-black to-transparent opacity-5`}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className={`flex justify-center mb-8 ${getAnimationClass(0)}`}>
          <Image 
            src="/images/black-stone-md-black-logo.png" 
            alt="Blackstone Contracting" 
            width={180} 
            height={60} 
            className="h-auto" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className={`text-center md:text-left ${getAnimationClass(1)}`}>
            <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 uppercase relative inline-block group">
              Contact Us
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="mb-2 transition-all duration-300 hover:translate-x-1 cursor-default">PO Box 283</p>
            <p className="mb-2 transition-all duration-300 hover:translate-x-1 cursor-default">West Linn, OR 97068</p>
            <p className="mb-2 transition-all duration-300 hover:translate-x-1 cursor-default">
              <a href="tel:5032105197" className="hover:underline">Phone: (503) 210-5197</a>
            </p>
            <p className="mb-2 transition-all duration-300 hover:translate-x-1 cursor-default">
              <a href="mailto:info@blackstonecontractingllc.com" className="hover:underline">Email: info@blackstonecontractingllc.com</a>
            </p>
          </div>
          <div className={`text-center ${getAnimationClass(2)}`}>
            <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 uppercase relative inline-block group">
              Quick Links
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact Us'].map((item, index) => (
                <li 
                  key={item} 
                  className={`transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700 delay-[${(index + 3) * 100}ms]`}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:underline relative inline-block group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              <li 
                className={`transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700 delay-[700ms]`}
              >
                <Link 
                  href="/get-a-quote" 
                  className="hover:underline relative inline-block group"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`text-center md:text-right ${getAnimationClass(3)}`}>
            <h3 className="text-lg font-medium font-['Lexend_Peta'] mb-4 uppercase relative inline-block group">
              Follow Us
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://www.linkedin.com/company/blackstonecontractingllc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/blackstonecontracting/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-gray-800"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8717 9.1282C15.4785 9.73494 15.8741 10.5209 16.0002 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={`border-t border-gray-200 pt-8 ${getAnimationClass(4)}`}>
          <p className={`text-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
            © {new Date().getFullYear()} BLACKSTONE CONTRACTING LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 