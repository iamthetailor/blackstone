import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import { AnimateOnScroll } from '../components/AnimateOnScroll'

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimateOnScroll variant="fade-down">
        <section className="bg-gray-100 relative pt-10">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase tracking-wide">
                Our Services
              </h1>
              <Button 
                href="/get-a-quote" 
                variant="default" 
                size="lg"
                className="rounded-none hover:translate-y-[-5px] transition-all duration-300"
              >
                GET A QUOTE
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Services Section */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-right" className="w-full">
            <div id="siding" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Siding Installation
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our expert team specializes in the installation of various siding materials to enhance both the durability and appearance 
                  of your building. We work with a wide range of materials to meet your specific needs and aesthetic preferences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From traditional vinyl and wood siding to modern fiber cement and composite materials, we ensure precision 
                  installation that protects your structure while elevating its visual appeal.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg" 
                    alt="Siding Installation" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100} className="w-full">
            <div id="windows" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg"
                    alt="Window Installation" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Window Installation
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Upgrade your property with our precise window installation services. We specialize in fitting windows 
                  that enhance energy efficiency while improving the aesthetic appeal of your building.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our experienced team handles everything from standard window replacements to custom installations, 
                  ensuring perfect fits that minimize drafts and maximize natural lighting.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-right" delay={100} className="w-full">
            <div id="doors" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Door Installation
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  From entry doors to interior options, our door installation services ensure security, functionality, and visual appeal. 
                  We work with a variety of materials including wood, fiberglass, and steel to meet your specific requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our professional team ensures proper fitting and alignment for smooth operation, weather sealing, and durability 
                  that stands the test of time.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg" 
                    alt="Door Installation" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100} className="w-full">
            <div id="sliding-doors" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/8134753/pexels-photo-8134753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sliding Glass Door Installation" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Sliding Glass Door Installation
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Create seamless transitions between indoor and outdoor spaces with our sliding glass door installation services. 
                  We specialize in integrating these functional features with modern appeal.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our installations focus on smooth operation, energy efficiency, and secure locking mechanisms, 
                  all while enhancing the overall aesthetics of your property.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-right" delay={100} className="w-full">
            <div id="deck" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Deck Rebuilding
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Transform your outdoor living space with our comprehensive deck services. From demolition to building, 
                  we create beautiful, functional spaces for relaxation and entertainment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our team works with quality materials designed to withstand the elements while providing the perfect 
                  extension of your living space for years to come.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="/images/blackstone-deck-rebuilding.jpg" 
                    alt="Deck Rebuilding" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100} className="w-full">
            <div id="repairs" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg" 
                    alt="Dry Rot Repairs" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl uppercase font-medium font-['Lexend_Peta'] mb-8 relative">
                  Dry Rot Repairs
                  <span className="absolute h-1 w-16 bg-black bottom-[-15px] left-0"></span>
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Protect the structural integrity of your property with our extensive dry rot repair services. We provide 
                  thorough assessments and repairs, including framing and plywood installation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our experienced team not only addresses existing damage but implements preventative measures to ensure 
                  long-term durability and protection against future issues.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-down">
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-3 font-['Lexend_Peta']">WHY CHOOSE US</p>
              <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta'] mb-4">
                Why Choose Blackstone Contracting
              </h2>
              <div className="h-1 w-24 bg-white mx-auto"></div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="p-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300 h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-4">Industry Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  With over 15 years of experience in the construction industry, we understand the unique challenges and 
                  requirements of both multi-family and single-family residential projects.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.2}>
              <div className="p-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300 h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-4">Quality Craftsmanship</h3>
                <p className="text-gray-300 leading-relaxed">
                  We pride ourselves on delivering top-notch craftsmanship with meticulous attention to detail. 
                  Every project is executed with precision, ensuring durability and aesthetic excellence.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <div className="p-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300 h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl uppercase font-medium font-['Lexend_Peta'] mb-4">Clear Communication</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain a seamless flow of communication throughout every project, ensuring all contractors and 
                  stakeholders are informed and aligned from start to finish.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimateOnScroll variant="fade-up">
        <section className="py-28 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-3 font-['Lexend_Peta']">START YOUR JOURNEY</p>
            <h2 className="text-3xl uppercase font-medium font-['Lexend_Peta'] mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <div className="h-1 w-16 bg-white mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-300 leading-relaxed">
              Contact Blackstone Contracting today to discuss how our construction services can help you 
              achieve a beautiful, durable, and functional result for your property.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button 
                href="/get-a-quote" 
                variant="white" 
                size="lg" 
                className="min-w-[200px] justify-center rounded-none hover:translate-y-[-5px] transition-all duration-300"
              >
                GET A QUOTE
              </Button>
              <Button 
                href="/contact-us" 
                variant="whiteOutline" 
                size="lg" 
                className="min-w-[200px] justify-center rounded-none hover:translate-y-[-5px] transition-all duration-300"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <Footer />
    </main>
  )
} 