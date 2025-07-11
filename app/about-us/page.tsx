import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import { AnimateOnScroll } from '../components/AnimateOnScroll'

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimateOnScroll variant="fade-down">
        <section className="bg-gray-100 relative pt-10">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase tracking-wide">
                About Blackstone Contracting
              </h1>
              <Button href="/get-a-quote" variant="default" size="lg" className="rounded-none hover:translate-y-[-5px] transition-all duration-300">GET A QUOTE</Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Company Mission Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <AnimateOnScroll variant="fade-right" className="md:w-1/2 md:pr-16 mb-10 md:mb-0">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">Our Mission</h2>
                <h3 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase relative inline-block">
                  Building With Purpose
                  <span className="absolute h-1 w-16 bg-black bottom-[-10px] left-0"></span>
                </h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Blackstone Contracting builds a future rooted in quality, integrity, and customer care. Since our founding, 
                  we've dedicated ourselves to top-notch craftsmanship and strengthening our communities through sustainable practices.
                </p>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Our mission is to transform your construction experience into a journey defined by ease, reliability, and trust. 
                  Over the past three years, Blackstone Contracting has swiftly made its mark in the Portland Metro area, Washington, and the broader Pacific Northwest, backed by 
                  over 15 years of industry expertise.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={200} className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-black rounded-lg"></div>
                <Image 
                  src="/images/IMG_3946.jpeg" 
                  alt="Blackstone Contracting Team" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto rounded-lg shadow-xl relative z-10" 
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-down">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] uppercase relative inline-block mx-auto">
                Our Core Values
                <span className="absolute h-1 w-24 bg-black bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimateOnScroll variant="zoom-in" delay={0}>
              <div className="bg-white p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-black text-white mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Lexend_Peta'] uppercase text-center mb-4">Quality</h3>
                <p className="text-gray-700 text-center">
                  We pride ourselves on delivering top-notch craftsmanship with meticulous attention to detail. 
                  Every project is executed with precision, ensuring durability and aesthetic excellence.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={200}>
              <div className="bg-white p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-black text-white mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Lexend_Peta'] uppercase text-center mb-4">Integrity</h3>
                <p className="text-gray-700 text-center">
                  We operate with honesty and transparency in all aspects of our business. Our clients trust us because 
                  we deliver on our promises and maintain the highest ethical standards in every interaction.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" delay={400}>
              <div className="bg-white p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-black text-white mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['Lexend_Peta'] uppercase text-center mb-4">Communication</h3>
                <p className="text-gray-700 text-center">
                  We maintain a seamless flow of communication throughout every project, ensuring all stakeholders 
                  are informed and aligned from start to finish for a smooth, stress-free experience.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <Image 
            src="/images/DSC00808.jpg" 
            alt="Construction Excellence" 
            fill
            className="object-cover opacity-20" 
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <AnimateOnScroll variant="fade-right" className="md:w-1/2 md:pr-16 mb-10 md:mb-0">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-4">OUR EXPERTISE</h2>
                <h3 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] mb-8 uppercase relative inline-block">
                  EXCELLENCE IN CONSTRUCTION
                  <span className="absolute h-1 w-16 bg-white bottom-[-10px] left-0"></span>
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  We specialize in multi-family and single-family residential projects, bringing meticulous attention to detail 
                  and unmatched craftsmanship to every job. Our services range from siding and window installation to comprehensive 
                  dry rot repairs and deck rebuilding.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  What sets us apart is our unwavering commitment to clear communication and meticulous organization from start to finish. 
                  Our team ensures a seamless flow of communication throughout every project, keeping all contractors and stakeholders 
                  informed and aligned.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={200} className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-10px]">
                  <h4 className="text-lg font-medium font-['Lexend_Peta'] uppercase mb-3">15+ Years</h4>
                  <p className="text-gray-300">Industry experience ensuring expert solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-10px]">
                  <h4 className="text-lg font-medium font-['Lexend_Peta'] uppercase mb-3">200+</h4>
                  <p className="text-gray-300">Successfully completed projects in Portland area</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-10px]">
                  <h4 className="text-lg font-medium font-['Lexend_Peta'] uppercase mb-3">100%</h4>
                  <p className="text-gray-300">Commitment to client satisfaction</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:translate-y-[-10px]">
                  <h4 className="text-lg font-medium font-['Lexend_Peta'] uppercase mb-3">Full Service</h4>
                  <p className="text-gray-300">End-to-end construction solutions</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll variant="fade-down">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium font-['Lexend_Peta'] uppercase relative inline-block mx-auto">
                Who We Serve
                <span className="absolute h-1 w-24 bg-black bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimateOnScroll variant="fade-up" delay={0} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-xl transition-all duration-300 hover:translate-y-[-10px] relative group h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="text-white text-center px-8">
                    <h4 className="text-xl font-medium font-['Lexend_Peta'] uppercase mb-4">Our Commercial Approach</h4>
                    <p className="mb-6">We understand the unique challenges of large-scale projects and provide specialized services tailored to meet contractor needs, timelines, and budgets.</p>
                    <Button variant="whiteOutline" href="/contact-us" className="rounded-none hover:translate-y-[-5px] transition-all duration-300">Contact Us</Button>
                  </div>
                </div>
                <Image 
                  src="/images/DSC00810.jpeg" 
                  alt="General Contractors" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-medium font-['Lexend_Peta'] mb-6 uppercase relative inline-block">
                  General Contractors
                  <span className="absolute h-1 w-12 bg-black bottom-[-10px] left-0"></span>
                </h3>
                <p className="text-gray-700 mt-6">
                  Our primary focus is on general contractors managing large reconstruction and multi-family projects. 
                  We provide specialized construction services tailored to meet the demands of complex projects, 
                  ensuring quality workmanship and reliable service.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={200} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-xl transition-all duration-300 hover:translate-y-[-10px] relative group h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="text-white text-center px-8">
                    <h4 className="text-xl font-medium font-['Lexend_Peta'] uppercase mb-4">Our Residential Approach</h4>
                    <p className="mb-6">For homeowners, we offer a personalized approach that prioritizes your vision, providing clear communication, transparent pricing, and quality results.</p>
                    <Button variant="whiteOutline" href="/get-a-quote" className="rounded-none hover:translate-y-[-5px] transition-all duration-300">Get a Quote</Button>
                  </div>
                </div>
                <Image 
                  src="/images/IMG_3343.jpeg" 
                  alt="Homeowners" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-medium font-['Lexend_Peta'] mb-6 uppercase relative inline-block">
                  Homeowners
                  <span className="absolute h-1 w-12 bg-black bottom-[-10px] left-0"></span>
                </h3>
                <p className="text-gray-700 mt-6">
                  We also serve homeowners looking for quality construction services. Whether you need siding replacement, 
                  window installation, or deck rebuilding, we bring the same level of expertise and attention to detail 
                  to residential projects of all sizes.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimateOnScroll variant="fade-up">
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
          <Image
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Construction Background"
            fill
            className="object-cover opacity-10 mix-blend-overlay"
          />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl uppercase font-medium font-['Lexend_Peta'] mb-8">
              Ready to Work with Us?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-300">
              Contact Blackstone Contracting today to discuss how our construction services can help you 
              achieve a beautiful, durable, and functional result for your property.
            </p>
            <Button href="/get-a-quote" variant="whiteOutline" size="lg">
              GET A QUOTE
            </Button>
          </div>
        </section>
      </AnimateOnScroll>

      <Footer />
    </main>
  )
} 