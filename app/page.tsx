import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Button } from './components/Button'
import { HeroSection } from './components/HeroSection'
import { ServiceCard } from './components/ServiceCard'
import { TestimonialCard } from './components/TestimonialCard'
import { AnimateOnScroll } from './components/AnimateOnScroll'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Modern Redesign */}
      <section className="relative h-[75vh] flex items-center pt-10">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-shot.JPEG"
            alt="Construction Team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <AnimateOnScroll variant="fade-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Lexend_Peta'] text-white leading-tight mb-4">
                QUALITY <span className="text-white block">CONSTRUCTION</span> <span className="text-white block">SOLUTIONS</span>
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-right" delay={200}>
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Blackstone Contracting delivers exceptional construction services with integrity and reliability. We specialize in residential and multi-family projects, providing quality craftsmanship and clear communication.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/get-a-quote" variant="white" size="lg" className="min-w-[180px] justify-center rounded-none hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">
                  Get a Quote
                </Button>
                <Button href="/contact-us" variant="whiteOutline" size="lg" className="min-w-[180px] justify-center transition-all hover:translate-y-[-5px]">
                  Contact Us
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        
      </section>
      
      {/* What We Do Best Section - High-End Redesign */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute right-0 top-0 w-72 h-72 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-right" className="order-2 md:order-1">
                <div className="space-y-6">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3 font-['Lexend_Peta']">WHAT WE DO BEST</p>
                <h2 className="text-3xl font-medium font-['Lexend_Peta'] uppercase leading-tight">
                  CUSTOMIZED STAFFING<br />SOLUTIONS
                </h2>
                <div className="h-1 w-16 bg-black mt-5"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Our Blackstone team specializes in creating customized staffing solutions to address your specific needs, from temporary staffing to permanent placements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our dedicated team works closely with you to understand your unique requirements and deliver exceptional talent that meets your project demands.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:items-center">
                  <Button href="/about-us" variant="default" size="lg" className="justify-center px-8 rounded-none hover:translate-y-[-5px] transition-transform duration-300">
                    <span className="flex items-center gap-2">
                      Learn More
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Button>
                  
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">100%</span>
                      <span className="text-sm text-gray-500 uppercase">Client Satisfaction</span>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">10+</span>
                      <span className="text-sm text-gray-500 uppercase">Years Experience</span>
                    </div>
                  </div>
                </div>
                
                {/* Trusted by section */}
                <div className="mt-10">
                  <div className="flex items-center">
                    <p className="font-medium text-gray-600 mr-4">Trusted by</p>
                    <Image 
                      src="/images/james-hardie-vector-logo.svg" 
                      alt="James Hardie" 
                      width={150} 
                      height={50} 
                      className="h-auto opacity-90 transition-opacity hover:opacity-100" 
                    />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-left" className="order-1 md:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 w-full h-full border-2 border-gray-200 z-0"></div>
                
                <div className="relative z-10 overflow-hidden">
                  <Image 
                    src="/images/DSC00839.JPEG"
                    alt="Construction Worker" 
                    width={600}
                    height={500}
                    className="w-full h-[500px] object-cover transform transition-transform duration-700 hover:scale-105" 
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70"></div>
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-6 bg-white"></div>
                      <p className="text-white text-sm uppercase tracking-widest font-['Lexend_Peta']">Excellence in Staffing</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="p-8 border-l-2 border-gray-200 hover:border-black transition-colors duration-300">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 5.5L7.5 8.5M7 13L14 6L17 9L10 16L7 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15L5.5 18.5C5.35555 18.6444 5.13888 18.6444 5 18.5C4.86112 18.3556 4.86112 18.1389 5 18L8.5 14.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-3">SKILLED WORKFORCE</h3>
                <p className="text-gray-700">
                  Access a pool of highly qualified construction professionals, specifically vetted for your unique project needs.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.2}>
              <div className="p-8 border-l-2 border-gray-200 hover:border-black transition-colors duration-300">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L12 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12L17 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21L12 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12L7 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.364 5.63604L15.5355 8.46447" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.364 18.364L15.5355 15.5355" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.63604 18.364L8.46447 15.5355" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.63604 5.63604L8.46447 8.46447" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-3">TAILORED SOLUTIONS</h3>
                <p className="text-gray-700">
                  Our personalized approach ensures your staffing needs are met with precision, adapting to your project timeline.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <div className="p-8 border-l-2 border-gray-200 hover:border-black transition-colors duration-300">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 22H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 2H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 22V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H11C9.93913 13 8.92172 13.4214 8.17157 14.1716C7.42143 14.9217 7 15.9391 7 17V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 2V7C7 8.06087 7.42143 9.07828 8.17157 9.82843C8.92172 10.5786 9.93913 11 11 11H13C14.0609 11 15.0783 10.5786 15.8284 9.82843C16.5786 9.07828 17 8.06087 17 7V2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-3">FLEXIBLE SCALABILITY</h3>
                <p className="text-gray-700">
                  Easily scale your workforce up or down based on project demands, optimizing resources and cost efficiency.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned with Black Background */}
      <section className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-down">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium font-['Lexend_Peta'] text-white uppercase relative inline-block">
                Our Services
                <span className="absolute h-1 w-24 bg-white bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimateOnScroll variant="fade-up" delay={0}>
              <Link href="/services#siding" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/DSC00774.JPEG"
                    alt="Siding Installation"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Siding Installation</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 9H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 15H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 21H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 3V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 3V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">Expert installation of various siding materials to enhance durability and appearance.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={100}>
              <Link href="/services#windows" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/IMG_0858.jpeg"
                    alt="Window Installation"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Window Installation</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 9H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 21V9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 21V9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">Precise fitting of windows to improve energy efficiency, security, and aesthetics.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={200}>
              <Link href="/services#doors" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/IMG_5322.jpeg"
                    alt="Door Installation"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Door Installation</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="2" width="16" height="20" rx="2" stroke="black" strokeWidth="2"/>
                          <circle cx="16" cy="12" r="1.5" stroke="black" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">From entry doors to interior options, our services ensure security and functionality.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={300}>
              <Link href="/services#sliding-doors" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/IMG_0660.jpeg"
                    alt="Sliding Glass Door Installation"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Sliding Glass Door</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="4" width="20" height="16" rx="2" stroke="black" strokeWidth="2"/>
                          <path d="M12 4V20" stroke="black" strokeWidth="2"/>
                          <path d="M11 12H6" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M18 12H13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">Create seamless transitions between indoor and outdoor spaces with our installation services.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={400}>
              <Link href="/services#deck" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/blackstone-deck-rebuilding.jpg"
                    alt="Deck Rebuilding"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Deck Rebuilding</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 12H12M12 12H21M12 12V21M12 12V3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 20H5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M19 20H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M9 20H15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 4H5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M19 4H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">Transform your outdoor living space with our comprehensive deck rebuilding services.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={500}>
              <Link href="/services#repairs" className="block">
                <div className="relative group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10 transition-opacity group-hover:opacity-90 opacity-70 rounded-xl"></div>
                  <Image
                    src="/images/IMG_3537.JPEG"
                    alt="Dry Rot Repairs"
                    width={400}
                    height={250}
                    className="w-full h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium font-['Lexend_Peta'] text-white uppercase group-hover:text-white">Dry Rot Repairs</h3>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H9.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M15 4L12 7L9 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 10L11 13L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 10L13 13L16 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 group-hover:text-white">Protect the structural integrity of your property with our extensive repair services.</p>
                    <span className="text-white group-hover:text-white inline-flex items-center font-['Lexend_Peta'] text-sm uppercase group-hover:underline">
                      Learn More
                      <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - Inspired by Reference */}
      <section className="pb-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimateOnScroll variant="fade-up">
            <p className="text-sm font-medium tracking-wider uppercase text-gray-400 mb-3 font-['Lexend_Peta']">BENEFITS OF</p>
            <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta'] mb-16">
              PARTNERING WITH<br />BLACKSTONE
            </h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="mb-5 text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 10.5V15.5M15 8.5V13.5M12 6.5V17.5M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3.32698 19.362C3.6146 20.3854 4.07354 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium mb-4 font-['Lexend_Peta']">ACCESS TO SPECIALIZED TALENT</h3>
                <p className="text-gray-300 text-center">
                  Gain immediate access to a pool of vetted construction professionals skilled in various trades. Our talent database allows you to quickly access qualified professionals who match your specific needs.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="mb-5 text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17V17.5V18M12 6V6.5V7M8.5 19.5L15.5 4.5M21 12C21 16.9706 16.9706 20 12 20C7.02944 20 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium mb-4 font-['Lexend_Peta']">COST SAVINGS</h3>
                <p className="text-gray-300 text-center">
                  By partnering with our specialized staffing services, you save valuable time and resources typically spent on recruitment, onboarding, and workforce management.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="mb-5 text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L14 14M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium mb-4 font-['Lexend_Peta']">TIME OPTIMIZATION</h3>
                <p className="text-gray-300 text-center">
                  Blackstone's staffing solutions eliminate wasted time on administrative paperwork, call-outs, and scheduling conflicts. Our managed services ensure your projects stay on target.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Our Process Section - Inspired by Reference */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-down">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-wider uppercase text-gray-500 mb-2 font-['Lexend_Peta']">OUR PROCESS</p>
              <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta']">
                WE MAKE THINGS SIMPLE
              </h2>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <AnimateOnScroll variant="fade-right" className="md:col-span-7">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="/images/IMG_6942.jpeg"
                  alt="Construction Site" 
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover" 
                />
              </div>
            </AnimateOnScroll>
            
            <div className="md:col-span-5 space-y-10">
              <AnimateOnScroll variant="fade-left" delay={0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg uppercase font-medium font-['Lexend_Peta'] mb-2">Assessment and Discovery</h3>
                    <p className="text-gray-700">
                      Through comprehensive discussions, we identify your specific staffing requirements and establish the groundwork for a tailored solution.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll variant="fade-left" delay={0.2}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg uppercase font-medium font-['Lexend_Peta'] mb-2">Tailored Staffing Plan Development</h3>
                    <p className="text-gray-700">
                      With insights from the discovery phase, we create a comprehensive plan that integrates seamlessly with your existing business operations.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll variant="fade-left" delay={0.3}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg uppercase font-medium font-['Lexend_Peta'] mb-2">Implementation and Ongoing Support</h3>
                    <p className="text-gray-700">
                      Our dedicated expertise includes carefully selecting and deploying the right staff for each stage of your project lifecycle.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl uppercase font-medium font-['Lexend_Peta'] text-gray-900">
                What Our Clients Say
              </h2>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="relative h-full bg-white p-8 shadow-sm group">
                <div className="absolute top-0 left-0 w-16 h-16 bg-black/[0.02] group-hover:bg-black/[0.04] transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-black/10 group-hover:border-black/20 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col h-full pt-4">
                  <blockquote className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                    Blackstone has proven to be a reliable partner when it comes to labor staffing. They consistently supply qualified, dependable workers across a range of trades and project types. Their communication is strong, they respond quickly to staffing needs, and they show good flexibility when project demands change.
                  </blockquote>
                  <div>
                    <div className="mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="font-medium text-gray-900 text-lg">Brad Snodgrass</div>
                    <div className="text-gray-500">Director of Maintenance Sales — Finnmark Property Services</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.2}>
              <div className="relative h-full bg-white p-8 shadow-sm group">
                <div className="absolute top-0 left-0 w-16 h-16 bg-black/[0.02] group-hover:bg-black/[0.04] transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-black/10 group-hover:border-black/20 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col h-full pt-4">
                  <blockquote className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                    As the owner of Dagmar Construction, I've had the pleasure of working with Blackstone Construction. They are our preferred installer for our exterior projects, and I can confidently say they're a cut above the rest. Their team consistently delivers top-notch craftsmanship and brings a level of professionalism that makes them a trusted partner.
                  </blockquote>
                  <div>
                    <div className="mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="font-medium text-gray-900 text-lg">Erik Brigham</div>
                    <div className="text-gray-500">Owner — Dagmar Construction</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <div className="relative h-full bg-white p-8 shadow-sm group">
                <div className="absolute top-0 left-0 w-16 h-16 bg-black/[0.02] group-hover:bg-black/[0.04] transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-black/10 group-hover:border-black/20 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col h-full pt-4">
                  <blockquote className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                    Whether it's commercial or residential, Blackstone always delivers quick and quality work. Their skilled and qualified workforce and their management of their crews set them far apart from any other company. Having them on a project is peace of mind.
                  </blockquote>
                  <div>
                    <div className="mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="font-medium text-gray-900 text-lg">Dillon DeSean</div>
                    <div className="text-gray-500">Project Manager/Estimator - Clear Choice Windows & Doors</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.4}>
            <div className="text-center mt-20">
              <Button href="/get-a-quote" variant="default" size="lg" className="rounded-none hover:bg-black hover:text-white transition-all hover:translate-y-[-5px]">
                START YOUR PROJECT
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Homeowners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variant="fade-right">
                <div>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3 font-['Lexend_Peta']">RESIDENTIAL SERVICES</p>
                  <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta'] mb-6">
                    ARE YOU A HOMEOWNER?
                  </h2>
                  <div className="h-1 w-16 bg-black mb-6"></div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    While we excel at commercial and multi-family projects, Blackstone Contracting is proud to also serve homeowners with the same level of quality and professionalism.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    From siding and window installations to deck rebuilding and dry rot repairs, our skilled team is equipped to enhance your home with precision craftsmanship and attention to detail.
                  </p>
                  <Button href="/get-a-quote" variant="default" size="lg" className="rounded-none hover:translate-y-[-5px] transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left">
                <div className="relative">
                  <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-black rounded-lg"></div>
                  <Image 
                    src="/images/ludwick.JPEG" 
                    alt="Modern Home Exterior" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto rounded-lg shadow-xl relative z-10" 
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Redesigned to Match Site Aesthetic */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-white rounded-full opacity-5"></div>
          <div className="absolute -left-24 top-32 w-64 h-64 bg-white rounded-full opacity-5"></div>
          <div className="absolute left-1/2 top-0 w-32 h-32 bg-white rounded-full opacity-5 transform -translate-x-1/2"></div>
          <Image 
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background Pattern" 
            layout="fill"
            objectFit="cover" 
            className="opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/100"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.2em] font-light text-sm mb-3 text-white/70 font-['Lexend_Peta']">START YOUR JOURNEY</p>
              <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta'] mb-4">
                READY TO START YOUR PROJECT?
              </h2>
              <div className="h-1 w-16 bg-white mx-auto mb-6"></div>
              <p className="max-w-xl mx-auto text-gray-300">
                Let us help you find the right professionals for your construction project. Our team is ready to provide the expertise you need.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <div className="text-white mb-4 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M9 8H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="uppercase text-lg font-medium mb-4 text-center font-['Lexend_Peta']">REQUEST A QUOTE</h3>
                <p className="text-gray-300 text-center mb-6">
                  Fill out our simple form and get a customized quote based on your specific project requirements.
                </p>
                <div className="text-center">
                  <Button href="/get-a-quote" variant="white" className="rounded-none w-full hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">
                    GET STARTED
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.2}>
              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <div className="text-white mb-4 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="uppercase text-lg font-medium mb-4 text-center font-['Lexend_Peta']">CONSULT WITH US</h3>
                <p className="text-gray-300 text-center mb-6">
                  Speak directly with our team to discuss your project details and how we can help bring your vision to life.
                </p>
                <div className="text-center">
                  <Button href="/contact-us" variant="white" className="rounded-none w-full hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">
                    CONTACT US
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <div className="text-white mb-4 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 12.5719L12.5719 19.5L11.25 18.1781L5.57812 12.5719L4.5 11.4938V4.5H11.4938L19.5 12.5719Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.25 8.25H8.2575" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="uppercase text-lg font-medium mb-4 text-center font-['Lexend_Peta']">EXPLORE SERVICES</h3>
                <p className="text-gray-300 text-center mb-6">
                  Browse our comprehensive range of construction services to find the perfect solution for your needs.
                </p>
                <div className="text-center">
                  <Button href="/services" variant="white" className="rounded-none w-full hover:bg-white hover:text-black transition-all hover:translate-y-[-5px]">
                    VIEW SERVICES
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
